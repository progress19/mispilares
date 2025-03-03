import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function EstoicismoPage() {
  const principios = [
    {
      nombre: "Virtud como Bien Supremo",
      descripcion:
        "Para los estoicos, la virtud (arete) es el único bien verdadero. Vivir de acuerdo con la virtud significa vivir en armonía con la naturaleza y la razón.",
    },
    {
      nombre: "Dicotomía del Control",
      descripcion:
        "Algunas cosas están bajo nuestro control (opiniones, impulsos, deseos) y otras no (cuerpo, propiedad, reputación). Debemos enfocarnos en lo que podemos controlar.",
    },
    {
      nombre: "Disciplina del Juicio",
      descripcion:
        "No son los eventos externos los que nos perturban, sino nuestros juicios sobre ellos. Podemos elegir cómo interpretar y responder a cualquier situación.",
    },
    {
      nombre: "Amor Fati (Amor al Destino)",
      descripcion:
        "Aceptar y abrazar todo lo que sucede, incluso las dificultades, como parte necesaria de nuestra existencia y desarrollo.",
    },
    {
      nombre: "Memento Mori (Recuerda que Morirás)",
      descripcion:
        "La conciencia de nuestra mortalidad nos ayuda a valorar el tiempo presente y a vivir con propósito y significado.",
    },
  ]

  const filosofos = [
    {
      nombre: "Zenón de Citio",
      descripcion: "Fundador del estoicismo en Atenas alrededor del 300 a.C.",
    },
    {
      nombre: "Epicteto",
      descripcion: "Ex-esclavo y filósofo que enfatizó la libertad interior y la disciplina personal.",
    },
    {
      nombre: "Séneca",
      descripcion: "Estadista romano, dramaturgo y consejero de Nerón, conocido por sus cartas y ensayos morales.",
    },
    {
      nombre: "Marco Aurelio",
      descripcion: "Emperador romano cuyas 'Meditaciones' ofrecen reflexiones personales sobre la filosofía estoica.",
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

      <h1 className="text-4xl font-bold mb-6">El Estoicismo</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        El Estoicismo es una escuela filosófica fundada en Atenas por Zenón de Citio en el siglo III a.C. Enseña que la
        virtud, la razón y el conocimiento son los únicos bienes verdaderos, y que la serenidad mental se logra
        aceptando el momento presente y no permitiendo que nos controlen las emociones negativas.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Principios Fundamentales</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {principios.map((principio, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{principio.nombre}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{principio.descripcion}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      <h2 className="text-2xl font-semibold mb-6">Filósofos Estoicos Destacados</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {filosofos.map((filosofo, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{filosofo.nombre}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{filosofo.descripcion}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      <div className="prose max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">El Estoicismo en la vida moderna</h3>
        <p className="mb-4">
          A pesar de sus orígenes antiguos, el Estoicismo ha experimentado un renacimiento en la era moderna. Sus
          enseñanzas sobre la resiliencia, la aceptación y el enfoque en lo que podemos controlar son particularmente
          relevantes en nuestro mundo acelerado y lleno de incertidumbre.
        </p>
        <p className="mb-4">
          Prácticas como el diario reflexivo, la meditación sobre la adversidad (praemeditatio malorum) y la
          contemplación de nuestra mortalidad pueden ayudarnos a cultivar una mentalidad más estoica y a enfrentar los
          desafíos de la vida con mayor ecuanimidad.
        </p>
        <p>
          Como dijo Epicteto: "No son las cosas las que perturban a los hombres, sino sus juicios sobre las cosas." Esta
          simple pero profunda idea nos recuerda nuestro poder para elegir nuestras respuestas ante cualquier
          circunstancia.
        </p>
      </div>
    </div>
  )
}

