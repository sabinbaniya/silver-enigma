import SwitchGroup from "@/src/components/Settings/Profile/SwitchGroup";
import Button from "@/src/components/common/Button";
import Card from "@/src/components/common/Card";
import InputGroup from "@/src/components/common/Forms/InputGroup";
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
  showFollowingAndFollowers: boolean;
  showXP: boolean;
  showAchievement: boolean;
}

const ProfileSettings = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormFields>();

  const onsubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data, "submitted");
  };

  return (
    <>
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
          <div className="my-8">
            <div className="space-y-2">
              <p className="text-3xl font-bold">Section visibility</p>
              <p className="text-gray-600">
                Select which sections and content should show on your profile
                page.
              </p>
            </div>
            <div className="my-8">
              <Card>
                <div className="space-y-6 p-8">
                  <SwitchGroup
                    register={register}
                    name="showFollowingAndFollowers"
                    title="Following and Followers"
                    subtitle="Shows your followers and the users you follow on codedamn"
                  />
                  <SwitchGroup
                    register={register}
                    name="showXP"
                    title="XP"
                    subtitle="Shows the XP you have earned"
                  />
                  <SwitchGroup
                    register={register}
                    name="showAchievement"
                    title="Achievement badges"
                    subtitle="Shows your relative percentile and proficience"
                  />
                </div>
              </Card>
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <Button style="secondary" onClick={() => {}}>
              Cancel
            </Button>
            <Button style="primary">Save Changes</Button>
          </div>
        </form>
      </div>
    </>
  );
};
export default ProfileSettings;
