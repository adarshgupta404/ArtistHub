import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Music, Users, Mic, Headphones, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { NumberTicker } from "@/components/magicui/number-ticker";
import Navbar from "@/components/HomePage/navbar";

export default function HomePage() {
  const artistCategories = [
    {
      title: "Singers",
      description:
        "Discover talented vocalists for your events, from pop to classical",
      icon: <Mic className="h-8 w-8" />,
      count: "250+ Artists",
      image:
        "https://vocalist.org.uk/wp-content/uploads/2020/03/solo-artist.jpg",
    },
    {
      title: "Dancers",
      description:
        "Professional dancers specializing in various styles and performances",
      icon: <Users className="h-8 w-8" />,
      count: "180+ Artists",
      image:
        "https://vocalist.org.uk/wp-content/uploads/2020/03/solo-artist.jpg",
    },
    {
      title: "Speakers",
      description:
        "Inspiring speakers and presenters for corporate and personal events",
      icon: <Star className="h-8 w-8" />,
      count: "120+ Artists",
      image:
        "https://vocalist.org.uk/wp-content/uploads/2020/03/solo-artist.jpg",
    },
    {
      title: "DJs",
      description:
        "Professional DJs to keep your audience entertained and dancing",
      icon: <Headphones className="h-8 w-8" />,
      count: "200+ Artists",
      image:
        "https://vocalist.org.uk/wp-content/uploads/2020/03/solo-artist.jpg",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-500 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
      </div>

      <Navbar/>

      <section className="relative w-full p-10 md:p-0 min-h-screen flex items-center justify-center lg:py-10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center lg:max-w-[80%]">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Connect with
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 block">
                    Amazing Artists
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Discover and book talented performers for your events. From
                  singers to speakers, find the perfect artist to make your
                  occasion unforgettable.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 bg-pink-500 hover:bg-pink-600 text-white border-0 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore Artists
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/20"
                >
                  How It Works
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center p-4 rounded-lg bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                  <div className="text-2xl whitespace-nowrap font-bold">
                    <NumberTicker value={700} />
                    {"+"}
                  </div>
                  <div className="text-sm text-muted-foreground">Artists</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                  <div className="text-2xl whitespace-nowrap font-bold">
                    <NumberTicker value={1200} />
                    {"+"}
                  </div>
                  <div className="text-sm text-muted-foreground">Events</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                  <div className="text-2xl whitespace-nowrap items-center font-bold">
                    <NumberTicker value={98} />
                    {"%"}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 p-4">
                <Image
                  src="https://www.shutterstock.com/shutterstock/videos/3514532075/thumb/10.jpg?ip=x480"
                  alt="Artists performing"
                  width={450}
                  height={600}
                  className="rounded-xl relative  left-0 lg:ml-10 shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-0 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md p-4 rounded-xl border border-white/20 dark:border-gray-700/20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <div className="font-semibold">Top Rated</div>
                    <div className="text-sm text-muted-foreground">
                      5.0 Average Rating
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Explore Artist Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find the perfect performer for your event from our diverse range
              of talented artists
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 xl:px-14">
            {artistCategories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer bg-white/10 dark:bg-gray-800/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20"
              >
                <CardHeader className="pb-4">
                  <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-full p-2 border border-white/20 dark:border-gray-700/20">
                      {category.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <div className="text-sm text-pink-500 font-medium">
                    {category.count}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-base mb-4">
                    {category.description}
                  </CardDescription>
                  <Link className="cursor-pointer" href={"/artists?category=" + category.title.toLowerCase()}>
                    <Button
                      variant="ghost"
                      className="w-full cursor-pointer group-hover:bg-pink-500 group-hover:text-white transition-all duration-300 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-full"
                    
                    >
                      Browse {category.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 lg:p-16 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Ready to Find Your Perfect Artist?
              </h2>
              <p className="text-xl opacity-90">
                Join thousands of event organizers who trust ArtistHub to
                connect them with amazing performers for unforgettable
                experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="text-lg px-8 bg-pink-500 hover:bg-pink-600 text-white border-0 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Browsing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-pink-200 dark:border-pink-800 hover:bg-pink-50 dark:hover:bg-pink-900/20 rounded-full"
                >
                  Post Your Event
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900/80 dark:bg-gray-950/80 backdrop-blur-md border-t border-white/10 dark:border-gray-800/20 text-white py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Music className="h-6 w-6" />
                <span className="text-lg font-bold">ArtistHub</span>
              </div>
              <p className="text-gray-400">
                Connecting amazing artists with unforgettable events.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">For Event Organizers</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/browse"
                    className="hover:text-white transition-colors"
                  >
                    Browse Artists
                  </Link>
                </li>
                <li>
                  <Link
                    href="/post-event"
                    className="hover:text-white transition-colors"
                  >
                    Post an Event
                  </Link>
                </li>
                <li>
                  <Link
                    href="/how-it-works"
                    className="hover:text-white transition-colors"
                  >
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">For Artists</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/join"
                    className="hover:text-white transition-colors"
                  >
                    Join as Artist
                  </Link>
                </li>
                <li>
                  <Link
                    href="/artist-resources"
                    className="hover:text-white transition-colors"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/success-stories"
                    className="hover:text-white transition-colors"
                  >
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/help"
                    className="hover:text-white transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} ArtistHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
