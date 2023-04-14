import ProfileSettings from "@/src/components/Settings/Profile";
import { MainLayout, SettingsLayout } from "@/src/layout";
import Head from "next/head";

interface Props {}

const Profile = (props: Props) => {
  return (
    <>
      <Head>
        <title>Your Profile Settings</title>
      </Head>
      <MainLayout>
        <SettingsLayout>
          <ProfileSettings />
        </SettingsLayout>
      </MainLayout>
    </>
  );
};
export default Profile;
