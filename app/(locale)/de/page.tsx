import { setRequestLocale } from "next-intl/server";
import { HomeContent } from "../home-content";

export default async function DePage() {
  setRequestLocale("de");
  return <HomeContent />;
}
