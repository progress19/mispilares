import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Mis Pilares. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/metafisica" className="text-sm text-muted-foreground hover:underline">
            Metafísica
          </Link>
          <Link href="/budismo" className="text-sm text-muted-foreground hover:underline">
            Budismo
          </Link>
          <Link href="/estoicismo" className="text-sm text-muted-foreground hover:underline">
            Estoicismo
          </Link>
        </div>
      </div>
    </footer>
  )
}

