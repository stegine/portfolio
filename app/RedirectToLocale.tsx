"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectToLocale({
  defaultLocale,
}: {
  defaultLocale: string;
}) {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${defaultLocale}`);
  }, [router, defaultLocale]);

  return (
    <div style={{ fontFamily: "system-ui", padding: "2rem", textAlign: "center" }}>
      <p>
        <Link href={`/${defaultLocale}`}>Weiter zur Seite →</Link>
      </p>
    </div>
  );
}
