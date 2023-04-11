import DetailedCard from "../common/DetailedCard";
import SectionHeading from "../common/SectionHeading";

interface Props {}

const WorkExperienceSection = ({}: Props) => {
  return (
    <>
      <section>
        <div className="my-8">
          <SectionHeading centered heading="Work experience" />
          <div className="space-y-4">
            <DetailedCard
              src="/assets/icons/google.svg"
              title="Front-end Developer at Google"
              location="London"
              office="Google Inc"
              duration="May 2021 - Present"
              description="This role would be great for a web developer with 3+ year's
                experience in designing and developing responsive websites. This
                position requires a profound understanding of the development
                process, using front-end technologies including HTML5, CSS3,
                JavaScript, jQuery, PHP/WordPress."
            />
            <DetailedCard
              src="/assets/icons/facebook.svg"
              title="Junior Front-end Developer at Meta"
              location="New York"
              office="Meta Inc"
              duration="July 2020 - May 2021"
              description="This role would be great for a web developer with 3+ years' experience in designing and developing responsive websites."
              responsiblities={[
                "Create an appealing design and turn it into a WordPress plugin",
                "Manage all technical aspects of the CMS",
                "Conducting website/application tests",
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default WorkExperienceSection;
