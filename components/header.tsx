"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, Mail, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/alquileres", label: "Alquileres" },
  { href: "/ventas", label: "Ventas" },
  { href: "/contacto", label: "Contacto" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:inmobiliarias@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">inmobiliarias@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:2284132343" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Alquileres: 2284-132343</span>
            </a>
            <span className="hidden md:inline text-primary-foreground/60">|</span>
            <a href="tel:2284123242" className="hidden md:flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span>Ventas: 2284-123242</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg">
              <Home className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <span className="font-serif text-xl font-bold text-foreground tracking-tight">Inmobiliaria</span>
              <span className="block text-xs text-muted-foreground uppercase tracking-widest">Premium</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild className="font-medium">
              <Link href="/contacto">Contáctanos</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-2">
                <Link href="/contacto">Contáctanos</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
