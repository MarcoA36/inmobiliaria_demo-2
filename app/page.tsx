import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PropertyCard } from "@/components/property-card"
import { SearchBox } from "@/components/search-box"
import { getFeaturedProperties } from "@/lib/properties"

export default function HomePage() {
  const featuredProperties = getFeaturedProperties()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop"
              alt="Propiedad de lujo"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight text-balance">
                Encuentra la propiedad de tus sueños
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed max-w-xl">
                Más de 20 años de experiencia en el mercado inmobiliario. 
                Te ayudamos a encontrar el hogar perfecto para ti y tu familia.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button size="lg" asChild className="font-medium">
                  <Link href="/ventas">
                    Ver Propiedades
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-background/10 border-background/30 text-background hover:bg-background/20 hover:text-background">
                  <Link href="/contacto">
                    Contactar Asesor
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Search Bar Section */}
        <section className="relative -mt-12 z-20">
          <div className="container mx-auto px-4">
            <SearchBox />
          </div>
        </section>

        {/* Featured Properties */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-widest">Propiedades Destacadas</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3">
                Las mejores opciones del mercado
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Selección exclusiva de propiedades premium en las ubicaciones más codiciadas de la ciudad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline" asChild>
                <Link href="/ventas">
                  Ver todas las propiedades
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="font-serif text-4xl md:text-5xl font-bold">20+</p>
                <p className="mt-2 text-primary-foreground/80">Años de experiencia</p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl font-bold">500+</p>
                <p className="mt-2 text-primary-foreground/80">Propiedades vendidas</p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl font-bold">1200+</p>
                <p className="mt-2 text-primary-foreground/80">Clientes satisfechos</p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl font-bold">50+</p>
                <p className="mt-2 text-primary-foreground/80">Propiedades activas</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-28 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-medium text-sm uppercase tracking-widest">Por qué elegirnos</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3">
                Servicio de excelencia garantizado
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-xl border border-border/50 text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">Confianza y Seguridad</h3>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Todas nuestras operaciones están respaldadas por documentación legal completa y transparente.
                </p>
              </div>

              <div className="bg-card p-8 rounded-xl border border-border/50 text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">Experiencia Comprobada</h3>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Más de dos décadas en el mercado nos avalan como líderes en el sector inmobiliario.
                </p>
              </div>

              <div className="bg-card p-8 rounded-xl border border-border/50 text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">Atención Personalizada</h3>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Un equipo de asesores dedicados a encontrar la propiedad que mejor se adapte a tus necesidades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&h=600&fit=crop"
                alt="Interior de propiedad"
                width={1400}
                height={600}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/50 flex items-center">
                <div className="container mx-auto px-4 md:px-12">
                  <div className="max-w-lg">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-background">
                      ¿Listo para encontrar tu próximo hogar?
                    </h2>
                    <p className="text-background/80 mt-4 leading-relaxed">
                      Nuestros asesores están listos para ayudarte a encontrar la propiedad perfecta para ti.
                    </p>
                    <Button size="lg" asChild className="mt-8">
                      <Link href="/contacto">
                        Agendar una cita
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
