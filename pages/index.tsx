import { activeTabAtom } from "@/src/atoms/activeTabAtom";
import AboutMeSection from "@/src/components/AboutMe";
import CertificatesSection from "@/src/components/Certificates";
import EducationSection from "@/src/components/Education";
import InterestsSection from "@/src/components/Interests";
import LanguagesSection from "@/src/components/LanguagesSection";
import PlaygroundsSection from "@/src/components/Playgrounds";
import Profile from "@/src/components/Profile";
import ProjectsSection from "@/src/components/Projects";
import StatsSection from "@/src/components/Stats";
import Tabs from "@/src/components/Tabs";
import TechSkillsSection from "@/src/components/TechSkills";
import WorkExperienceSection from "@/src/components/WorkExperience";
import { MainLayout } from "@/src/layout";
import { TabsValue } from "@/src/types/tabs";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const [activeTab] = useAtom(activeTabAtom);
  return (
    <>
      <Head>
        <title>Your Profile</title>
      </Head>
      <MainLayout>
        <main className="mx-auto max-w-4xl">
          <Profile />
          <Tabs />
          <AnimatePresence>
            {activeTab === TabsValue.PORTFOLIO && (
              <motion.section
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <StatsSection />
                <ProjectsSection />
                <PlaygroundsSection />
                <CertificatesSection />
              </motion.section>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {activeTab === TabsValue.RESUME && (
              <motion.section
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                }}
                transition={{ delay: 0.2 }}
              >
                <AboutMeSection />
                <WorkExperienceSection />
                <EducationSection />
                <TechSkillsSection />
                <InterestsSection />
                <LanguagesSection />
              </motion.section>
            )}
          </AnimatePresence>
        </main>
      </MainLayout>
    </>
  );
};

export default Home;
