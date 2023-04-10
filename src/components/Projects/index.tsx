import Grid from "../common/Grid";
import SectionHeading from "../common/SectionHeading";
import ProjectsCard from "./ProjectsCard";

interface Props {}
const ProjectsSection = ({}: Props) => {
  return (
    <>
      <section>
        <div className="my-8">
          <SectionHeading heading="Projects" action="Create new project" />
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
      </section>
    </>
  );
};
export default ProjectsSection;
