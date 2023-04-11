import Card from "../common/Card";
import SectionHeading from "../common/SectionHeading";

interface Props {}
const InterestsSection = (props: Props) => {
  return (
    <>
      <section>
        <div className="my-8">
          <SectionHeading heading="Interests" />
          <div className="flex flex-wrap gap-4">
            <Card>
              <div className="p-2 font-semibold">Semantics</div>
            </Card>
            <Card>
              <div className="p-2 font-semibold">TED Talks</div>
            </Card>
            <Card>
              <div className="p-2 font-semibold">Udemy</div>
            </Card>
            <Card>
              <div className="p-2 font-semibold">Behavioral</div>
            </Card>
            <Card>
              <div className="p-2 font-semibold">Economics</div>
            </Card>
            <Card>
              <div className="p-2 font-semibold">Hiking</div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};
export default InterestsSection;
