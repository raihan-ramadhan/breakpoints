import { LucideIcon } from "lucide-react";
import { Separator } from "../../ui/separator";
import { TooltipProvider } from "../../ui/tooltip";
import MoreDropdown from "./Fragments/MoreDropdown";
import { Orientation } from "../../../types/global";
import NavMenuRightItems from "./Fragments/NavMenuRightItems";
import * as LucideIcons from "lucide-react";
import { useRef } from "react";
import { useControls } from "react-zoom-pan-pinch";
import { IconName } from "../../Sidebar/Fragments/SidebarIcons";

const ScreenNav = ({
  isDrag,
  resetZoom,
  orientation,
  removeScreen,
  toggleIsDrag,
  currDimensions,
  toggleOrientation,
  currentSize,
  name,
  icon,
}: {
  currDimensions: { w: number | string; h: number | string };
  currentSize: { w: number; h: number };
  orientation: Orientation;
  isDrag: boolean;
  name: string;
  icon: IconName;
  resetZoom: () => void;
  toggleIsDrag: () => void;
  removeScreen: () => void;
  toggleOrientation: () => void;
}) => {
  const zoomInterval = useRef<NodeJS.Timeout | null>(null);
  const { instance, setTransform } = useControls();

  const startZooming = (direction: "in" | "out") => {
    zoomInterval.current = setInterval(() => {
      const state = instance.transformState;
      let newScale = state.scale + (direction === "in" ? 0.1 : -0.1);

      newScale = Math.max(0.5, Math.min(3, newScale)); // Limit zoom range (50% - 300%)
      setTransform(state.positionX, state.positionY, newScale);
    }, 100); // Adjust zoom speed
  };

  const stopZooming = () => {
    if (zoomInterval.current) {
      clearInterval(zoomInterval.current);
      zoomInterval.current = null;
    }
  };

  const IconComponent = LucideIcons[
    icon as keyof typeof LucideIcons
  ] as LucideIcon;

  return (
    <TooltipProvider>
      <div className="flex items-center flex-col w-full bg-background justify-start @container/screen-nav border-b border-border px-1.5 sm:px-3">
        {/* TOP NAV MENU */}
        <div className="w-full py-2 flex justify-between items-center">
          {/* LEFT */}
          <div className="flex items-center gap-2">
            <IconComponent
              size={28}
              className="translate-y-[0.5px] @[535px]/screen-nav:hidden"
            />
            <div className="flex flex-col justify-center">
              <h2 className="inline-flex text-sm items-center gap-1 font-medium">
                <IconComponent
                  size={18}
                  className="translate-y-[0.5px] hidden @[535px]/screen-nav:block"
                />
                <span>{name}</span>
              </h2>
              <span className="@[535px]/screen-nav:hidden text-xs">
                Original : {currentSize.w} x {currentSize.h}
              </span>
            </div>
          </div>
          {/* RIGHT */}
          <div className="text-xs font-medium text-muted-foreground gap-2 items-center hidden @[535px]/screen-nav:flex">
            <span className="min-w-[150px] text-end">
              Current : {currDimensions.w} x {currDimensions.h}
            </span>
            <Separator
              orientation="vertical"
              className="!h-4 bg-muted-foreground"
            />
            <span>
              Original : {currentSize.w} x {currentSize.h}
            </span>
          </div>
          <MoreDropdown
            currDimensions={currDimensions}
            startZooming={startZooming}
            stopZooming={stopZooming}
            toggleIsDrag={toggleIsDrag}
            resetZoom={resetZoom}
            removeScreen={removeScreen}
            toggleOrientation={toggleOrientation}
            orientation={orientation}
            isDrag={isDrag}
          />
        </div>

        {/* BOTTOM NAV MENU */}
        <NavMenuRightItems
          resetZoom={resetZoom}
          startZooming={startZooming}
          stopZooming={stopZooming}
          isDrag={isDrag}
          toggleIsDrag={toggleIsDrag}
          removeScreen={removeScreen}
          orientation={orientation}
          toggleOrientation={toggleOrientation}
        />
      </div>
    </TooltipProvider>
  );
};

export default ScreenNav;
