import { unsavedChangesAtom } from "@/src/atoms/unsavedChangesAtom";
import { userPortfolioSettingsAtom } from "@/src/atoms/userPortfolioSettings";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import PlaygroundsCard from "../../Playgrounds/PlaygroundsCard";
import ProjectsCard from "../../Projects/ProjectsCard";
import Button from "../../common/Button";
import Grid from "../../common/Grid";
import SectionHeading from "../../common/SectionHeading";

interface Props {}

interface ItemsState {
  playgrounds: Array<number>;
  projects: Array<number>;
}

const defaultSelectedItems = {
  playgrounds: [],
  projects: [],
};

const PortfolioSettings = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [selectedItems, setSelectedItems] =
    useState<ItemsState>(defaultSelectedItems);

  const [, setUnsavedChanges] = useAtom(unsavedChangesAtom);
  const [showCaseItems, setShowcaseItems] = useAtom(userPortfolioSettingsAtom);

  const isChanged =
    JSON.stringify(selectedItems) !== JSON.stringify(showCaseItems);

  useEffect(() => {
    if (showCaseItems) {
      setUnsavedChanges(false);
      setSelectedItems(showCaseItems);
    }
  }, [showCaseItems, setUnsavedChanges]);

  const isSelected = (idx: number, type: keyof typeof selectedItems) => {
    return selectedItems[type].includes(idx);
  };

  const handleClick = (idx: number, type: keyof typeof selectedItems) => {
    setUnsavedChanges(true);
    if (selectedItems[type].includes(idx)) {
      setSelectedItems((prev) => ({
        ...prev,
        [type]: prev[type].filter((el) => el !== idx),
      }));
    } else {
      setSelectedItems((prev) => ({ ...prev, [type]: [...prev[type], idx] }));
    }
  };

  const handleSave = () => {
    setLoading(true);
    setShowcaseItems(selectedItems);
    setUnsavedChanges(false);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleCancel = () => {
    setUnsavedChanges(false);
    if (showCaseItems) setSelectedItems(showCaseItems);
  };

  // console.log(selectedItems, showCaseItems);
  // console.count("portfolio settings");
  // console.log(isChanged);

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
              selected={isSelected(0, "playgrounds")}
              onClick={() => handleClick(0, "playgrounds")}
              fromSettings
              src="/assets/icons/html-5.svg"
            />
            <PlaygroundsCard
              selected={isSelected(1, "playgrounds")}
              onClick={() => handleClick(1, "playgrounds")}
              fromSettings
              src="/assets/icons/javascript.svg"
            />
            <PlaygroundsCard
              selected={isSelected(2, "playgrounds")}
              onClick={() => handleClick(2, "playgrounds")}
              fromSettings
              src="/assets/icons/javascript.svg"
            />
            <PlaygroundsCard
              selected={isSelected(3, "playgrounds")}
              onClick={() => handleClick(3, "playgrounds")}
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
              fromSettings
              selected={isSelected(0, "projects")}
              onClick={() => handleClick(0, "projects")}
            />
            <ProjectsCard
              src="/assets/images/portfolio.png"
              title="Personal Portfolio Website"
              fromSettings
              selected={isSelected(1, "projects")}
              onClick={() => handleClick(1, "projects")}
            />
            <ProjectsCard
              src="/assets/images/portfolio.png"
              title="Personal Portfolio Website"
              fromSettings
              selected={isSelected(2, "projects")}
              onClick={() => handleClick(2, "projects")}
            />
            <ProjectsCard
              src="/assets/images/portfolio.png"
              title="Personal Portfolio Website"
              fromSettings
              selected={isSelected(3, "projects")}
              onClick={() => handleClick(3, "projects")}
            />
          </Grid>
        </div>
        <div className="flex justify-end space-x-4">
          <Button style="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            style="primary"
            loading={loading}
            disabled={!isChanged}
            onClick={handleSave}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </>
  );
};

export type { ItemsState };
export default PortfolioSettings;
