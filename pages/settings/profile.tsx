import Button from "@/src/components/common/Button";
import InputGroup from "@/src/components/common/Forms/InputGroup";
import { MainLayout, SettingsLayout } from "@/src/layout";
import Head from "next/head";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {}

interface FormFields {
  name: string;
  about: string;
  profession: string;
  dob: string;
  gender: string;
  test: string;
}

const ProfileSettings = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormFields>();

  console.log(watch("name"));

  const onsubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data, "submitted");
  };

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
            <form onSubmit={handleSubmit(onsubmit)} className="mt-8">
              <InputGroup
                register={register}
                errors={errors.name}
                name="name"
                labelText="Display name"
              >
                <p className="text-gray-500">
                  Name entered above will be used for all issued certificates
                </p>
              </InputGroup>
              <InputGroup
                as="textarea"
                labelText="About"
                placeholder="Let people know something about you..."
                register={register}
                name="about"
                errors={errors.about}
              />
              <InputGroup
                register={register}
                name="profession"
                errors={errors.profession}
                labelText="Profession"
              />
              <InputGroup
                register={register}
                name="dob"
                errors={errors.dob}
                type="date"
                labelText="Date of birth"
                placeholder="DD/MM/YYYY"
              />
              <InputGroup
                register={register}
                errors={errors.gender}
                name="gender"
                type="select"
                labelText="Gender"
                placeholder="What is your gender"
                options={["Male", "Female", "Others - please specify below"]}
              />
            </form>
          </div>
        </SettingsLayout>
      </MainLayout>
    </>
  );
};
export default ProfileSettings;
