"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X, Filter } from "lucide-react"
import { categories, locations, priceRanges } from "@/lib/data/artists"

interface ArtistFiltersProps {
  selectedCategory: string
  selectedLocation: string
  selectedPriceRange: string
  onCategoryChange: (category: string) => void
  onLocationChange: (location: string) => void
  onPriceRangeChange: (priceRange: string) => void
  onClearFilters: () => void
  resultCount: number
}

export function ArtistFilters({
  selectedCategory,
  selectedLocation,
  selectedPriceRange,
  onCategoryChange,
  onLocationChange,
  onPriceRangeChange,
  onClearFilters,
  resultCount,
}: ArtistFiltersProps) {
  const hasActiveFilters = selectedCategory !== "All" || selectedLocation !== "All" || selectedPriceRange !== "All"

  return (
    <Card className="sticky top-0 bg-white/50 dark:bg-black/50 backdrop-blur-md border border-white/20 dark:border-gray-700/20">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center">
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </CardTitle>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-pink-500 hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/20"
            >
              <X className="w-4 h-4 mr-1" />
              Clear All
            </Button>
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          {resultCount} artist{resultCount !== 1 ? "s" : ""} found
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Category</label>
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category.toLowerCase()}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Location</label>
          <Select value={selectedLocation} onValueChange={onLocationChange}>
            <SelectTrigger className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Price Range</label>
          <Select value={selectedPriceRange} onValueChange={onPriceRangeChange}>
            <SelectTrigger className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
              <SelectValue placeholder="Select price range" />
            </SelectTrigger>
            <SelectContent>
              {priceRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {hasActiveFilters && (
          <div className="space-y-2">
            <label className="text-sm font-medium">Active Filters</label>
            <div className="flex flex-wrap gap-2">
              {selectedCategory !== "All" && (
                <Badge
                  variant="secondary"
                  className="bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400 border-0"
                >
                  {selectedCategory}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 ml-1 hover:bg-transparent"
                    onClick={() => onCategoryChange("All")}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
              )}
              {selectedLocation !== "All" && (
                <Badge
                  variant="secondary"
                  className="bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400 border-0"
                >
                  {selectedLocation}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 ml-1 hover:bg-transparent"
                    onClick={() => onLocationChange("All")}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
              )}
              {selectedPriceRange !== "All" && (
                <Badge
                  variant="secondary"
                  className="bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400 border-0"
                >
                  {selectedPriceRange}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 ml-1 hover:bg-transparent"
                    onClick={() => onPriceRangeChange("All")}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
