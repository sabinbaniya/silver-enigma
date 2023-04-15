import { userPortfolioSettingsAtom } from "@/src/atoms/userPortfolioSettings";
import { useAtom } from "jotai";
import Grid from "../common/Grid";
import SectionHeading from "../common/SectionHeading";
import ProjectsCard from "./ProjectsCard";

interface Props {}
const ProjectsSection = ({}: Props) => {
  const [userPortfolioSettings] = useAtom(userPortfolioSettingsAtom);

  const shouldShow = (idx: number) =>
    userPortfolioSettings?.projects.includes(idx);

  return (
    <>
      <section>
        <div className="my-8">
          <SectionHeading heading="Projects" action="Create new project" />
          <Grid>
            {shouldShow(0) && (
              <ProjectsCard
                src="/assets/images/portfolio.png"
                title="Personal Portfolio Website"
              />
            )}
            {shouldShow(1) && (
              <ProjectsCard
                src="/assets/images/portfolio.png"
                title="Personal Portfolio Website"
              />
            )}
            {shouldShow(2) && (
              <ProjectsCard
                src="/assets/images/portfolio.png"
                title="Personal Portfolio Website"
              />
            )}
            {shouldShow(3) && (
              <ProjectsCard
                src="/assets/images/portfolio.png"
                title="Personal Portfolio Website"
              />
            )}
          </Grid>
        </div>
      </section>
    </>
  );
};
export default ProjectsSection;
