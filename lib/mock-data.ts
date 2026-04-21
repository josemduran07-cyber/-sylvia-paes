export const brand = {
  name: "Sylvia PAES",
  subtitle: "Preuniversitario de PAES Comprensión Lectora",
  description:
    "Acceso privado para alumnos con material de estudio, horarios, avisos y estado de pago.",
};

export const materials = [
  { id: 1, title: "Guía comprensión lectora 1.pdf", type: "PDF", date: "18 abr 2026" },
  { id: 2, title: "Ensayo PAES abril.pdf", type: "PDF", date: "16 abr 2026" },
  { id: 3, title: "Solucionario ensayo 1.pdf", type: "PDF", date: "12 abr 2026" },
  { id: 4, title: "Banco de textos y preguntas.docx", type: "DOCX", date: "10 abr 2026" },
];

export const announcements = [
  {
    id: 1,
    title: "Ensayo de esta semana",
    content:
      "Esta semana trabajaremos inferencias, propósito comunicativo e idea principal. Revisen el ensayo subido antes de la clase.",
    date: "18 abr 2026",
  },
  {
    id: 2,
    title: "Material nuevo disponible",
    content:
      "Ya está publicado el solucionario del último ensayo junto con una guía de estrategias de lectura.",
    date: "15 abr 2026",
  },
];

export const schedule = [
  { id: 1, day: "Miércoles", time: "19:00 - 20:30", title: "Clase en vivo", mode: "Zoom" },
  { id: 2, day: "Sábado", time: "10:00 - 11:30", title: "Taller de ensayo", mode: "Zoom" },
];

export const payments = [
  { id: 1, month: "Marzo 2026", amount: "$45.000", dueDate: "05/03/2026", status: "Pagado" },
  { id: 2, month: "Abril 2026", amount: "$45.000", dueDate: "05/04/2026", status: "Pendiente" },
  { id: 3, month: "Mayo 2026", amount: "$45.000", dueDate: "05/05/2026", status: "Pendiente" },
];

export const students = [
  { id: 1, name: "Martina Rojas", email: "martina@email.com", payment: "Al día" },
  { id: 2, name: "Tomás Silva", email: "tomas@email.com", payment: "Pendiente abril" },
  { id: 3, name: "Antonia Pérez", email: "antonia@email.com", payment: "Al día" },
  { id: 4, name: "Vicente Soto", email: "vicente@email.com", payment: "Pendiente marzo" },
];

export const bankDetails = {
  bank: "Banco de Chile",
  accountType: "Cuenta Corriente",
  accountNumber: "12345678",
  rut: "12.345.678-9",
  holder: "Sylvia Pérez",
  email: "pagos@sylviapaes.cl",
};
