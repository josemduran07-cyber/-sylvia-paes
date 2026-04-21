import { CreditCard, FileText, GraduationCap } from "lucide-react";
import { LayoutShell } from "@/components/layout-shell";
import { SummaryCard } from "@/components/summary-cards";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui";
import { announcements, materials, payments } from "@/lib/mock-data";

export default function DashboardPage() {
  const pending = payments.filter((item) => item.status === "Pendiente").length;

  return (
    <LayoutShell title="Inicio" subtitle="Vista alumno">
      <div className="grid gap-4 md:grid-cols-3">
        <SummaryCard title="Programa" value="PAES CL" hint="Comprensión lectora" icon={GraduationCap} />
        <SummaryCard title="Material disponible" value={`${materials.length} archivos`} hint="Guías, ensayos y solucionarios" icon={FileText} />
        <SummaryCard title="Pagos pendientes" value={`${pending}`} hint="Avisos de mensualidad" icon={CreditCard} />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Resumen del programa</CardTitle>
            <CardDescription>Todo ordenado para que los alumnos tengan acceso simple a la información clave.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-2 text-sm text-slate-700">
            {[
              "Acceso privado para alumnos",
              "Material de estudio ordenado",
              "Horarios de clases y talleres",
              "Avisos importantes",
              "Pago por transferencia con confirmación manual",
              "Panel administrativo para Sylvia",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-4">{item}</div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Últimos avisos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {announcements.map((item) => (
              <div key={item.id} className="rounded-2xl border p-3">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="mt-1 text-xs text-slate-500">{item.date}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </LayoutShell>
  );
}
