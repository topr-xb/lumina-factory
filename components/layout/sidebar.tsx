"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import {
  LayoutDashboard,
  Briefcase,
  Dna,
  ImageIcon,
  Wallet,
  ShieldCheck,
  Settings,
  LogOut,
  Sparkles,
  X,
} from "lucide-react";

interface SidebarProps {
  user: User;
  open: boolean;
  onClose: () => void;
}

const navItems = [
  { href: "/dashboard", label: "لوحة التحكم", icon: LayoutDashboard },
  { href: "/workspace", label: "فضاء العمل", icon: Briefcase },
  { href: "/dna-profiles/new", label: "هوية بصرية", icon: Dna },
  { href: "#", label: "معرض الصور", icon: ImageIcon, disabled: true },
  { href: "#", label: "المحفظة", icon: Wallet, disabled: true },
];

const adminItem = { href: "/admin", label: "الإدارة", icon: ShieldCheck };

export function Sidebar({ user, open, onClose }: SidebarProps) {
  const pathname = usePathname();
  const supabase = createClient();

  const isAdmin = user.user_metadata?.role === "admin" || user.email === "kqhg84854@gmail.com";

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed right-0 top-0 z-50 h-screen w-64 transform border-l border-white/[0.06] bg-[#0E0E10] transition-transform duration-300 ease-in-out lg:translate-x-0",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-between border-b border-white/[0.06] px-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-600">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading-en text-base font-bold leading-none text-white">
                  Lumina
                </span>
                <span className="text-[9px] leading-none text-amber-500">
                  مصنع الضوء
                </span>
              </div>
            </Link>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 overflow-y-auto p-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.label}
                  href={item.disabled ? "#" : item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    item.disabled
                      ? "pointer-events-none opacity-40"
                      : active
                      ? "bg-amber-500/10 text-amber-500"
                      : "text-muted-foreground hover:bg-white/[0.04] hover:text-white"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}

            {isAdmin && (
              <Link
                href={adminItem.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  pathname === adminItem.href
                    ? "bg-amber-500/10 text-amber-500"
                    : "text-muted-foreground hover:bg-white/[0.04] hover:text-white"
                )}
              >
                <ShieldCheck className="h-4 w-4" />
                {adminItem.label}
              </Link>
            )}
          </nav>

          {/* User section */}
          <div className="border-t border-white/[0.06] p-4">
            <div className="mb-3 rounded-lg bg-white/[0.03] px-3 py-2">
              <p className="truncate text-sm font-medium text-white">{user.email}</p>
              <p className="text-xs text-muted-foreground">
                {isAdmin ? "مسؤول" : "مستخدم"}
              </p>
            </div>

            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-white"
            >
              <Settings className="h-4 w-4" />
              الإعدادات
            </Link>

            <button
              onClick={handleLogout}
              className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
            >
              <LogOut className="h-4 w-4" />
              تسجيل الخروج
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
