import Link from "next/link"
import Image from "next/image"
import { Bed, Bath, Maximize, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Property } from "@/lib/properties"

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: property.currency,
    maximumFractionDigits: 0
  }).format(property.price)

  return (
    <Link href={`/propiedad/${property.id}`}>
      <Card className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
          <Badge 
            className={`absolute top-4 left-4 ${
              property.type === 'venta' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-accent text-accent-foreground'
            }`}
          >
            {property.type === 'venta' ? 'En Venta' : 'En Alquiler'}
          </Badge>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-background font-serif text-2xl font-bold">
              {formattedPrice}
              {property.type === 'alquiler' && <span className="text-sm font-normal">/mes</span>}
            </p>
          </div>
        </div>
        <CardContent className="p-5">
          <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {property.title}
          </h3>
          <div className="flex items-center gap-2 mt-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{property.location}</span>
          </div>
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
            {property.bedrooms > 0 && (
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Bed className="h-4 w-4" />
                <span className="text-sm">{property.bedrooms}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Bath className="h-4 w-4" />
              <span className="text-sm">{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Maximize className="h-4 w-4" />
              <span className="text-sm">{property.area} m²</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
