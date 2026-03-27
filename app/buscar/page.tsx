import Link from "next/link"
import { Search, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PropertyCard } from "@/components/property-card"
import { searchProperties } from "@/lib/properties"
import { SearchBox } from "@/components/search-box"

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>
}

export async function generateMetadata({ searchParams }: SearchPageProps) {
  const { q } = await searchParams
  return {
    title: q ? `Resultados para "${q}" - Inmobiliaria Premium` : "Buscar Propiedades - Inmobiliaria Premium",
    description: "Busca propiedades en alquiler y venta",
  }
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q: query } = await searchParams
  const results = query ? searchProperties(query) : []

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
                Buscar Propiedades
              </h1>
              <p className="text-primary-foreground/80 mt-4 text-lg">
                Encuentra la propiedad perfecta para ti
              </p>
            </div>
          </div>
        </section>

        {/* Search Bar */}
        <section className="relative -mt-8 z-20 mb-8">
          <div className="container mx-auto px-4">
            <SearchBox />
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {query ? (
              <>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <Link 
                      href="/"
                      className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-2"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Volver al inicio
                    </Link>
                    <h2 className="font-serif text-2xl font-bold text-foreground">
                      Resultados para &ldquo;{query}&rdquo;
                    </h2>
                    <p className="text-muted-foreground mt-1">
                      {results.length} {results.length === 1 ? "propiedad encontrada" : "propiedades encontradas"}
                    </p>
                  </div>
                </div>

                {results.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {results.map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="bg-muted w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                      No encontramos resultados
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      No hay propiedades que coincidan con &ldquo;{query}&rdquo;. 
                      Intenta con otros términos o explora nuestras categorías.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                      <Button asChild variant="outline">
                        <Link href="/alquileres">Ver Alquileres</Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link href="/ventas">Ver Ventas</Link>
                      </Button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="bg-muted w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  Ingresa un término de búsqueda
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Busca por ubicación, tipo de propiedad, características o cualquier otro criterio.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button asChild variant="outline">
                    <Link href="/alquileres">Ver Alquileres</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/ventas">Ver Ventas</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
