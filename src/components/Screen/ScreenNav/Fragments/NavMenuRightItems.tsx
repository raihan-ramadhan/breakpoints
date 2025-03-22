import { Button } from "../../../ui/button";
import { ChevronDown, Move, RefreshCcw, Trash } from "lucide-react";
import { cn } from "../../../../lib/utils";
import { Orientation } from "../../../../types/global";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../../ui/dropdown-menu";
import { useZoom } from "../../../../context/zoom";
import ZoomSliderAndButtons from "./ZoomSliderAndButtons";

const NavMenuRightItems = ({
  removeScreen,
  orientation,
  toggleOrientation,
  toggleIsDrag,
  isDrag,
  startZooming,
  stopZooming,
  resetZoom,
}: {
  stopZooming: () => void;
  startZooming: (direction: "in" | "out") => void;
  resetZoom: () => void;
  removeScreen: () => void;
  orientation: Orientation;
  toggleOrientation: () => void;
  toggleIsDrag: () => void;
  isDrag: boolean;
}) => {
  const { zoom } = useZoom();

  return (
    <div className="w-full items-center justify-between shrink-0 py-2 hidden @[535px]/screen-nav:flex border-t border-border">
      <div className="flex items-center gap-1">
        <Button onClick={toggleOrientation} variant={"outline"} size={"sm"}>
          <RefreshCcw
            className={cn(
              "transition-[rotate] duration-300",
              orientation === "landscape" && "-rotate-90"
            )}
          />
          <span>Toggle Orientation </span>
        </Button>
        <Button
          onClick={removeScreen}
          variant={"outline"}
          size={"sm"}
          className="hover:bg-destructive hover:text-white transition-colors"
        >
          <Trash />
          <span>Remove Screen</span>
        </Button>

        <Button
          onClick={toggleIsDrag}
          variant={isDrag ? "default" : "outline"}
          size={"sm"}
        >
          <Move />
          <span>Drag to move</span>
        </Button>
      </div>

      <div
        className={cn(
          "items-center gap-0.5",
          isDrag ? "hidden @[765px]/screen-nav:inline-flex" : "hidden"
        )}
      >
        <ZoomSliderAndButtons
          resetZoom={resetZoom}
          startZooming={startZooming}
          stopZooming={stopZooming}
          zoom={zoom}
        />
      </div>
      {isDrag ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"ghost"}
              size={"sm"}
              type="button"
              className="flex @[765px]/screen-nav:hidden"
            >
              <span>{zoom}%</span>
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="p-2 flex">
            <ZoomSliderAndButtons
              resetZoom={resetZoom}
              startZooming={startZooming}
              stopZooming={stopZooming}
              zoom={zoom}
              isHidePercent
            />
          </DropdownMenuContent>
        </DropdownMenu>
      ) : null}
    </div>
  );
};

export default NavMenuRightItems;
