"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, BookOpen, Calendar, CreditCard, GraduationCap, Home, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const studentItems = [
  { href: "/dashboard", label: "Inicio", icon: Home },
  { href: "/dashboard/material", label: "Material", icon: BookOpen },
  { href: "/dashboard/horarios", label: "Horarios", icon: Calendar },
  { href: "/dashboard/avisos", label: "Avisos", icon: Bell },
  { href: "/dashboard/pagos", label: "Pagos", icon: CreditCard },
];

const adminItems = [{ href: "/admin", label: "Administración", icon: Settings }];

export function Sidebar({ admin = false }: { admin?: boolean }) {
  const pathname = usePathname();
  const items = admin ? [...studentItems, ...adminItems] : studentItems;

  return (
    <aside className="rounded-[28px] bg-slate-900 p-4 text-white shadow-soft">
      <div className="flex items-center gap-3 border-b border-slate-700 px-2 py-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
          <GraduationCap className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm text-slate-300">Preuniversitario online</p>
          <h1 className="text-lg font-semibold">Sylvia PAES</h1>
        </div>
      </div>
      <nav className="mt-5 space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition",
                active ? "bg-white text-slate-900" : "hover:bg-white/10",
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
