import SocialSettings from "@/src/components/Settings/Socials";
import { MainLayout, SettingsLayout } from "@/src/layout";
import Head from "next/head";

interface Props {}
const Social = (props: Props) => {
  return (
    <>
      <Head>
        <title>Your Social Settings</title>
      </Head>
      <MainLayout>
        <SettingsLayout>
          <>
            <SocialSettings />
          </>
        </SettingsLayout>
      </MainLayout>
    </>
  );
};
export default Social;
