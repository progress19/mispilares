"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { Menu, X } from "lucide-react"

const routes = [
  {
    href: "/",
    label: "Inicio",
  },
  {
    href: "/metafisica",
    label: "Metafísica",
  },
  {
    href: "/budismo",
    label: "Budismo",
  },
  {
    href: "/estoicismo",
    label: "Estoicismo",
  },
  {
    href: "/blog",
    label: "Blog",
  },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold">Mis Pilares</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavigationMenuPrimitive.Root>
            <NavigationMenuPrimitive.List className="flex items-center space-x-4">
              {routes.map((route) => (
                <NavigationMenuPrimitive.Item key={route.href}>
                  <Link
                    href={route.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      pathname === route.href
                        ? "bg-muted text-foreground"
                        : "text-foreground/60 hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    {route.label}
                  </Link>
                </NavigationMenuPrimitive.Item>
              ))}
            </NavigationMenuPrimitive.List>
          </NavigationMenuPrimitive.Root>
          <ModeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <div className="mr-2">
            <ModeToggle />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <nav className="px-4 py-2 pb-4 space-y-1 bg-background border-b">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                  pathname === route.href
                    ? "bg-muted text-foreground"
                    : "text-foreground/60 hover:text-foreground hover:bg-muted/50"
                )}
                onClick={() => setIsOpen(false)}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

