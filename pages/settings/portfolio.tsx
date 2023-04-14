import PortfolioSettings from "@/src/components/Settings/Portfolio";
import { MainLayout, SettingsLayout } from "@/src/layout";
import Head from "next/head";

interface Props {}
const Portfolio = (props: Props) => {
  return (
    <>
      <Head>
        <title>Your Portfolio Settings</title>
      </Head>
      <MainLayout>
        <SettingsLayout>
          <PortfolioSettings />
        </SettingsLayout>
      </MainLayout>
    </>
  );
};
export default Portfolio;
