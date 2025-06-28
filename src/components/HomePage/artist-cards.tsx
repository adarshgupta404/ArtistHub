import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, MessageCircle } from 'lucide-react'
import Image from "next/image"
import type { Artist } from "@/lib/data/artists"

interface ArtistCardProps {
  artist: Artist
}

export function ArtistCard({ artist }: ArtistCardProps) {
  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "Available":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "Busy":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    }
  }

  return (
    <Card className="group py-0 gap-2 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white/10 dark:bg-gray-800/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={artist.image || "/placeholder.svg"}
            alt={artist.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <Badge className={`${getAvailabilityColor(artist.availability)} border-0`}>
              <Clock className="w-3 h-3 mr-1" />
              {artist.availability}
            </Badge>
          </div>
          <div className="absolute top-3 left-3">
            <Badge className="bg-pink-500/90 text-white border-0">
              {artist.category}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 pt-0 space-y-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg leading-tight">{artist.name}</h3>
          
          <div className="flex items-center space-x-1 text-sm">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{artist.rating}</span>
            <span className="text-muted-foreground">({artist.reviewCount} reviews)</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" />
            {artist.location}
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {artist.description}
        </p>

        <div className="flex flex-wrap gap-1">
          {artist.specialties.slice(0, 2).map((specialty, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs bg-white/20 dark:bg-gray-700/20 border-0"
            >
              {specialty}
            </Badge>
          ))}
          {artist.specialties.length > 2 && (
            <Badge
              variant="secondary"
              className="text-xs bg-white/20 dark:bg-gray-700/20 border-0"
            >
              +{artist.specialties.length - 2} more
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="text-sm">
            <span className="font-semibold text-pink-500">${artist.priceRange}</span>
            <div className="text-xs text-muted-foreground">{artist.experience} experience</div>
          </div>
        </div>

        <Button 
          className="w-full bg-pink-500 hover:bg-pink-600 text-white border-0 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          size="sm"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Ask for Quote
        </Button>
      </CardContent>
    </Card>
  )
}
