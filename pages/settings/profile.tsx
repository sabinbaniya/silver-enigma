import Button from "@/src/components/common/Button";
import InputGroup from "@/src/components/common/Forms/InputGroup";
import { MainLayout, SettingsLayout } from "@/src/layout";
import Head from "next/head";
import Image from "next/image";

interface Props {}
const ProfileSettings = (props: Props) => {
  return (
    <>
      <Head>
        <title>Your Profile Settings</title>
      </Head>
      <MainLayout>
        <SettingsLayout>
          <div>
            <div className="flex items-center space-x-8">
              <Image
                height={72}
                width={72}
                src="/assets/images/avatar.png"
                alt=""
              />
              <div className="flex items-center space-x-4">
                <Button style="primary">Upload new picture</Button>
                <Button style="secondary">Delete</Button>
              </div>
            </div>
            <div className="mt-8">
              <InputGroup labelText="Display name">
                <p className="text-gray-500">
                  Name entered above will be used for all issued certificates
                </p>
              </InputGroup>
              <InputGroup
                as="textarea"
                labelText="About"
                placeholder="Let people know something about you..."
              />
              <InputGroup labelText="Profession" />
              <InputGroup
                type="date"
                labelText="Date of birth"
                placeholder="DD/MM/YYYY"
              />
            </div>
          </div>
        </SettingsLayout>
      </MainLayout>
    </>
  );
};
export default ProfileSettings;
