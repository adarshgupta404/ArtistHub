"use client";

import { ArtistCard } from "@/components/HomePage/artist-cards";
import { ArtistFilters } from "@/components/HomePage/artists-filters";
import Navbar from "@/components/HomePage/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Artist, isPriceInRange } from "@/lib/data/artists";
import { Grid, List, Music, Search } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function ArtistsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const searchParams = useSearchParams();
  const [artists, setArtists] = useState<Artist[]>([]);
  const category = searchParams.get("category");

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

 useEffect(() => {
    const fetchArtists = async () => {
      try {
        const res = await fetch("/api/artists");
        const data = await res.json();
        setArtists(data);
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    };

    fetchArtists();
  }, []);

  const filteredArtists = useMemo(() => {
    return artists.filter((artist) => {
      const matchesCategory =
        selectedCategory.toLowerCase() === "All".toLowerCase() || artist.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesLocation =
        selectedLocation === "All" || artist.location === selectedLocation;
      const matchesPriceRange =
        selectedPriceRange === "All" ||
        isPriceInRange(artist.priceRange, selectedPriceRange);
      const matchesSearch =
        searchQuery === "" ||
        artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        artist.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        artist.specialties.some((specialty) =>
          specialty.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return (
        matchesCategory && matchesLocation && matchesPriceRange && matchesSearch
      );
    });
  }, [selectedCategory, selectedLocation, selectedPriceRange, searchQuery, artists]);

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedLocation("All");
    setSelectedPriceRange("All");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-white/40 dark:bg-black/40 relative">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-500 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
      </div>

     <Navbar/>

      <main className="container md:px-12 mx-auto px-4 sm:px-6 lg:px-8 py-8">
    
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Find Your Perfect Artist
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover talented performers for your next event
          </p>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="relative flex items-center gap-2 bg-white dark:bg-black rounded-lg pl-2 max-w-md ">
            <Search className="  text-black dark:text-white h-4 w-4" />
            <Input
              placeholder="Search artists, specialties..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="  bg-white/50  dark:bg-black/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={
                viewMode === "grid"
                  ? "bg-pink-500 hover:bg-pink-600 text-white"
                  : ""
              }
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className={
                viewMode === "list"
                  ? "bg-pink-500 hover:bg-pink-600 text-white"
                  : ""
              }
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 relative">
          <div className="lg:col-span-1">
            <div className="sticky top-24 h-fit">
              <ArtistFilters
                selectedCategory={selectedCategory}
                selectedLocation={selectedLocation}
                selectedPriceRange={selectedPriceRange}
                onCategoryChange={setSelectedCategory}
                onLocationChange={setSelectedLocation}
                onPriceRangeChange={setSelectedPriceRange}
                onClearFilters={clearFilters}
                resultCount={filteredArtists.length}
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            {filteredArtists.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎭</div>
                <h3 className="text-xl font-semibold mb-2">No artists found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters or search terms
                </p>
                <Button
                  onClick={clearFilters}
                  className="bg-pink-500 hover:bg-pink-600 text-white border-0 rounded-full"
                >
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div
                className={`grid gap-6 ${
                  viewMode === "grid"
                    ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                    : "grid-cols-1"
                }`}
              >
                {filteredArtists.map((artist) => (
                  <ArtistCard key={artist.id} artist={artist} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
