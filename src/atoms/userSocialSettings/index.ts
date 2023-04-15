import { ISocialSettings } from "@/src/components/Settings/Socials";
import { atomWithStorage } from "jotai/utils";

export const socialSettingsAtom = atomWithStorage<ISocialSettings | null>(
  "social-settings",
  null
);
