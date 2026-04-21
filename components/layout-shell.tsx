import { ReactNode } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui";

export function LayoutShell({ title, subtitle, children, admin = false }: { title: string; subtitle: string; children: ReactNode; admin?: boolean; }) {
  return (
    <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[288px_1fr] md:px-6">
      <Sidebar admin={admin} />
      <main className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-slate-500">{subtitle}</p>
            <h2 className="text-3xl font-semibold">{title}</h2>
          </div>
          <div className="flex gap-3">
            <Link href={admin ? "/dashboard" : "/admin"}>
              <Button variant="secondary">{admin ? "Vista alumno" : "Vista Sylvia"}</Button>
            </Link>
            <Link href="/login">
              <Button>Cerrar sesión</Button>
            </Link>
          </div>
        </div>
        {children}
      </main>
    </div>
  );
}
