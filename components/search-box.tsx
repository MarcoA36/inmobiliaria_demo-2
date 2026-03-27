"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SearchBox() {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/buscar?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="bg-card rounded-xl shadow-2xl p-6 md:p-8 border border-border/50">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="flex-1 w-full">
          <div className="flex items-center gap-3 px-4 py-3 bg-muted rounded-lg">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por ubicación, tipo de propiedad..." 
              className="bg-transparent flex-1 outline-none text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <Button asChild variant="outline" className="flex-1 md:flex-none">
            <Link href="/alquileres">Alquileres</Link>
          </Button>
          <Button asChild variant="outline" className="flex-1 md:flex-none">
            <Link href="/ventas">Ventas</Link>
          </Button>
          <Button type="submit" className="flex-1 md:flex-none">
            <Search className="h-4 w-4 mr-2" />
            Buscar
          </Button>
        </div>
      </div>
    </form>
  )
}
