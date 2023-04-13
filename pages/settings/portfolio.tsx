import { MainLayout, SettingsLayout } from "@/src/layout";

interface Props {}
const PortfolioSettings = (props: Props) => {
  return (
    <>
      <MainLayout>
        <SettingsLayout>Portfolio Content</SettingsLayout>
      </MainLayout>
    </>
  );
};
export default PortfolioSettings;
