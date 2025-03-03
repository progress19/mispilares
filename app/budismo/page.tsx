import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function BudismoPage() {
  const noblesVerdades = [
    {
      nombre: "Dukkha (Sufrimiento)",
      descripcion:
        "La vida implica sufrimiento e insatisfacción. Nacimiento, enfermedad, vejez y muerte son sufrimiento, así como la separación de lo que amamos y el contacto con lo que no amamos.",
    },
    {
      nombre: "Samudaya (Origen del sufrimiento)",
      descripcion:
        "El sufrimiento surge del deseo, el apego y la ignorancia. Es el anhelo que produce renovación del ser, acompañado por el placer y la lujuria.",
    },
    {
      nombre: "Nirodha (Cese del sufrimiento)",
      descripcion:
        "El sufrimiento puede ser superado y la felicidad alcanzada cuando se elimina el deseo y el apego, logrando el Nirvana.",
    },
    {
      nombre: "Magga (El camino)",
      descripcion:
        "El camino que lleva al cese del sufrimiento es el Noble Óctuple Sendero, un camino de práctica y desarrollo espiritual.",
    },
  ]

  const octupleSendero = [
    {
      nombre: "Recta Visión",
      descripcion: "Comprender las Cuatro Nobles Verdades y la naturaleza de la realidad.",
    },
    {
      nombre: "Recto Pensamiento",
      descripcion: "Pensamientos de renuncia, amor y no violencia, libres de deseo, mala voluntad e ignorancia.",
    },
    {
      nombre: "Recta Palabra",
      descripcion: "Abstenerse de mentir, hablar con dureza, calumniar y charla frívola.",
    },
    {
      nombre: "Recta Acción",
      descripcion: "Abstenerse de matar, robar y conducta sexual inapropiada.",
    },
    {
      nombre: "Recto Modo de Vida",
      descripcion: "Ganarse la vida de manera ética, sin causar sufrimiento a otros seres.",
    },
    {
      nombre: "Recto Esfuerzo",
      descripcion: "Prevenir y abandonar estados mentales negativos, y desarrollar y mantener estados positivos.",
    },
    {
      nombre: "Recta Atención",
      descripcion: "Conciencia plena del cuerpo, sensaciones, mente y fenómenos mentales.",
    },
    {
      nombre: "Recta Concentración",
      descripcion: "Desarrollo de la concentración meditativa que conduce a estados de absorción (jhanas).",
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/" className="flex items-center">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Volver al inicio
        </Link>
      </Button>

      <h1 className="text-4xl font-bold mb-6">El Budismo</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        El Budismo es una filosofía y práctica espiritual que busca la comprensión profunda de la naturaleza de la mente
        y la realidad. Fundado por Siddhartha Gautama (el Buda) hace aproximadamente 2.500 años, ofrece un camino hacia
        la liberación del sufrimiento.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Las Cuatro Nobles Verdades</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {noblesVerdades.map((verdad, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{verdad.nombre}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{verdad.descripcion}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      <h2 className="text-2xl font-semibold mb-6">El Noble Óctuple Sendero</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {octupleSendero.map((elemento, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{elemento.nombre}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{elemento.descripcion}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      <div className="prose max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">La práctica en la vida cotidiana</h3>
        <p className="mb-4">
          El Budismo no es solo una filosofía teórica, sino un camino práctico que se puede integrar en la vida diaria.
          La meditación, la atención plena, la compasión y la sabiduría son herramientas que nos ayudan a transformar
          nuestra mente y nuestra experiencia del mundo.
        </p>
        <p>
          A través de la práctica constante, podemos cultivar una mayor paz interior, claridad mental y conexión con
          todos los seres, avanzando gradualmente hacia la liberación del sufrimiento y la realización de nuestro
          potencial más elevado.
        </p>
      </div>
    </div>
  )
}

