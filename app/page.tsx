import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        {/* Hero Banner */}
        <div className="mb-8">
          <HeroBanner />
        </div>
      </main>
    </div>
  );
}
