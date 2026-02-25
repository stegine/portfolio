import { setRequestLocale } from "next-intl/server";
import { HomeContent } from "../home-content";

export default async function EnPage() {
  setRequestLocale("en");
  return <HomeContent />;
}
