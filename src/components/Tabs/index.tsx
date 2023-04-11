import { TabsValue } from "@/src/types/tabs";
import TabsButton from "./TabsButton";

const Tabs = () => {
  return (
    <>
      <div className="my-8 space-x-4 rounded-xl border border-gray-200 p-4">
        <TabsButton text={TabsValue.PORTFOLIO} />
        <TabsButton text={TabsValue.RESUME} />
      </div>
    </>
  );
};

export default Tabs;
