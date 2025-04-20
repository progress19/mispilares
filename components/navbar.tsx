"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Inicio",
      active: pathname === "/",
    },
    {
      href: "/metafisica",
      label: "Metafísica",
      active: pathname === "/metafisica",
    },
    {
      href: "/budismo",
      label: "Budismo",
      active: pathname === "/budismo",
    },
    {
      href: "/estoicismo",
      label: "Estoicismo",
      active: pathname === "/estoicismo",
    },
    {
      href: "/blog",
      label: "Blog",
      active: pathname === "/blog",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Mis Pilares</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  route.active ? "text-foreground" : "text-foreground/60",
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <nav className="flex items-center justify-between md:hidden">
              <Link href="/" className="mr-2">
                <span className="font-bold">Mis Pilares</span>
              </Link>
              <div className="flex items-center gap-2">
                {routes.slice(1).map((route) => (
                  <Button key={route.href} asChild variant={route.active ? "default" : "ghost"} size="sm">
                    <Link href={route.href}>{route.label}</Link>
                  </Button>
                ))}
              </div>
            </nav>
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

