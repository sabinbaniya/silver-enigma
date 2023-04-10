import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/src/components/Navbar";
import Profile from "@/src/components/Profile";
import Tabs from "@/src/components/Tabs";
import StatsSection from "@/src/components/Stats";
import ProjectsSection from "@/src/components/Projects";

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
        </main>
      </section>
    </>
  );
};

export default Home;
