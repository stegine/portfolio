import type { Metadata } from "next";
import { getLocaleMetadata, LocaleLayoutContent } from "../locale-layout";

export async function generateMetadata(): Promise<Metadata> {
  return getLocaleMetadata("en");
}

export default async function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LocaleLayoutContent locale="en">{children}</LocaleLayoutContent>;
}
