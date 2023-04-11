import DetailedCard from "../common/DetailedCard";
import SectionHeading from "../common/SectionHeading";

interface Props {}

const EducationSection = (props: Props) => {
  return (
    <>
      <section>
        <div className="my-8">
          <SectionHeading heading="Education" />
          <div className="space-y-4">
            <DetailedCard
              src="/assets/icons/harvard.svg"
              title="Harvard university"
              subtitle={{
                first: "Cambridge, GA",
                second: "Bachelor degree, Computer Science(Bsc)",
              }}
              duration="May 2020 - Present"
              description="Emory Admissions Fellow; assisted Dean of Admissions with student applications and Emory's marketing strategy in the roll out of the university's new website"
            />
            <DetailedCard
              src="/assets/icons/harvard.svg"
              title="Mister Bim High School"
              subtitle={{
                first: "Atlanta, GA",
              }}
              duration="September 2016 - 2020"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default EducationSection;
