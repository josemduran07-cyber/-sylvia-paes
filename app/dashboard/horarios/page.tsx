import { LayoutShell } from "@/components/layout-shell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui";
import { schedule } from "@/lib/mock-data";

export default function SchedulePage() {
  return (
    <LayoutShell title="Horarios" subtitle="Vista alumno">
      <Card>
        <CardHeader>
          <CardTitle>Horario del preuniversitario</CardTitle>
          <CardDescription>Bloques semanales y talleres de Sylvia PAES.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {schedule.map((item) => (
            <div key={item.id} className="grid gap-3 rounded-2xl border p-4 text-sm md:grid-cols-4">
              <div className="font-medium">{item.day}</div>
              <div>{item.time}</div>
              <div>{item.title}</div>
              <div className="text-slate-500">{item.mode}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </LayoutShell>
  );
}
