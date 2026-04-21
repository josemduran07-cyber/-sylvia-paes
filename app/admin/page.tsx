import { AlertCircle } from "lucide-react";
import { LayoutShell } from "@/components/layout-shell";
import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input, Textarea } from "@/components/ui";
import { announcements, materials, payments, students } from "@/lib/mock-data";

export default function AdminPage() {
  return (
    <LayoutShell title="Administración" subtitle="Vista Sylvia" admin>
      <div className="grid gap-4 xl:grid-cols-[1fr_360px]">
        <Card>
          <CardHeader>
            <CardTitle>Alumnos inscritos</CardTitle>
            <CardDescription>Base administrativa inicial del preuniversitario.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {students.map((student) => (
              <div key={student.id} className="grid gap-3 rounded-2xl border p-4 text-sm md:grid-cols-[1fr_1fr_auto]">
                <div>
                  <p className="font-medium">{student.name}</p>
                  <p className="mt-1 text-xs text-slate-500">{student.email}</p>
                </div>
                <div className="text-slate-500">{student.payment}</div>
                {student.payment.includes("Pendiente") ? (
                  <Badge className="bg-amber-100 text-amber-700"><AlertCircle className="mr-1 h-3 w-3" /> Revisar</Badge>
                ) : (
                  <Badge className="bg-emerald-100 text-emerald-700">Al día</Badge>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Agregar alumno</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input placeholder="Nombre completo" />
              <Input placeholder="Correo electrónico" />
              <Button className="w-full">Guardar alumno</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Subir material</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input placeholder="Ej: Ensayo PAES mayo.pdf" />
              <Button className="w-full" variant="secondary">Agregar material</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Publicar aviso</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input placeholder="Título del aviso" />
              <Textarea placeholder="Escribe el contenido del aviso" />
              <Button className="w-full">Publicar aviso</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Resumen de materiales</CardTitle>
            <CardDescription>Base para futura gestión conectada a Supabase Storage.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {materials.map((item) => (
              <div key={item.id} className="rounded-2xl border p-4 text-sm">
                <p className="font-medium">{item.title}</p>
                <p className="mt-1 text-xs text-slate-500">{item.type} · {item.date}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resumen de pagos</CardTitle>
            <CardDescription>Base para futura gestión conectada a la tabla payments.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {payments.map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-2xl border p-4 text-sm">
                <div>
                  <p className="font-medium">{item.month}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.amount} · vence {item.dueDate}</p>
                </div>
                <Badge className={item.status === "Pagado" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}>{item.status}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Últimos avisos publicados</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {announcements.map((item) => (
            <div key={item.id} className="rounded-2xl border p-4">
              <p className="font-medium">{item.title}</p>
              <p className="mt-1 text-xs text-slate-500">{item.date}</p>
              <p className="mt-2 text-sm text-slate-600">{item.content}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </LayoutShell>
  );
}
