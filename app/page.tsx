import { routing } from "@/i18n/routing";
import RedirectToLocale from "./RedirectToLocale";

export default function RootPage() {
  return (
    <RedirectToLocale defaultLocale={routing.defaultLocale} />
  );
}
