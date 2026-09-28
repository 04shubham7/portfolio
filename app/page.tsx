import { Container, Main, Section } from "@/components/craft";
import React from "react";
import ProfileCard from "@/components/home-page/profile-card";
import LinksCard from "@/components/home-page/links-card";
import ProjectPoster from "@/components/home-page/project-poster";
import TechStackCard from "@/components/home-page/tech-stack-card";
import ToolsBoard from "@/components/home-page/tools-board";

const IndexPage = () => {
  return (
    <Main className="min-h-screen bg-black relative">
      <Section className="py-0">
        <Container className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-4 md:py-8">
          <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr_1fr] gap-6">
            {/* Left column - Tech stack */}
            <div className="order-3 md:order-1 h-full">
              <TechStackCard />
            </div>

            {/* Center column - Profile + Tools board */}
            <div className="order-1 md:order-2 flex flex-col gap-6 w-full h-full">
              <div className="w-full min-h-[300px]">
                <ProfileCard />
              </div>
              <div className="flex-grow w-full">
                <ToolsBoard />
              </div>
            </div>

            {/* Right column - Links + Project poster */}
            <div className="order-2 md:order-3 flex flex-col gap-6 md:items-end h-full">
              <div className="w-full md:w-auto h-auto">
                <LinksCard />
              </div>
              <div className="w-full flex-grow">
                <ProjectPoster />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Main>
  );
};

export default IndexPage;
