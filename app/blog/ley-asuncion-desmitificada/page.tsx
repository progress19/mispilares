import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ChevronLeft, Clock, Calendar } from "lucide-react"

export default function BlogPost() {
  return (
    <div className="container mx-auto py-12 px-4">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/blog" className="flex items-center">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Volver al blog
        </Link>
      </Button>

      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>22 Abril, 2025</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>10 minutos de lectura</span>
            </div>
          </div>
          <CardTitle className="text-3xl mb-6">La Ley de la Asunción Desmitificada: Por Qué Sentir Es Más Poderoso que Querer</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <div className="text-lg md:text-lg lg:text-lg leading-relaxed md:leading-loose space-y-6">
            <p>
              ¿Cansado de repetir afirmaciones positivas sin ver resultados reales? ¿Sientes que, a pesar de tus esfuerzos mentales, tu vida no cambia como deseas? Prepárate para descubrir una verdad transformadora que podría ser la pieza que te falta: el verdadero poder para crear tu realidad reside en tus sentimientos.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Tu Mundo Exterior es un Reflejo de tu Interior</h2>
            
            <p>
              Olvídate de la idea de que eres víctima de las circunstancias. La vida que experimentas es, en esencia, un espejo que refleja tu estado interior dominante, ¡especialmente lo que sientes con convicción! No son tus pensamientos fugaces o tus deseos esperanzados los que moldean tu existencia, sino la vibración profunda y sostenida de tus emociones.
            </p>

            <p>
              El universo no responde tanto a las palabras que dices como a la energía que emanas. Puedes pensar en abundancia todo el día, pero si en el fondo sientes carencia, miedo o duda, eso es lo que la vida te devolverá. Hay una diferencia crucial entre desear algo (que a menudo nace de la sensación de falta) y sentir que ya es tuyo (que nace de la certeza y la posesión interna).
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">El Sentimiento: La Clave Maestra de la Creación</h2>

            <p>
              Imagina sentir la alegría de la salud perfecta, la paz de la abundancia o el calor del amor, incluso si tu realidad actual parece contradecirlo. Ese sentimiento interno, cultivado y sostenido, es la clave que activa el cambio. La transformación no empieza cuando algo externo cambia; empieza cuando una nueva emoción se convierte en tu estado predominante. ¡Todo lo que has vivido hasta ahora es el resultado directo de los sentimientos que has albergado con mayor intensidad!
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">¡La Buena Noticia es que Tú Tienes el Control!</h2>

            <p>
              Y lo mejor de todo: ¡puedes comprobarlo por ti mismo! Elige un estado deseado (alegría, seguridad, éxito) y sumérgete deliberadamente en la sensación de ya tenerlo. Siente cómo sería vivir desde esa nueva realidad. Observa, con paciencia y fe, cómo tu entorno empieza a reorganizarse sutilmente para coincidir con tu nueva vibración interna.
            </p>

            <p>
              Recuerda: no sientes alegría porque las cosas van bien; las cosas empiezan a ir bien porque eliges sentir alegría primero.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">La Ley de la Asunción: Atrae lo que Ya Eres (Internamente)</h2>

            <p>
              Esto nos lleva a la poderosa "Ley de la Asunción": no atraes lo que quieres, atraes lo que asumes como una verdad dentro de ti. Si cultivas el sentimiento de ser la persona que deseas ser, de tener lo que deseas tener, el mundo exterior no tendrá más remedio que adaptarse y reflejar esa nueva identidad interna.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">¿Cómo Cultivar el Sentimiento Correcto?</h2>

            <p>
              Transformar emociones arraigadas requiere práctica y convicción. Aquí tienes algunas claves:
            </p>

            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Visualización en Primera Persona:</strong> No te veas a ti mismo teniendo éxito desde fuera. ¡Métete dentro de la escena! Siente las emociones como si ya estuviera sucediendo ahora mismo.
              </li>
              <li>
                <strong>Repetición del Estado Emocional:</strong> Durante el día, pregúntate: "¿Cómo me sentiría si mi deseo ya fuera real?". Tómate un momento para sentir esa respuesta. Hazlo a menudo.
              </li>
              <li>
                <strong>Calma la Mente:</strong> La relajación y la respiración consciente ayudan a que el nuevo sentimiento se implante sin la resistencia de la mente analítica. Inhala la emoción deseada.
              </li>
              <li>
                <strong>Ignora la Evidencia Contradictoria:</strong> Tu realidad actual es solo el eco de tus sentimientos pasados. No le des poder. Mantén tu enfoque y tu sentimiento en la nueva realidad que estás creando internamente. ¡La fe es creer y sentir antes de ver!
              </li>
              <li>
                <strong>Cuidado con la Duda:</strong> La duda es como desenterrar una semilla para ver si está creciendo. ¡La mata! Protege tu sentimiento elegido con firmeza.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">El Viaje de la Transformación</h2>

            <p>
              A medida que persistes, notarás señales: sincronicidades, pequeños cambios, una sensación creciente de paz o certeza. También podrías experimentar resistencia interna o el "colapso" de viejas creencias. ¡No te asustes! Es señal de que el cambio está ocurriendo. Sostén tu nuevo sentimiento. Eventualmente, alcanzarás un punto de calma y certeza interna que ya no necesitará pruebas externas. Es entonces cuando la manifestación se acelera.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Tú Eres el Creador</h2>

            <p>
              La verdad fundamental es que siempre has sido el creador de tu realidad a través de la vibración de tus sentimientos. Ahora puedes hacerlo conscientemente. Elige el sentimiento correcto, sostenlo con fe, y observa cómo tu mundo se transforma.
            </p>

            <p>
              ¡El poder no está fuera, está en tu capacidad de sentir! Atrévete a sentir la realidad que deseas y conviértete en el creador consciente y alegre que siempre has sido.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}