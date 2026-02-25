import type { Metadata } from "next";
import { getLocaleMetadata, LocaleLayoutContent } from "../locale-layout";

export async function generateMetadata(): Promise<Metadata> {
  return getLocaleMetadata("de");
}

export default async function DeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LocaleLayoutContent locale="de">{children}</LocaleLayoutContent>;
}
