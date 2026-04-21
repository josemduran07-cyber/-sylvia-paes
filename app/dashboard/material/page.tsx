import { LayoutShell } from "@/components/layout-shell";
import { Badge, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui";
import { materials } from "@/lib/mock-data";

export default function MaterialsPage() {
  return (
    <LayoutShell title="Material" subtitle="Vista alumno">
      <Card>
        <CardHeader>
          <CardTitle>Material de estudio</CardTitle>
          <CardDescription>Guías, ensayos y solucionarios publicados para el preuniversitario.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {materials.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-3 rounded-2xl border p-4 text-sm">
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="mt-1 text-xs text-slate-500">{item.type} · {item.date}</p>
              </div>
              <Badge className="bg-slate-100 text-slate-700">Disponible</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </LayoutShell>
  );
}
