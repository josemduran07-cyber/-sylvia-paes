import Link from "next/link";
import { GraduationCap, LogIn } from "lucide-react";
import { brand } from "@/lib/mock-data";
import { Button, Card, CardContent, Input } from "@/components/ui";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-stone-100 via-white to-slate-100 p-6 md:p-10">
      <div className="grid w-full max-w-6xl gap-6 lg:grid-cols-2">
        <Card className="overflow-hidden">
          <CardContent className="flex h-full flex-col justify-between bg-slate-900 p-8 text-white md:p-10">
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <GraduationCap className="h-7 w-7" />
              </div>
              <h1 className="text-4xl font-semibold">{brand.name}</h1>
              <p className="mt-4 text-base text-slate-300">{brand.subtitle}</p>
              <p className="mt-4 text-sm leading-6 text-slate-400">{brand.description}</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-slate-300">Programa</p>
                <p className="mt-1 text-xl font-semibold">1 activo</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-slate-300">Alumnos</p>
                <p className="mt-1 text-xl font-semibold">24 inscritos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                <LogIn className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Acceso plataforma</p>
                <h2 className="text-2xl font-semibold">Bienvenida</h2>
              </div>
            </div>
            <div className="space-y-4">
              <Input placeholder="Correo electrónico" />
              <Input placeholder="Contraseña" type="password" />
              <div className="grid gap-3 md:grid-cols-2">
                <Link href="/dashboard"><Button className="w-full">Entrar como alumno</Button></Link>
                <Link href="/admin"><Button variant="secondary" className="w-full">Entrar como Sylvia</Button></Link>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
              Esta base está lista para conectar autenticación real con Supabase.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
