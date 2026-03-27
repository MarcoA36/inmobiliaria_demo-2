export interface Property {
  id: string
  title: string
  type: 'alquiler' | 'venta'
  price: number
  currency: string
  location: string
  address: string
  bedrooms: number
  bathrooms: number
  area: number
  description: string
  features: string[]
  images: string[]
  featured: boolean
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Departamento de Lujo en Centro",
    type: "venta",
    price: 285000,
    currency: "USD",
    location: "Centro",
    address: "Av. Principal 1234, Centro",
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    description: "Espectacular departamento de lujo ubicado en el corazón de la ciudad. Cuenta con acabados de primera calidad, amplios espacios iluminados naturalmente y vistas panorámicas. Cocina totalmente equipada con electrodomésticos de alta gama. Edificio con amenities completos incluyendo gimnasio, piscina y seguridad 24hs.",
    features: ["Piscina", "Gimnasio", "Cochera", "Seguridad 24hs", "Balcón", "Vista panorámica"],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop"
    ],
    featured: true
  },
  {
    id: "2",
    title: "Casa Moderna con Jardín",
    type: "venta",
    price: 450000,
    currency: "USD",
    location: "Zona Norte",
    address: "Calle Los Robles 567, Zona Norte",
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    description: "Hermosa casa moderna de diseño minimalista con amplios espacios y jardín privado. Ideal para familias que buscan comodidad y elegancia. Living comedor integrado, cocina gourmet y suite principal con vestidor. Piscina climatizada y quincho para disfrutar todo el año.",
    features: ["Jardín", "Piscina climatizada", "Quincho", "Cochera doble", "Alarma", "Calefacción central"],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop"
    ],
    featured: true
  },
  {
    id: "3",
    title: "Loft Industrial Renovado",
    type: "alquiler",
    price: 1800,
    currency: "USD",
    location: "Palermo",
    address: "Thames 2100, Palermo",
    bedrooms: 1,
    bathrooms: 1,
    area: 85,
    description: "Increíble loft de estilo industrial completamente renovado. Techos altos de doble altura con vigas de madera expuestas. Ideal para profesionales creativos que valoran el diseño y la ubicación privilegiada en el corazón de Palermo.",
    features: ["Doble altura", "Amoblado", "Terraza privada", "Calefacción", "Internet incluido"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185008-b033106af5c4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=600&fit=crop"
    ],
    featured: true
  },
  {
    id: "4",
    title: "Penthouse con Vista al Mar",
    type: "venta",
    price: 680000,
    currency: "USD",
    location: "Costa",
    address: "Av. Costanera 890, Zona Costa",
    bedrooms: 3,
    bathrooms: 3,
    area: 220,
    description: "Exclusivo penthouse con vistas panorámicas al mar. Acabados de lujo, terraza de 60m2 con jacuzzi. Tres suites con baño en suite. Cocina de diseño italiano. Ubicación premium sobre la costanera con acceso directo a la playa.",
    features: ["Vista al mar", "Terraza 60m2", "Jacuzzi", "3 cocheras", "Bodega", "Servicio de mucamas"],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566752734-2a0cd5f33f64?w=800&h=600&fit=crop"
    ],
    featured: true
  },
  {
    id: "5",
    title: "Departamento Céntrico 2 Ambientes",
    type: "alquiler",
    price: 950,
    currency: "USD",
    location: "Microcentro",
    address: "Florida 456, Microcentro",
    bedrooms: 1,
    bathrooms: 1,
    area: 55,
    description: "Cómodo departamento de 2 ambientes ideal para profesionales. Ubicación inmejorable en pleno centro comercial y financiero. A pasos del subte y principales avenidas. Recientemente renovado con cocina moderna y baño completo.",
    features: ["Céntrico", "Cerca del subte", "Portero", "Luminoso", "Lavadero"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185009-dddeb820c7b7?w=800&h=600&fit=crop"
    ],
    featured: false
  },
  {
    id: "6",
    title: "Casa Quinta en Country",
    type: "venta",
    price: 750000,
    currency: "USD",
    location: "Country Club",
    address: "Lote 45, Country Los Álamos",
    bedrooms: 5,
    bathrooms: 4,
    area: 400,
    description: "Imponente casa quinta en exclusivo country club. Parque de 2000m2 con añosa arboleda. Casa principal con 5 dormitorios, dependencia de servicio independiente. Piscina, cancha de tenis y quincho profesional. Seguridad perimetral las 24hs.",
    features: ["Country privado", "Parque 2000m2", "Cancha de tenis", "Piscina", "Quincho", "Dependencia servicio"],
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600047508006-6f663bd436da?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753104-685f4f24cb4d?w=800&h=600&fit=crop"
    ],
    featured: false
  },
  {
    id: "7",
    title: "Oficina Premium Torre Corporativa",
    type: "alquiler",
    price: 3500,
    currency: "USD",
    location: "Puerto Madero",
    address: "Av. Madero 1200, Puerto Madero",
    bedrooms: 0,
    bathrooms: 2,
    area: 180,
    description: "Oficina de categoría AAA en torre corporativa de última generación. Piso alto con vistas al río. Incluye 4 cocheras subterráneas. Edificio inteligente con certificación LEED. Ideal para empresas que buscan una imagen premium.",
    features: ["Categoría AAA", "Vista al río", "4 cocheras", "Edificio LEED", "Recepción", "Sala de reuniones"],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop"
    ],
    featured: false
  },
  {
    id: "8",
    title: "Chalet Estilo Europeo",
    type: "venta",
    price: 520000,
    currency: "USD",
    location: "Zona Residencial",
    address: "Av. Las Flores 789, Zona Residencial",
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
    description: "Encantador chalet de estilo europeo con detalles arquitectónicos únicos. Techos a dos aguas, chimenea de leña y pisos de madera maciza. Jardín inglés con rosedal y fuente central. Una propiedad con carácter y personalidad.",
    features: ["Estilo europeo", "Chimenea", "Jardín inglés", "Pisos de madera", "Bodega de vinos", "Cochera triple"],
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&h=600&fit=crop"
    ],
    featured: false
  }
]

export function getPropertyById(id: string): Property | undefined {
  return properties.find(p => p.id === id)
}

export function getPropertiesByType(type: 'alquiler' | 'venta'): Property[] {
  return properties.filter(p => p.type === type)
}

export function getFeaturedProperties(): Property[] {
  return properties.filter(p => p.featured)
}

export function getSimilarProperties(currentId: string, type: 'alquiler' | 'venta', limit: number = 3): Property[] {
  return properties
    .filter(p => p.id !== currentId && p.type === type)
    .slice(0, limit)
}

export function searchProperties(query: string): Property[] {
  const normalizedQuery = query.toLowerCase().trim()
  
  if (!normalizedQuery) return properties
  
  return properties.filter(p => 
    p.title.toLowerCase().includes(normalizedQuery) ||
    p.location.toLowerCase().includes(normalizedQuery) ||
    p.address.toLowerCase().includes(normalizedQuery) ||
    p.description.toLowerCase().includes(normalizedQuery) ||
    p.features.some(f => f.toLowerCase().includes(normalizedQuery))
  )
}
