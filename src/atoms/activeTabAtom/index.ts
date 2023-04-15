import { TabsValue } from "@/src/types/tabs";
import { atom } from "jotai";

export const activeTabAtom = atom<TabsValue>(TabsValue.PORTFOLIO);
