import Link from "next/link";
import { Home } from "lucide-react";

export default function GlobalNotFound() {
  return (
    <>
      <title>404 – Page not found</title>
      <div className="relative flex min-h-screen flex-col">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_60%_at_50%_-15%,rgba(16,185,129,0.12),transparent_50%)]" />

      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16">
        <div className="mx-auto max-w-md text-center">
          <p className="font-heading text-7xl font-bold tracking-tight text-accent sm:text-8xl">
            404
          </p>
          <h1 className="font-heading mt-4 text-xl font-semibold text-foreground sm:text-2xl">
            Page not found
          </h1>
          <p className="mt-3 text-base text-muted">
            The page you’re looking for doesn’t exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-10 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Home className="h-4 w-4" />
            Back to homepage
          </Link>
        </div>
      </main>
    </div>
    </>
  );
}
