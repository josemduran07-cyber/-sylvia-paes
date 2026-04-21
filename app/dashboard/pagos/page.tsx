import { LayoutShell } from "@/components/layout-shell";
import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui";
import { bankDetails, payments } from "@/lib/mock-data";

export default function PaymentsPage() {
  const totalPending = payments.filter((item) => item.status === "Pendiente").length;
  return (
    <LayoutShell title="Pagos" subtitle="Vista alumno">
      <Card>
        <CardContent className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-slate-500">Pagos pendientes</p>
            <p className="mt-1 text-2xl font-semibold">{totalPending}</p>
            <p className="mt-1 text-xs text-slate-400">Los pagos se realizan por transferencia y la confirmación es manual.</p>
          </div>
          <Button variant="secondary">Ver datos de transferencia</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Estado de pago</CardTitle>
          <CardDescription>Información mensual del pago del alumno.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {payments.map((item) => (
            <div key={item.id} className="grid gap-3 rounded-2xl border p-4 text-sm md:grid-cols-4">
              <div className="font-medium">{item.month}</div>
              <div>{item.amount}</div>
              <div>{item.dueDate}</div>
              <div>
                <Badge className={item.status === "Pagado" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}>{item.status}</Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Datos de transferencia</CardTitle>
          <CardDescription>Información referencial para el pago mensual.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 text-sm md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4"><span className="text-slate-500">Banco</span><p className="mt-1 font-medium">{bankDetails.bank}</p></div>
          <div className="rounded-2xl bg-slate-50 p-4"><span className="text-slate-500">Tipo de cuenta</span><p className="mt-1 font-medium">{bankDetails.accountType}</p></div>
          <div className="rounded-2xl bg-slate-50 p-4"><span className="text-slate-500">Número de cuenta</span><p className="mt-1 font-medium">{bankDetails.accountNumber}</p></div>
          <div className="rounded-2xl bg-slate-50 p-4"><span className="text-slate-500">RUT</span><p className="mt-1 font-medium">{bankDetails.rut}</p></div>
          <div className="rounded-2xl bg-slate-50 p-4"><span className="text-slate-500">Titular</span><p className="mt-1 font-medium">{bankDetails.holder}</p></div>
          <div className="rounded-2xl bg-slate-50 p-4"><span className="text-slate-500">Correo</span><p className="mt-1 font-medium">{bankDetails.email}</p></div>
        </CardContent>
      </Card>
    </LayoutShell>
  );
}
