"use client";

import { useEffect } from "react";

export default function RedirectToLocale({
  defaultLocale,
}: {
  defaultLocale: string;
}) {
  useEffect(() => {
    window.location.replace(`/${defaultLocale}`);
  }, [defaultLocale]);

  return (
    <div style={{ fontFamily: "system-ui", padding: "2rem", textAlign: "center" }}>
      <p>
        <a href={`/${defaultLocale}`}>Weiter zur Seite →</a>
      </p>
    </div>
  );
}
