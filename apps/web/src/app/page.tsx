"use client"
import { useQuery } from "@tanstack/react-query";
import { trpc } from "@/utils/trpc";
import V0Hero from "@/components/sections/home/v0-hero";
import { Header } from "@/components/sections/home/header";
import { Footer } from "@/components/sections/home/footer";
import { grim } from "@bounty/dev-logger";

const { log } = grim();

export default function Home() {
  const healthCheck = useQuery(trpc.healthCheck.queryOptions());

  log(`healthCheck: ${healthCheck.data?.status}`);  

  return (
    <div className="bg-landing-background mx-auto w-full">
      <Header />
      <V0Hero />
      <Footer />
    </div>
  );
}
