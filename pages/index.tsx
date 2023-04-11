import Navbar from "@/src/components/Navbar";
import PlaygroundsSection from "@/src/components/Playgrounds";
import Profile from "@/src/components/Profile";
import ProjectsSection from "@/src/components/Projects";
import StatsSection from "@/src/components/Stats";
import Tabs from "@/src/components/Tabs";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Your Profile</title>
      </Head>
      <section>
        <Navbar />
        <main className="mx-auto max-w-4xl">
          <Profile />
          <Tabs />
          <StatsSection />
          <ProjectsSection />
          <PlaygroundsSection />
        </main>
      </section>
    </>
  );
};

export default Home;
