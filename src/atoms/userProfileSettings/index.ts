import { IProfileSettings } from "@/src/components/Settings/Profile";
import { atomWithStorage } from "jotai/utils";

export const profileSettingsAtom = atomWithStorage<IProfileSettings | null>(
  "profile-settings",
  null
);
