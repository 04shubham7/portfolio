import { Container, Main, Section } from "@/components/craft";
import React from "react";
import ProfileCard from "@/components/home-page/profile-card";
import LinksCard from "@/components/home-page/links-card";
import ProjectPoster from "@/components/home-page/project-poster";
import TechStackCard from "@/components/home-page/tech-stack-card";
import ToolsBoard from "@/components/home-page/tools-board";
import HomeLayout from "@/components/home-page/home-layout";

const IndexPage = () => {
  return (
    <Main className="min-h-screen bg-black relative">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-zinc-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      
      <Section className="py-0 relative z-10">
        <Container className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-4 md:py-8">
          <HomeLayout>
            <TechStackCard />
            <ProfileCard />
            <ToolsBoard />
            <LinksCard />
            <ProjectPoster />
          </HomeLayout>
        </Container>
      </Section>
    </Main>
  );
};

export default IndexPage;
