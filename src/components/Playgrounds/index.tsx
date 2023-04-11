import Grid from "../common/Grid";
import SectionHeading from "../common/SectionHeading";
import PlaygroundsCard from "./PlaygroundsCard";

interface Props {}
const PlaygroundsSection = ({}: Props) => {
  return (
    <>
      <section>
        <div className="my-8">
          <SectionHeading
            heading="Playgrounds"
            action="Create new playground"
          />
          <Grid>
            <PlaygroundsCard src="/assets/icons/html-5.svg" />
            <PlaygroundsCard src="/assets/icons/javascript.svg" />
            <PlaygroundsCard src="/assets/icons/javascript.svg" />
            <PlaygroundsCard src="/assets/icons/html-5.svg" />
          </Grid>
        </div>
      </section>
    </>
  );
};
export default PlaygroundsSection;
