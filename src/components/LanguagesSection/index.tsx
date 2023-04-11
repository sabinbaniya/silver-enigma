import TechSkillsCard from "../TechSkills/TechSkillsCard";
import SectionHeading from "../common/SectionHeading";

interface Props {}
const LanguagesSection = (props: Props) => {
  return (
    <>
      <section>
        <div className="my-8">
          <SectionHeading heading="Languages" />
          <div className="flex gap-4">
            <TechSkillsCard src="/assets/icons/flags/us.svg" label="English" />
            <TechSkillsCard src="/assets/icons/flags/tw.svg" label="Mandarin" />
            <TechSkillsCard
              src="/assets/icons/flags/cn.svg"
              label="Cantonese Chinese"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default LanguagesSection;
