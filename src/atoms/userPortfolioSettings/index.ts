import { ItemsState } from "@/src/components/Settings/Portfolio";
import { atomWithStorage } from "jotai/utils";

export const userPortfolioSettingsAtom = atomWithStorage<ItemsState | null>(
  "portfolio-settings",
  null
);
