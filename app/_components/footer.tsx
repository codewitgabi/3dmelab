import Link from "next/link";
import { AnimateInView } from "@/app/_components/animate-in-view";

const footerLinks = {
  product: [
    { label: "Text to 3D", href: "#text-to-3d" },
    { label: "Image to 3D", href: "#image-to-3d" },
    { label: "Formats", href: "#formats" },
    { label: "Get started", href: "#get-started" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Blog", href: "#blog" },
  ],
  legal: [
    { label: "Privacy", href: "#privacy" },
    { label: "Terms", href: "#terms" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <AnimateInView>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="animate-on-scroll stagger-1 sm:col-span-2 lg:col-span-1">
              <Link
                href="/"
                className="font-semibold tracking-tight text-foreground no-underline"
              >
                3Dme<span className="text-primary">lab</span>
              </Link>
              <p className="mt-2 text-sm text-muted-foreground">
                Generate 3D images from text or photos.
              </p>
            </div>
            <div className="animate-on-scroll stagger-2">
              <h3 className="text-sm font-medium text-foreground">Product</h3>
              <ul className="mt-3 space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-on-scroll stagger-3">
              <h3 className="text-sm font-medium text-foreground">Company</h3>
              <ul className="mt-3 space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="animate-on-scroll stagger-4 mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} 3Dmelab. All rights reserved.
            </p>
            <ul className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </AnimateInView>
      </div>
    </footer>
  );
}
