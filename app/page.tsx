import ContactSection from "@/components/contactSection/contactSection";
import Header from "@/components/header/header";
import HeroSection from "@/components/heroSection/heroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ContactSection />
    </main>
  );
}
