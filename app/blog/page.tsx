import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import { ChevronLeft, Clock, ChevronRight } from "lucide-react"
import { CategoryBadge } from "@/components/category-badge"
import { categories } from "@/lib/categories"
import { useSearchParams } from "next/navigation"

interface BlogPost {
  id: string
  title: string
  description: string
  date: string
  readingTime: string
  slug: string
  categories: string[]
}

const blogPosts: BlogPost[] = [
  {
    id: "3",
    title: "La Epidemia Silenciosa: Vivimos entre Seres sin Conciencia Interior",
    description: "Una exploración profunda sobre la naturaleza de la consciencia y cómo muchos viven en piloto automático, siguiendo patrones sin verdadera reflexión interior.",
    date: "20 Abril, 2025",
    readingTime: "10 minutos",
    slug: "epidemia-silenciosa",
    categories: ["metafisica", "filosofia", "espiritualidad"]
  },
  {
    id: "1",
    title: "No Estás Solo: El Poder Oculto de los que Sienten Diferente",
    description: "Una exploración profunda sobre la sensación de ser diferente y el despertar espiritual que esto puede significar.",
    date: "20 Abril, 2025",
    readingTime: "8 minutos",
    slug: "no-estas-solo",
    categories: ["espiritualidad", "autoconocimiento"]
  }
]

export default function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const categoryFilter = searchParams.category as string | undefined
  
  const filteredPosts = categoryFilter
    ? blogPosts.filter(post => post.categories.includes(categoryFilter))
    : blogPosts

  return (
    <div className="container mx-auto py-12 px-4">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/" className="flex items-center">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Volver al inicio
        </Link>
      </Button>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={!categoryFilter ? "default" : "outline"}
            size="sm"
            asChild
          >
            <Link href="/blog">
              Todos
            </Link>
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={categoryFilter === category.id ? "default" : "outline"}
              size="sm"
              asChild
            >
              <Link href={`/blog?category=${category.id}`}>
                {category.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No hay posts en esta categoría todavía.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <Link href={`/blog/${post.slug}`}>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span>{post.date}</span>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.categories.map((categoryId) => (
                      <CategoryBadge
                        key={categoryId}
                        category={categories.find((c) => c.id === categoryId)!}
                        showLink={false}
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex items-center text-sm">
                  Leer más
                  <ChevronRight className="ml-1 h-4 w-4" />
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}