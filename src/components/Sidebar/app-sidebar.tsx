import { ChevronRight } from "lucide-react";
import {
  Sidebar,
  SidebarRail,
  SidebarGroup,
  SidebarMenu,
  SidebarFooter,
  SidebarContent,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarGroupLabel,
  SidebarMenuSubItem,
  SidebarGroupContent,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Checkbox } from "../ui/checkbox";
import { CheckedScreens, ScreenCategory } from "../../types/screens";
import { ModeDropdown } from "../mode-dropdown";
import SidebarIcons from "./Fragments/SidebarIcons";

export function AppSidebar({
  screens,
  checkedScreens,
  setCheckedScreens,
}: {
  screens: ScreenCategory[];
  checkedScreens: CheckedScreens;
  setCheckedScreens: React.Dispatch<React.SetStateAction<CheckedScreens>>;
}) {
  const toggleScreen = (id: string, target: CheckedScreens[string]) => {
    setCheckedScreens((prev) => {
      if (prev[id]) {
        const newCheckedScreens = { ...prev };
        delete newCheckedScreens[id];
        return newCheckedScreens;
      } else {
        return { [id]: target, ...prev };
      }
    });
  };

  return (
    <Sidebar>
      <SidebarContent className="p-2">
        {screens.map((item, categoryIndex) => {
          return (
            <Collapsible
              title={item.title}
              key={item.title}
              className="group/collapsible"
            >
              <SidebarGroup className="p-0">
                <SidebarGroupLabel
                  asChild
                  className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground gap-2"
                >
                  <CollapsibleTrigger>
                    <SidebarIcons name={item.icon} />
                    {item.title}
                    <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {item.subCategories.map(
                        ({ group, items }, subCategoryIndex) => (
                          <SidebarMenuItem key={group}>
                            <SidebarMenuSub>
                              {items.map(({ name, size, id }, itemIndex) => (
                                <SidebarMenuSubItem
                                  key={name}
                                  className="h-fit"
                                >
                                  <SidebarMenuSubButton asChild>
                                    <div
                                      className="flex w-full text-xs h-fit py-2 cursor-pointer select-none"
                                      onClick={() => {
                                        const target: CheckedScreens[string] = {
                                          ...screens[categoryIndex]
                                            .subCategories[subCategoryIndex]
                                            .items[itemIndex],
                                          icon: screens[categoryIndex].icon,
                                        };

                                        toggleScreen(id, target);
                                      }}
                                    >
                                      <div className="flex justify-between w-full gap-1">
                                        <span className="inline-block">
                                          {name}
                                        </span>
                                        <span className="w-max shrink-0">
                                          {size.w} x {size.h}
                                        </span>
                                      </div>
                                      <Checkbox
                                        className="bg-background"
                                        checked={!!checkedScreens[id]}
                                        onChange={() => {}}
                                      />
                                    </div>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </SidebarMenuItem>
                        )
                      )}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          );
        })}
      </SidebarContent>
      <SidebarFooter>
        <ModeDropdown />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
