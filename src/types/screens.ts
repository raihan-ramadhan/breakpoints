import { IconName } from "../components/Sidebar/Fragments/SidebarIcons";

interface ScreenSize {
  w: number;
  h: number;
}

export type ScreenItem = {
  name: string;
  size: ScreenSize;
  id: string;
};

interface ScreenSubCategory {
  group: string;
  items: ScreenItem[];
}

export interface ScreenCategory {
  title: string;
  icon: IconName;
  subCategories: ScreenSubCategory[];
}

export type CheckedScreens = Record<string, ScreenItem & { icon: IconName }>;
