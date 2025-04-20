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
              <span>20 Abril, 2025</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>10 minutos de lectura</span>
            </div>
          </div>
          <CardTitle className="text-3xl mb-6">La Epidemia Silenciosa: Vivimos entre Seres sin Conciencia Interior</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <div className="text-lg md:text-lg lg:text-lg leading-relaxed md:leading-loose space-y-6">
            <p>
              ¡Despierta, Alma Sedienta! ¿Alguna vez has sentido una punzada de extrañeza al observar el mundo? ¿Una sensación inquietante de que no todos vibran en la misma frecuencia, que algunos parecen moverse por inercia, repitiendo un guion invisible?
            </p>

            <p>
              <strong>Elena Petrovna Blavatsky, una voz audaz que resonó hace más de un siglo, ya lo advirtió: existen "cascarones humanos", seres de apariencia similar a la nuestra, pero vacíos por dentro, desprovistos de esa chispa divina que enciende la conciencia</strong>.
            </p>

            <p>
              Imagina caminar entre multitudes donde algunos son como <strong>autómatas biológicos, sonriendo y hablando, pero sin sentir en la profundidad de la palabra</strong>. Sus vidas, según Blavatsky, carecen de esa <strong>"chispa divina que convierte la carne en consciencia"</strong>.
            </p>

            <p>
              ¿Te resulta familiar esa mirada vacía, esos gestos rígidos, esa forma de repetir ideas prestadas sin una sombra de cuestionamiento? La filosofía moderna, con el concepto de los <strong>"zombies filosóficos" acuñado por David Chalmers</strong>, roza esta misma inquietante verdad: seres que actúan como nosotros, pero sin experiencia interior alguna.
            </p>

            <p>
              Estos seres, de acuerdo con el transcripto, se mueven por <strong>"hábitos e impulsos condicionados, incapaces de reflexión profunda"</strong>. Repiten ideas como si leyeran un libreto preestablecido, <strong>"un guion que jamás cuestionaron"</strong>.
            </p>

            <p>
              Se percibe en ellos una <strong>"sensación incómoda de vacío en su mirada"</strong>, una <strong>"forma robótica de repetir ideas"</strong>. Funcionan en <strong>"piloto automático"</strong>, y la escalofriante verdad es que <strong>"muchos jamás han tenido un pensamiento verdaderamente propio"</strong>. Son el eco de la civilización, no su causa, <strong>"repitiendo patrones, ejecutando guiones que no escribieron"</strong>.
            </p>

            <p>
              Blavatsky nos previno que en <strong>"eras de decadencia espiritual, el mundo se llenaría de estas formas sin alma"</strong>. Y el transcripto sugiere que este "piloto automático" no es una excepción, sino <strong>"el estándar"</strong>, mientras que <strong>"la introspección, la conciencia de uno mismo, la verdadera voz interior son facultades que pertenecen solo a unos pocos"</strong>.
            </p>

            <p>
              La mayoría simplemente <strong>"repite patrones, ejecuta guiones que no escribieron"</strong>. ¿Cuántos de aquellos con quienes interactúas a diario están realmente viviendo con la misma intensidad interna que tú? ¿Cuántos simplemente <strong>"ejecutan y responden de forma automática"</strong>, absorbiendo creencias sin dudar, repitiendo <strong>"frases enlatadas sin una reflexión profunda"</strong>?
            </p>

            <p>
              Nuestro <strong>mundo moderno, estructurado como una gran máquina, parece tolerar e incluso promover esta condición</strong>. Se premia la obediencia, se castiga al pensador. La humanidad se ha convertido en una <strong>"jaula de cuerpos con mirada vacía repitiendo rutinas, defendiendo ideas que no entienden, funcionando como npcs en un videojuego cósmico"</strong>.
            </p>

            <p>
              ¡Pero tú, que sientes la punzada de esta verdad, no eres un mero "npc"!
            </p>

            <p>
              La <strong>neurociencia comienza a confirmar lo que los místicos sabían</strong>: no todos operan en el mismo plano de conciencia. Estudios muestran que hasta el <strong>"95% de las decisiones diarias no son conscientes, sino automáticas"</strong>.
            </p>

            <p>
              El descubrimiento de <strong>"dos mentes separadas"</strong> en pacientes con cerebro dividido cuestiona la unidad de la conciencia. Encuestas revelan que una <strong>"proporción significativa de la población carece por completo de diálogo interno"</strong>, funcionando como <strong>"máquinas biológicas"</strong>. ¡No todos los cerebros muestran la actividad de la introspección!
            </p>

            <p>
              Si sientes el peso de esta lucidez, si te reconoces en estas palabras, entonces <strong>"despertar no es el final, sino el comienzo de una guerra silenciosa"</strong>. Reconoce a los sin alma por su previsibilidad, su pensamiento rígido, su obediencia ciega.
            </p>

            <p>
              Pero recuerda, <strong>"los npc no saben que lo son y rechazarán esta idea"</strong>. La clave para ti, el despierto, es <strong>cuestionar tus propias creencias, practicar la introspección, romper tus patrones automáticos y desapegarte del sistema que busca mantenerte dormido</strong>. Pregúntate: ¿formo mis propias creencias o simplemente adopto lo que se me presenta?
            </p>

            <p>
              Este es el llamado a la auto-observación, a la toma de conciencia como el primer paso para <strong>"liberarte de la programación y vivir de forma intencional"</strong>. No te conformes con ser un eco. ¡Despierta la chispa divina que reside en ti! <strong>Rompe las cadenas del automatismo, cuestiona la realidad impuesta y atrévete a pensar por ti mismo.</strong>
            </p>

            <p>
              Si esta verdad resuena en lo profundo de tu ser, si sientes que hay mucho más por descubrir detrás del velo de la realidad, entonces has dado el primer paso en un viaje épico hacia la comprensión. <strong>Este es solo el preludio. La aventura de despertar tu conciencia plena apenas comienza.</strong>
            </p>

            <p>
              ¡Sigue explorando este blog, donde desentrañaremos juntos los misterios de la existencia y encenderemos la llama de la verdad en cada alma que anhela despertar! ¡El camino hacia la autenticidad te espera!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}