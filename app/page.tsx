import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

import { MinimalistHero } from "@/components/ui/minimalist-hero";
import { ActivityBentoGrid } from "@/components/ui/activity-bento-grid";
import { AnimatedBackground } from "@/components/ui/animated-background";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4fff8] text-slate-900">
      <AnimatedBackground />

      <MinimalistHero
        logoText="E-WASTE"
        navLinks={[
          { label: "ABOUT", href: "#about" },
          { label: "ACTIVITIES", href: "#activities" },
          { label: "ASSIGNMENTS", href: "#assignments" },
          { label: "REFLECTION", href: "#reflection" },
        ]}
        mainText="A creative sustainability portfolio documenting my E-Waste Management learning journey through activities, assignments, reflections, and environmental initiatives."
        readMoreLink="#about"
        imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
        imageAlt="Esha Valunj portrait"
        overlayText={{ part1: "green", part2: "future." }}
        socialLinks={[
          { icon: FacebookIcon, href: "#" },
          { icon: InstagramIcon, href: "#" },
          { icon: TwitterIcon, href: "#" },
          { icon: LinkedinIcon, href: "#" },
        ]}
        locationText="Mumbai, India"
      />

      <section id="activities" className="container mx-auto px-4">
        <ActivityBentoGrid />
      </section>
    </main>
  );
}