import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function MentalismoPage() {
    return (
        <div className="container mx-auto py-12 px-4">
            <Button variant="ghost" asChild className="mb-6">
                <Link href="/metafisica" className="flex items-center">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Volver a Metafísica
                </Link>
            </Button>

            <h1 className="text-4xl font-bold mb-6">Ley del Mentalismo: Todo es Mente</h1>
            <p className="text-xl text-muted-foreground mb-6">
                Este principio establece que "El Todo es Mente", lo que significa que la realidad que experimentamos es, en esencia, mental.
            </p>

            <p className="text-xl mb-6 max-w-3xl">
                ¿Qué significa que todo es mente?
            </p>

            <p className="text-xl text-muted-foreground mb-6">
            Este principio sostiene que el universo y todo lo que existe dentro de él es producto de una conciencia superior. Así como los pensamientos de una persona pueden dar forma a su realidad personal, la realidad del universo entero es el resultado de una mente universal.
            </p>
            
            <p className="text-xl text-muted-foreground mb-6">
            En otras palabras, todo lo que vemos, sentimos y experimentamos es una manifestación mental.
            </p>

            <p className="text-xl text-muted-foreground mb-6">
            Desde una perspectiva práctica, la Ley del Mentalismo nos dice que nuestros pensamientos son poderosos. Lo que pensamos de manera constante influye en nuestra percepción del mundo y, en consecuencia, en nuestra vida. 
            </p>

            <p className="text-xl text-muted-foreground mb-6">
            Si alguien mantiene pensamientos de éxito y abundancia, es más probable que atraiga situaciones favorables. Por el contrario, si se enfoca en el miedo y la escasez, eso mismo se reflejará en su realidad.
            </p>

            <p className="text-xl mb-6 max-w-3xl">
                El Mentalismo y la Ciencia
            </p>

            <p className="text-xl text-muted-foreground mb-6">
            Aunque esta idea proviene de la filosofía esotérica, hoy en día la ciencia también respalda en parte esta visión. La física cuántica ha demostrado que la percepción y la conciencia del observador pueden influir en el comportamiento de las partículas subatómicas.
            </p>

            <p className="text-xl text-muted-foreground mb-6">
            Esto sugiere que la mente tiene un impacto más profundo en la realidad de lo que solíamos pensar.
            </p>

            <p className="text-xl mb-6 max-w-3xl">
            Cómo aplicar la Ley del Mentalismo en la vida diaria
            </p>

            <p className="text-xl text-muted-foreground mb-3">
            Si todo lo que experimentamos es, en última instancia, una proyección de la mente, podemos usar este conocimiento para mejorar nuestra vida. Algunas formas prácticas de aplicar esta ley incluyen:
            </p>

            <p className="text-xl text-muted-foreground mb-3">
            <b>Cuidar los pensamientos</b>: Ser conscientes de lo que pensamos y dirigir nuestra mente hacia lo positivo. <br />
            </p>

            <p className="text-xl text-muted-foreground mb-3">
            <b>Visualización creativa</b>: Imaginar con claridad lo que queremos lograr para que la mente lo proyecte en la realidad.<br />
            </p>

            <p className="text-xl text-muted-foreground mb-3">
            <b>Afirmaciones</b>: Repetir frases positivas que refuercen creencias constructivas.<br />
            </p>

            <p className="text-xl text-muted-foreground mb-6">
            <b>Meditación y enfoque:</b>Entrenar la mente para dirigirla hacia estados más elevados de conciencia. <br />
            </p>

            <p className="text-xl mb-6 max-w-3xl">
            Conclusión
            </p>

            <p className="text-xl text-muted-foreground mb-6">
            La Ley del Mentalismo nos recuerda que la realidad es maleable y que tenemos un papel activo en la creación de nuestra experiencia. Al comprender que nuestra mente es la fuente de todo, podemos tomar el control de nuestros pensamientos y emociones para vivir una vida más plena y armoniosa.
            </p>

        </div>
    )
}
