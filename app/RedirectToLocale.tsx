"use client";

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
    <div className="flex min-h-[50vh] items-center justify-center" aria-hidden>
      <span className="sr-only">Weiterleitung…</span>
    </div>
  );
}
