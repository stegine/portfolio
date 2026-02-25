import { meta } from "@/content/meta";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";
const origin = baseUrl ? (basePath ? `${baseUrl}${basePath}` : baseUrl) : "";

const sameAs = [meta.github, meta.linkedin].filter(Boolean);

export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: meta.name,
    url: origin || undefined,
    email: meta.email,
    ...(sameAs.length > 0 && { sameAs }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
