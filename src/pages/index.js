import Hero from "@/components/Hero/hero";
import Layout from "@/components/layout";
import SectionContent from "@/components/Section/HomeContent/sectionContent";
import RecentProjects from "@/components/Section/HomeContent/recentProjects";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
      </Layout>
      <SectionContent />
      <RecentProjects />
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            { image: "/images/background/mockup-projects.png", speed: -20 },
            { image: "/images/background/mockup-projects.png", speed: -10 },
          ]}
          className="parallax-mockup-home"
        ></ParallaxBanner>
      </ParallaxProvider>
    </>
  );
}
