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
              <span>8 minutos de lectura</span>
            </div>
          </div>
          <CardTitle className="text-3xl mb-6">No Estás Solo: El Poder Oculto de los que Sienten Diferente</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <div className="text-lg md:text-lg lg:text-lg leading-relaxed md:leading-loose space-y-6">
            <p>
              ¿Alguna vez has sentido que no encajas? ¿Una sensación persistente de ser diferente, de percibir la realidad con una intensidad que otros no comparten? Quizás desde la infancia te acompañó la impresión de ver más allá de lo evidente, de sentir energías invisibles, de que había algo fundamental que el mundo parecía haber olvidado.
            </p>
            
            <p>
              Esta extrañeza, lejos de ser un error o una simple imaginación, podría ser la señal de un <strong>despertar silencioso</strong>, una mutación profunda que se despliega en tus emociones, pensamientos y en la forma en que experimentas la vida.
            </p>

            <p>
              En diversas tradiciones se ha hablado de un número simbólico, 144,000 seres, no como una cifra literal, sino como un arquetipo que representa a aquellos que, de manera intuitiva, albergan una misión trascendente: <strong>despertar a su verdadero ser</strong>.
            </p>
            
            <p>
              No son elegidos por mérito aparente, sino por una resonancia interior, una certeza callada de que existe algo más allá del mundo material que constantemente los llama.
            </p>

            <p>
              Este llamado no es una imposición externa, sino una <strong>presión interna que brota del alma</strong>. Se manifiesta en preguntas persistentes: ¿Por qué me siento tan diferente? ¿Por qué no logro adaptarme sin traicionarme? ¿Por qué todo me afecta tan profundamente?
            </p>
            
            <p>
              Estas interrogantes son el inicio de un camino de <strong>individuación</strong>, la integración de todas las partes fragmentadas de tu ser en una totalidad.
            </p>

            <p>
              Este camino raramente es sencillo. A menudo está lleno de desafíos, no como castigo, sino porque cada dificultad se convierte en una puerta, cada caída en una preparación para algo mayor. Si te identificas con esto, es posible que ya hayas comenzado a recordar.
            </p>
            
            <p>
              Cada experiencia, cada pérdida, cada momento de incomprensión formó parte de un plan profundo, gestado por tu inconsciente mucho antes de que tu mente pudiera entenderlo. Y ahora, ese inconsciente comienza a comunicarse a través de símbolos, sueños, intuiciones y sincronías.
            </p>

            <p>
              Estamos inmersos en una <strong>guerra del alma, una batalla espiritual</strong>, donde las fuerzas que han mantenido a la humanidad en la inconsciencia están perdiendo poder. Cuando un individuo recuerda su verdadera naturaleza, esa chispa divina en su interior, se vuelve inherentemente <strong>incontrolable</strong> para estas fuerzas.
            </p>
            
            <p>
              Por eso, al intentar elevar tu energía, es posible que hayas experimentado obstáculos, distracciones, dudas, como si algo invisible tratara de arrastrarte de vuelta a la oscuridad. Esta no es una ilusión, sino la <strong>reacción del sistema ante tu liberación</strong>.
            </p>

            <p>
              Al salir del control de las viejas estructuras, te conviertes en un objetivo. Todo puede parecer más difícil, como si la vida misma te pusiera a prueba para fortalecerte. Quienes antes te comprendían podrían ahora mirarte con distancia o incluso temor.
            </p>
            
            <p>
              Podrías sentirte cada vez más ajeno al mundo, no porque estés perdiendo la conexión, sino porque estás <strong>recordando tu origen</strong>.
            </p>

            <p>
              Las fuerzas que desean mantener a la humanidad dormida no temen a las multitudes, sino al <strong>individuo consciente</strong>. Quien recuerda su poder interior disuelve el miedo que antes lo controlaba.
            </p>
            
            <p>
              Por ello, es crucial aprender a protegerte, no con desconfianza, sino con una <strong>conciencia lúcida</strong> que responde con verdad. Recuerda, todo en el universo es energía y vibración. Al elevar tu frecuencia, al alinearte con la verdad profunda de tu ser, te vuelves inaccesible a las fuerzas de la oscuridad.
            </p>

            <p>
              Este despertar no es el final del camino, sino apenas el comienzo. Has sido llamado, no para huir del mundo, sino para <strong>ayudar a sanarlo</strong>, para <strong>transformar y tender puentes entre lo que el mundo ha olvidado y lo que el alma nunca dejó de saber</strong>.
            </p>
            
            <p>
              Tu tarea ahora es integrar, comprender, proteger tu luz y caminar con conciencia. Cada vez que eliges escuchar tu intuición, fortalecer tu espíritu y vivir en verdad, estás cumpliendo tu parte. Confía en tu camino, pues la transformación comienza en tu interior.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}