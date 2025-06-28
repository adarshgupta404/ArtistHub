import React from "react";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";
import { Music } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="border-b border-white/20 dark:border-gray-800/20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex cursor-pointer items-center space-x-2">
            <div className="flex items-center space-x-2">
              <Music className="h-8 w-8 text-primary" />
              <span className="hidden md:block text-xl font-bold">
                ArtistHub
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/artists"
              className="text-sm whitespace-nowrap font-medium hover:text-primary transition-colors"
            >
              Browse Artists
            </Link>
            <Link
              href="/events"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Events
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/20"
            >
              Sign In
            </Button>
            <Link href="/artist-onboard" className="cursor-pointer">
              <Button
                size="sm"
                className="bg-pink-500 cursor-pointer hover:bg-pink-600 text-white border-0 rounded-full px-4"
              >
                Join as Artist
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
