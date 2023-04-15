import { profileSettingsAtom } from "@/src/atoms/userProfileSettings";
import { useAtom } from "jotai";
import Grid from "../common/Grid";
import SectionHeading from "../common/SectionHeading";
import StatsCard from "./StatsCard";

interface Props {}
const StatsSection = (props: Props) => {
  const [userProfile] = useAtom(profileSettingsAtom);

  if (!userProfile?.showAchievement) return null;

  return (
    <>
      <section>
        <div className="my-8">
          <SectionHeading heading="Stats" />
          <Grid>
            <StatsCard
              label="Longest Streak"
              value="2"
              src="/assets/icons/lightning.svg"
            />
            {userProfile?.showXP && (
              <StatsCard
                label="Experience points"
                value="1200"
                src="/assets/icons/starfour.svg"
              />
            )}
            <StatsCard
              label="Current league"
              value="Novice"
              src="/assets/icons/cup.svg"
            />
            <StatsCard
              label="Karma points"
              value="2"
              src="/assets/icons/heartbeat.svg"
            />
          </Grid>
        </div>
      </section>
    </>
  );
};
export default StatsSection;
