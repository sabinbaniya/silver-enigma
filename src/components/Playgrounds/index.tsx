import { userPortfolioSettingsAtom } from "@/src/atoms/userPortfolioSettings";
import { useAtom } from "jotai";
import Grid from "../common/Grid";
import SectionHeading from "../common/SectionHeading";
import PlaygroundsCard from "./PlaygroundsCard";

interface Props {}
const PlaygroundsSection = ({}: Props) => {
  const [userPortfolioSettings] = useAtom(userPortfolioSettingsAtom);

  const shouldShow = (idx: number) =>
    userPortfolioSettings?.playgrounds.includes(idx);
  return (
    <>
      <section>
        <div className="my-8">
          <SectionHeading
            heading="Playgrounds"
            action="Create new playground"
          />
          <Grid>
            {shouldShow(0) && (
              <PlaygroundsCard src="/assets/icons/html-5.svg" />
            )}
            {shouldShow(1) && (
              <PlaygroundsCard src="/assets/icons/javascript.svg" />
            )}
            {shouldShow(2) && (
              <PlaygroundsCard src="/assets/icons/javascript.svg" />
            )}
            {shouldShow(3) && (
              <PlaygroundsCard src="/assets/icons/html-5.svg" />
            )}
          </Grid>
        </div>
      </section>
    </>
  );
};
export default PlaygroundsSection;
