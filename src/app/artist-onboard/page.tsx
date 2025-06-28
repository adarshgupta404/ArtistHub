import ArtistOnboardingForm from "@/components/HomePage/artist-onboarding";
import Navbar from "@/components/HomePage/navbar";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Navbar />
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-500 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
      </div>
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Artist Onboarding</h1>
            <p className="text-lg text-muted-foreground">
              Join our creative community and showcase your talent
            </p>
          </div>
          <ArtistOnboardingForm />
        </div>
      </div>
    </main>
  );
}
