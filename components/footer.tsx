import Link from "next/link"
import { Home, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <Home className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-background tracking-tight">Inmobiliaria</span>
                <span className="block text-xs text-background/60 uppercase tracking-widest">Premium</span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Más de 20 años de experiencia en el mercado inmobiliario, 
              ofreciendo las mejores propiedades para alquiler y venta.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/nosotros" className="text-background/70 hover:text-background transition-colors text-sm">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/alquileres" className="text-background/70 hover:text-background transition-colors text-sm">
                  Alquileres
                </Link>
              </li>
              <li>
                <Link href="/ventas" className="text-background/70 hover:text-background transition-colors text-sm">
                  Ventas
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-background/70 hover:text-background transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">Av. Principal 1234, Ciudad</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <div className="text-background/70 text-sm">
                  <p>Alquileres: 2284-132343</p>
                  <p>Ventas: 2284-123242</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-background/70 text-sm">inmobiliarias@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Síguenos</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-background/10 hover:bg-primary p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-background/10 hover:bg-primary p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-background/10 hover:bg-primary p-3 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-background/50 text-xs">Horario de atención:</p>
              <p className="text-background/70 text-sm mt-1">Lun - Vie: 9:00 - 18:00</p>
              <p className="text-background/70 text-sm">Sáb: 9:00 - 13:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            &copy; {new Date().getFullYear()} Inmobiliaria Premium. Todos los derechos reservados.
          </p>
          <p className="text-background/50 text-sm">
            Sitio de ejemplo: zonaweb.site
          </p>
        </div>
      </div>
    </footer>
  )
}
