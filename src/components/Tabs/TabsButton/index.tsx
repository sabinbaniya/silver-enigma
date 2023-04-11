import { activeTabAtom } from "@/src/atoms/activeTabAtom";
import { TabsValue } from "@/src/types/tabs";
import { useAtom } from "jotai";

interface Props {
  text: TabsValue;
}

const TabsButton = ({ text }: Props) => {
  const [activeTab, setActiveTab] = useAtom(activeTabAtom);

  return (
    <>
      <button
        onClick={() => setActiveTab(text)}
        className={`rounded-lg p-2 font-semibold transition-all ${
          activeTab === text
            ? "bg-blue-100 text-blue-800"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        {text}
      </button>
    </>
  );
};
export default TabsButton;
