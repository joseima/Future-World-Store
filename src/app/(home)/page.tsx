import { Description } from "app/components/home/Description";
import { Hero } from "app/components/home/Hero";
import { MainProducts } from "app/components/home/MainProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Future World",
  description: "Welcome to the future world",
  keywords: ["ecommerce", "technology"]
}

export default function Home() {
  return (
    <main>
      <Hero/>
      <Description/>
      <MainProducts/>
    </main>
  );
}
