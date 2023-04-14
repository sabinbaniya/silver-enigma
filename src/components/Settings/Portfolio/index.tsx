import { useState } from "react";
import PlaygroundsCard from "../../Playgrounds/PlaygroundsCard";
import ProjectsCard from "../../Projects/ProjectsCard";
import Button from "../../common/Button";
import Grid from "../../common/Grid";
import SectionHeading from "../../common/SectionHeading";

interface Props {}
const PortfolioSettings = (props: Props) => {
  const [selectedPlaygrounds, setSelectedPlaygrounds] = useState(
    [] as number[]
  );

  const handleClick = (idx: number) => {
    console.log(idx, selectedPlaygrounds, "inside handle");

    if (selectedPlaygrounds.includes(idx)) {
      setSelectedPlaygrounds((prev) => prev.filter((el) => el !== idx));
    } else {
      setSelectedPlaygrounds((prev) => [...prev, idx]);
    }
  };

  console.log(selectedPlaygrounds, "selected");

  return (
    <>
      <div className="-mt-6 space-y-6">
        <div>
          <SectionHeading
            heading="Playgrounds"
            action="See all"
            actionstyle={2}
          />
          <Grid>
            <PlaygroundsCard
              selected={selectedPlaygrounds.includes(0)}
              onClick={() => handleClick(0)}
              fromSettings
              src="/assets/icons/html-5.svg"
            />
            <PlaygroundsCard
              selected={selectedPlaygrounds.includes(1)}
              onClick={() => handleClick(1)}
              fromSettings
              src="/assets/icons/javascript.svg"
            />
            <PlaygroundsCard
              selected={selectedPlaygrounds.includes(2)}
              onClick={() => handleClick(2)}
              fromSettings
              src="/assets/icons/javascript.svg"
            />
            <PlaygroundsCard
              selected={selectedPlaygrounds.includes(3)}
              onClick={() => handleClick(3)}
              fromSettings
              src="/assets/icons/html-5.svg"
            />
          </Grid>
        </div>
        <div>
          <SectionHeading heading="Projects" action="See all" actionstyle={2} />
          <Grid>
            <ProjectsCard
              src="/assets/images/portfolio.png"
              title="Personal Portfolio Website"
            />
            <ProjectsCard
              src="/assets/images/portfolio.png"
              title="Personal Portfolio Website"
            />
            <ProjectsCard
              src="/assets/images/portfolio.png"
              title="Personal Portfolio Website"
            />
            <ProjectsCard
              src="/assets/images/portfolio.png"
              title="Personal Portfolio Website"
            />
          </Grid>
        </div>
        <div className="flex justify-end space-x-4">
          <Button style="secondary" onClick={() => {}}>
            Cancel
          </Button>
          <Button style="primary">Save Changes</Button>
        </div>
      </div>
    </>
  );
};
export default PortfolioSettings;
