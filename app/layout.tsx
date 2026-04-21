import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sylvia PAES",
  description: "Preuniversitario de PAES Comprensión Lectora",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
