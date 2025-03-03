import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { BookOpen, NotebookIcon as Lotus, Brain } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto py-12 px-4">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Mis Pilares Filosóficos da</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Un espacio dedicado a explorar los fundamentos filosóficos que guían mi vida: La Metafísica, El Budismo y El
          Estoicismo.
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-3">
        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <Brain className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-center">La Metafísica</CardTitle>
            <CardDescription className="text-center">Las 7 Leyes Universales</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p>
              Explora los principios fundamentales que rigen el universo según la tradición hermética. Estas leyes nos
              ayudan a comprender la naturaleza de la realidad y nuestro lugar en ella.
            </p>
          </CardContent>
          <CardFooter className="pt-0">
            <Button asChild className="w-full">
              <Link href="/metafisica">Descubrir más</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <Lotus className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-center">El Budismo</CardTitle>
            <CardDescription className="text-center">Las 4 Nobles Verdades y el Óctuple Sendero</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p>
              Conoce las enseñanzas fundamentales de Buda sobre el sufrimiento, sus causas y el camino hacia la
              liberación a través de la práctica consciente.
            </p>
          </CardContent>
          <CardFooter className="pt-0">
            <Button asChild className="w-full">
              <Link href="/budismo">Descubrir más</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <BookOpen className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-center">El Estoicismo</CardTitle>
            <CardDescription className="text-center">La filosofía de la virtud y la serenidad</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p>
              Aprende sobre esta antigua filosofía griega que nos enseña a encontrar la paz interior a través del
              control de nuestras reacciones y el cultivo de la virtud.
            </p>
          </CardContent>
          <CardFooter className="pt-0">
            <Button asChild className="w-full">
              <Link href="/estoicismo">Descubrir más</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

