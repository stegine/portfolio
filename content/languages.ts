export type LanguageLevel = "native" | "fluent" | "business" | "basic";

export const languages: { name: string; level: LanguageLevel }[] = [
  { name: "Deutsch", level: "native" },
  { name: "Englisch", level: "business" },
];
