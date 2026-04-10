import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Users, Target, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Nosotros - Inmobiliaria Premium",
  description: "Conoce nuestra historia y equipo. Más de 20 años de experiencia en el mercado inmobiliario.",
}

export default function NosotrosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">
              Sobre Nosotros
            </h1>
            <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto leading-relaxed">
              Más de dos décadas construyendo confianza y haciendo realidad los sueños de miles de familias.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                    alt="Nuestro equipo"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl hidden md:block">
                  <p className="font-serif text-4xl font-bold">20+</p>
                  <p className="text-sm">Años de experiencia</p>
                </div>
              </div>

              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-widest">
                  Nuestra Historia
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                  Construyendo sueños desde 2004
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Inmobiliaria Premium nació con una visión clara: transformar la experiencia de comprar, 
                    vender o alquilar propiedades en un proceso simple, transparente y personalizado.
                  </p>
                  <p>
                    A lo largo de más de 20 años, hemos ayudado a miles de familias a encontrar su hogar 
                    ideal, construyendo relaciones basadas en la confianza y el profesionalismo.
                  </p>
                  <p>
                    Nuestro equipo de asesores expertos está comprometido con brindar un servicio de 
                    excelencia, acompañando a cada cliente en cada paso del proceso.
                  </p>
                </div>
                <Button size="lg" className="mt-8" asChild>
                  <Link href="/contacto">
                    Conoce a nuestro equipo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-medium text-sm uppercase tracking-widest">
                Nuestros Valores
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3">
                Lo que nos define
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card p-8 rounded-xl border border-border/50 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">Excelencia</h3>
                <p className="text-muted-foreground mt-4 leading-relaxed text-sm">
                  Buscamos la perfección en cada detalle, ofreciendo un servicio de primera clase.
                </p>
              </div>

              <div className="bg-card p-8 rounded-xl border border-border/50 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">Confianza</h3>
                <p className="text-muted-foreground mt-4 leading-relaxed text-sm">
                  La transparencia y honestidad son la base de todas nuestras relaciones.
                </p>
              </div>

              <div className="bg-card p-8 rounded-xl border border-border/50 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">Compromiso</h3>
                <p className="text-muted-foreground mt-4 leading-relaxed text-sm">
                  Nos dedicamos completamente a hacer realidad los objetivos de nuestros clientes.
                </p>
              </div>

              <div className="bg-card p-8 rounded-xl border border-border/50 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">Pasión</h3>
                <p className="text-muted-foreground mt-4 leading-relaxed text-sm">
                  Amamos lo que hacemos y eso se refleja en cada interacción con nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-medium text-sm uppercase tracking-widest">
                Nuestro Equipo
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3">
                Profesionales a tu servicio
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Un equipo de expertos dedicados a brindarte la mejor experiencia inmobiliaria.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="aspect-square rounded-xl overflow-hidden mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
                    alt="Director General"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">Carlos Rodríguez</h3>
                <p className="text-primary text-sm">Director General</p>
              </div>

              <div className="text-center">
                <div className="aspect-square rounded-xl overflow-hidden mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                    alt="Directora Comercial"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">María González</h3>
                <p className="text-primary text-sm">Directora Comercial</p>
              </div>

              <div className="text-center">
                <div className="aspect-square rounded-xl overflow-hidden mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                    alt="Jefe de Ventas"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">Andrés Martínez</h3>
                <p className="text-primary text-sm">Jefe de Ventas</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              ¿Listo para encontrar tu propiedad ideal?
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
              Nuestro equipo está listo para ayudarte. Contáctanos hoy y comienza tu búsqueda.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contacto">
                  Contactar ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                <Link href="/ventas">
                  Ver propiedades
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
