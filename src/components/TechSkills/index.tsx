import SectionHeading from "../common/SectionHeading";
import TechSkillsCard from "./TechSkillsCard";

interface Props {}
const TechSkillsSection = (props: Props) => {
  return (
    <>
      <section>
        <div className="my-8">
          <SectionHeading heading="Tech skills" />
          <div className="flex flex-wrap gap-4">
            <TechSkillsCard src="/assets/icons/html-5.svg" label="HTML 5" />
            <TechSkillsCard src="/assets/icons/css.svg" label="CSS 3" />
            <TechSkillsCard
              src="/assets/icons/javascript.svg"
              label="Javascript"
            />
            <TechSkillsCard src="/assets/icons/react.svg" label="React" />
            <TechSkillsCard src="/assets/icons/nextjs.svg" label="Next.js" />
            <TechSkillsCard src="/assets/icons/mongodb.svg" label="Mongo" />
            <TechSkillsCard src="/assets/icons/node.svg" label="Node Js" />
            <TechSkillsCard src="/assets/icons/python.svg" label="Python" />
            <TechSkillsCard src="/assets/icons/java.svg" label="Java" />
          </div>
        </div>
      </section>
    </>
  );
};
export default TechSkillsSection;
