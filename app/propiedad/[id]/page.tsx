import Link from "next/link"
import { notFound } from "next/navigation"
import { Bed, Bath, Maximize, MapPin, Check, ArrowLeft, Phone, Mail, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PropertyCard } from "@/components/property-card"
import { ImageGallery } from "@/components/image-gallery"
import { getPropertyById, getSimilarProperties } from "@/lib/properties"

interface PropertyPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PropertyPageProps) {
  const { id } = await params
  const property = getPropertyById(id)
  
  if (!property) {
    return { title: "Propiedad no encontrada" }
  }
  
  return {
    title: `${property.title} - Inmobiliaria Premium`,
    description: property.description,
  }
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params
  const property = getPropertyById(id)

  if (!property) {
    notFound()
  }

  const similarProperties = getSimilarProperties(id, property.type)

  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: property.currency,
    maximumFractionDigits: 0
  }).format(property.price)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/50 py-4">
          <div className="container mx-auto px-4">
            <Link 
              href={property.type === 'venta' ? '/ventas' : '/alquileres'}
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a {property.type === 'venta' ? 'Ventas' : 'Alquileres'}
            </Link>
          </div>
        </div>

        {/* Image Gallery */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <ImageGallery images={property.images} title={property.title} />
          </div>
        </section>

        {/* Property Details */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <Badge 
                      className={`mb-3 ${
                        property.type === 'venta' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-accent text-accent-foreground'
                      }`}
                    >
                      {property.type === 'venta' ? 'En Venta' : 'En Alquiler'}
                    </Badge>
                    <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                      {property.title}
                    </h1>
                    <div className="flex items-center gap-2 mt-3 text-muted-foreground">
                      <MapPin className="h-5 w-5" />
                      <span>{property.address}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 p-6 bg-muted/50 rounded-xl mb-8">
                  {property.bedrooms > 0 && (
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 text-primary mb-1">
                        <Bed className="h-5 w-5" />
                        <span className="font-serif text-2xl font-bold">{property.bedrooms}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Dormitorios</p>
                    </div>
                  )}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-primary mb-1">
                      <Bath className="h-5 w-5" />
                      <span className="font-serif text-2xl font-bold">{property.bathrooms}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Baños</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-primary mb-1">
                      <Maximize className="h-5 w-5" />
                      <span className="font-serif text-2xl font-bold">{property.area}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">m² totales</p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    Descripción
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {property.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    Características
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <div className="bg-primary/10 p-1.5 rounded-full">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-card border border-border rounded-xl p-6 shadow-lg">
                  <div className="mb-6">
                    <p className="text-muted-foreground text-sm">Precio</p>
                    <p className="font-serif text-3xl font-bold text-primary">
                      {formattedPrice}
                      {property.type === 'alquiler' && <span className="text-lg font-normal text-muted-foreground">/mes</span>}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <Button className="w-full" size="lg">
                      <Phone className="h-4 w-4 mr-2" />
                      Llamar ahora
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      <Mail className="h-4 w-4 mr-2" />
                      Enviar consulta
                    </Button>
                  </div>

                  <div className="border-t border-border pt-6">
                    <p className="text-sm text-muted-foreground mb-3">Contacto directo:</p>
                    <div className="space-y-2">
                      <a 
                        href={`tel:${property.type === 'venta' ? '2284123242' : '2284132343'}`}
                        className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        {property.type === 'venta' ? '2284-123242' : '2284-132343'}
                      </a>
                      <a 
                        href="mailto:inmobiliarias@gmail.com"
                        className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        inmobiliarias@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Properties Section */}
        {similarProperties.length > 0 && (
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-primary font-medium text-sm uppercase tracking-widest">
                  Te puede interesar
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3">
                  Propiedades similares
                </h2>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Otras opciones que podrían interesarte en la misma categoría
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarProperties.map((prop) => (
                  <PropertyCard key={prop.id} property={prop} />
                ))}
              </div>

              <div className="text-center mt-12">
                <Button size="lg" variant="outline" asChild>
                  <Link href={property.type === 'venta' ? '/ventas' : '/alquileres'}>
                    Ver más propiedades en {property.type === 'venta' ? 'venta' : 'alquiler'}
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
