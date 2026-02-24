import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 antialiased">
      <h1 className="text-2xl font-bold">Page not found</h1>
      <Link href="/en" className="text-accent underline hover:no-underline">
        Go to homepage
      </Link>
    </div>
  );
}
