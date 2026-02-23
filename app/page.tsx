import { Navbar } from "@/components/navbar";
import { Hero } from "@/app/_components/hero";
import { TextTo3D } from "@/app/_components/text-to-3d";
import { ImageTo3D } from "@/app/_components/image-to-3d";
import { Formats } from "@/app/_components/formats";
import { Cta } from "@/app/_components/cta";
import { Footer } from "@/app/_components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TextTo3D />
        <ImageTo3D />
        <Formats />
        <Cta />
        <Footer />
      </main>
    </div>
  );
}
