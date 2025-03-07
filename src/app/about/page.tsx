import { SocialMediaIcons } from "@/components/molecules/SocialMediaIcons";
import { HeroSection } from "@/components/organisms/about/HeroSection";
import { ImageSection } from "@/components/organisms/about/ImageSection";

export default function Home() {
  return (
    <div className="container mx-auto">
      <HeroSection />
      <ImageSection />
      <div className="flex flex-col justify-center items-center h-[500px]">
        <div className="flex flex-col items-center justify-center text-3xl md:text-6xl">
          <p>Because we are you.</p>
          <p>Humans.</p>
        </div>
        <p className="pt-10 text-center">
          Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi
          qui dolor cillum fugiat ad.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center container mx-auto bg-black text-white h-[500px]">
        <div className="flex flex-col items-center">
            <p className="text-3xl md:text-6xl">want to connect?</p>
            <p className="pt-10 text-center">Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui..</p>
        </div>
        <div className="pt-10 text-2xl  md:text-4xl">
        <SocialMediaIcons />

        </div>
      </div>
    </div>
  );
}
