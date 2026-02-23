"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimateInViewProps {
  children: React.ReactNode;
  className?: string;
  /** Root margin: e.g. "0px 0px 80px 0px" = trigger 80px before element enters viewport */
  rootMargin?: string;
}

export function AnimateInView({
  children,
  className,
  rootMargin = "0px 0px 80px 0px",
}: AnimateInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.05,
        rootMargin,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={ref}
      className={className}
      data-in-view={inView ? "true" : undefined}
    >
      {children}
    </div>
  );
}
