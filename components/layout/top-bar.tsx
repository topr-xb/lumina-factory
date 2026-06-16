"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Bell, Plus } from "lucide-react";

interface TopBarProps {
  onMenuClick: () => void;
}

export function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-white/[0.06] bg-background/80 px-4 backdrop-blur-xl lg:px-8">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>
        
        <nav className="hidden items-center gap-1 text-sm text-muted-foreground md:flex">
          <span>Lumina</span>
          <span className="text-white/20">/</span>
          <span className="text-white">لوحة التحكم</span>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <Link href="/workspace">
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="ml-2 h-4 w-4" />
            دفعة جديدة
          </Button>
        </Link>

        <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-white">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-amber-500" />
        </Button>
      </div>
    </header>
  );
}
