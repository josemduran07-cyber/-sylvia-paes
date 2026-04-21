import { LayoutShell } from "@/components/layout-shell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui";
import { announcements } from "@/lib/mock-data";

export default function AnnouncementsPage() {
  return (
    <LayoutShell title="Avisos" subtitle="Vista alumno">
      <Card>
        <CardHeader>
          <CardTitle>Avisos</CardTitle>
          <CardDescription>Comunicaciones publicadas por Sylvia para todos los alumnos.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {announcements.map((item) => (
            <div key={item.id} className="rounded-2xl border p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium">{item.title}</p>
                <p className="text-xs text-slate-500">{item.date}</p>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.content}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </LayoutShell>
  );
}
