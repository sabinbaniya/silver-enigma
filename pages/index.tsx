import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/src/components/Navbar";
import Profile from "@/src/components/Profile";

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
        </main>
      </section>
    </>
  );
};

export default Home;
