import { type NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  let {
    data: { user },
  } = await supabase.auth.getUser();

  // Fallback to Bearer token for programmatic/API access
  if (!user) {
    const authHeader = request.headers.get('authorization');
    const token = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;
    if (token) {
      const tokenUser = await supabase.auth.getUser(token);
      user = tokenUser.data.user;
    }
  }

  const pathname = request.nextUrl.pathname;
  const isProtected = pathname.startsWith('/dashboard') || pathname.startsWith('/workspace') || pathname.startsWith('/admin') || pathname.startsWith('/wallet') || pathname.startsWith('/gallery') || pathname.startsWith('/dna-profiles') || pathname.startsWith('/settings');
  const isAuthPage = pathname === '/login' || pathname === '/signup';

  if (isProtected && !user) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (isAuthPage && user) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return supabaseResponse;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};
