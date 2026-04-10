import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PropertyCard } from "@/components/property-card"
import { getPropertiesByType } from "@/lib/properties"

export const metadata = {
  title: "Alquileres - Inmobiliaria",
  description: "Encuentra las mejores propiedades en alquiler. Departamentos, casas, oficinas y más.",
}

export default function AlquileresPage() {
  const properties = getPropertiesByType("alquiler")

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">
              Propiedades en Alquiler
            </h1>
            <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto leading-relaxed">
              Encuentra el hogar perfecto para ti. Tenemos las mejores opciones de alquiler en las ubicaciones más privilegiadas.
            </p>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">{properties.length}</span> propiedades encontradas
              </p>
            </div>

            {properties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No hay propiedades disponibles en este momento.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
