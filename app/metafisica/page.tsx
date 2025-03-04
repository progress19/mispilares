import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function MetafisicaPage() {
  const leyes = [
    {
      nombre: "Ley del Mentalismo",
      descripcion: "El Todo es mente; el Universo es mental. Todo lo que existe comienza como un pensamiento o idea.",
      link: "/metafisica/mentalismo"
    },
    {
      nombre: "Ley de Correspondencia",
      descripcion:
        "Como es arriba, es abajo; como es abajo, es arriba. Lo que sucede en un nivel de realidad, también sucede en todos los demás.",
    },
    {
      nombre: "Ley de Vibración",
      descripcion:
        "Nada está inmóvil; todo se mueve; todo vibra. Cada cosa en el universo está en constante movimiento y vibra a una frecuencia específica.",
    },
    {
      nombre: "Ley de Polaridad",
      descripcion:
        "Todo es dual; todo tiene polos; todo tiene su par de opuestos. Los opuestos son idénticos en naturaleza, pero diferentes en grado.",
    },
    {
      nombre: "Ley de Ritmo",
      descripcion:
        "Todo fluye, dentro y fuera; todo tiene sus mareas; todas las cosas suben y bajan. El movimiento pendular se manifiesta en todo.",
    },
    {
      nombre: "Ley de Causa y Efecto",
      descripcion:
        "Toda causa tiene su efecto; todo efecto tiene su causa. No hay casualidad, sino causalidad que sigue leyes.",
    },
    {
      nombre: "Ley de Género",
      descripcion:
        "El género está en todo; todo tiene sus principios masculino y femenino. El género se manifiesta en todos los planos.",
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

      <h1 className="text-4xl font-bold mb-6">La Metafísica</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        La metafísica estudia la naturaleza fundamental de la realidad, incluyendo la relación entre mente y materia,
        sustancia y atributo, y potencialidad y actualidad. Las 7 Leyes Universales o Herméticas son principios
        fundamentales que explican cómo funciona el universo.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Las 7 Leyes Universales</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {leyes.map((ley, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>
                {ley.nombre}
                {ley.link && (
                  <Link href={ley.link} className="text-primary ml-2">
                    Leer más
                  </Link>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{ley.descripcion}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      <div className="prose max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">Aplicación en la vida diaria</h3>
        <p className="mb-4">
          Estas leyes no son solo conceptos abstractos, sino principios que podemos aplicar en nuestra vida cotidiana
          para lograr mayor armonía y comprensión. Al entender cómo funciona el universo, podemos alinearnos mejor con
          sus principios y fluir con mayor facilidad.
        </p>
        <p>
          La comprensión de estas leyes nos invita a tomar responsabilidad por nuestros pensamientos, emociones y
          acciones, reconociendo que somos co-creadores de nuestra realidad y que tenemos el poder de transformarla.
        </p>
      </div>
    </div>
  )
}

