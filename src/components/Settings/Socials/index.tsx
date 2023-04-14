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
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormFields>();

  const onsubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
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
export default SocialSettings;
