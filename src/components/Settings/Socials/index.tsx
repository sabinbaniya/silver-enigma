import { unsavedChangesAtom } from "@/src/atoms/unsavedChangesAtom";
import { socialSettingsAtom } from "@/src/atoms/userSocialSettings";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../common/Button";
import InputGroup from "../../common/Forms/InputGroup";

interface Props {}

interface FormFields {
  github?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  dribbble?: string;
  behance?: string;
}

const SocialSettings = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [socialDetails, setSocialDetails] = useAtom(socialSettingsAtom);
  const [, setUnsavedChanges] = useAtom(unsavedChangesAtom);

  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
    reset,
  } = useForm<FormFields>();

  useEffect(() => {
    if (socialDetails) {
      reset(socialDetails);
    }
  }, [socialDetails, reset]);

  useEffect(() => {
    setUnsavedChanges(false);
    if (isDirty) setUnsavedChanges(true);
  }, [isDirty, setUnsavedChanges]);

  const onsubmit: SubmitHandler<FormFields> = (data) => {
    setLoading(true);
    setSocialDetails({ ...data });
    setUnsavedChanges(false);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onsubmit)} className="-mt-6">
          <InputGroup
            register={register}
            name="github"
            labelText="Github"
            placeholder="Github profile URL"
            errors={errors.github}
          />
          <InputGroup
            register={register}
            name="linkedin"
            labelText="Linkedin"
            placeholder="Linkedin profile URL"
            errors={errors.linkedin}
          />
          <InputGroup
            register={register}
            name="facebook"
            labelText="Facebook"
            placeholder="Facebook profile URL"
            errors={errors.facebook}
          />
          <InputGroup
            register={register}
            name="instagram"
            labelText="Instagram"
            placeholder="Instagram profile URL"
            errors={errors.instagram}
          />
          <InputGroup
            register={register}
            name="dribbble"
            labelText="Dribbble"
            placeholder="Dribbble profile URL"
            errors={errors.dribbble}
          />
          <InputGroup
            register={register}
            name="behance"
            labelText="Behance"
            placeholder="Behance profile URL"
            errors={errors.behance}
          />
          <div className="flex justify-end space-x-4">
            <Button
              style="secondary"
              onClick={() => {
                reset();
              }}
              type="button"
            >
              Cancel
            </Button>
            <Button disabled={!isDirty} loading={loading} style="primary">
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export type { FormFields as ISocialSettings };
export default SocialSettings;
