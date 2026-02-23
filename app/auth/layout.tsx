import { Navbar } from "@/components/navbar";
import { Footer } from "@/app/_components/footer";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center bg-muted/30 px-4 pt-24 pb-16">
        <div className="w-full max-w-sm rounded-xl border border-border bg-background p-6 shadow-sm">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
