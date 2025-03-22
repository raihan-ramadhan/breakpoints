import {
  Ban,
  Minus,
  MoreVertical,
  Move,
  Plus,
  RefreshCcw,
  RotateCcw,
  Trash,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../ui/dropdown-menu";
import { Button } from "../../../ui/button";
import { cn } from "../../../../lib/utils";
import { Orientation } from "../../../../types/global";
import { useZoom } from "../../../../context/zoom";
import SliderZoom from "./SliderZoom";

const MoreDropdown = ({
  currDimensions,
  orientation,
  toggleOrientation,
  removeScreen,
  resetZoom,
  toggleIsDrag,
  startZooming,
  stopZooming,
  isDrag,
}: {
  orientation: Orientation;
  stopZooming: () => void;
  startZooming: (direction: "in" | "out") => void;
  currDimensions: { w: number | string; h: number | string };
  toggleOrientation: () => void;
  removeScreen: () => void;
  resetZoom: () => void;
  toggleIsDrag: () => void;
  isDrag: boolean;
}) => {
  const { zoom } = useZoom();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          type="button"
          size={"sm"}
          className="@[535px]/screen-nav:hidden"
        >
          <MoreVertical />
          <span className="sr-only">More Trigger</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="p-2 w-52 text-sm">
        {/* DIMENSION */}
        <div className="flex flex-col py-1 px-2">
          <span className="text-xs text-muted-foreground font-medium">
            Current Dimension
          </span>
          <span>
            {currDimensions.w} x {currDimensions.h}
          </span>
        </div>

        <DropdownMenuSeparator />

        {/* ZOOM */}
        {isDrag ? (
          <>
            <div className="flex flex-col py-1 pb-2 gap-y-1 px-2">
              <div className="w-full flex justify-between items-start py-1">
                <div className="flex flex-col pb-1.5">
                  <span className="text-xs text-muted-foreground font-medium">
                    Zoom Level
                  </span>
                  <span className="text-xs text-">{zoom}%</span>
                </div>
                <DropdownMenuItem
                  className="!p-1"
                  onClick={resetZoom}
                  onSelect={(event) => event.preventDefault()}
                >
                  <RotateCcw size={12} />
                  <span className="text-xs">Reset</span>
                </DropdownMenuItem>
              </div>
              <div className="flex items-center gap-1">
                <DropdownMenuItem
                  asChild
                  onSelect={(event) => event.preventDefault()}
                >
                  <Button
                    className="size-5"
                    variant={"secondary"}
                    type="button"
                    size={"icon"}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      startZooming("out");
                    }}
                    onMouseUp={stopZooming}
                    onMouseLeave={stopZooming}
                    onTouchStart={(e) => {
                      e.preventDefault();
                      startZooming("out");
                    }}
                    onTouchEnd={stopZooming}
                  >
                    <Minus />
                  </Button>
                </DropdownMenuItem>
                <SliderZoom />
                <DropdownMenuItem
                  asChild
                  onSelect={(event) => event.preventDefault()}
                >
                  <Button
                    className="size-5"
                    variant={"secondary"}
                    type="button"
                    size={"icon"}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      startZooming("in");
                    }}
                    onMouseUp={stopZooming}
                    onMouseLeave={stopZooming}
                    onTouchStart={(e) => {
                      e.preventDefault();
                      startZooming("in");
                    }}
                    onTouchEnd={stopZooming}
                  >
                    <Plus />
                  </Button>
                </DropdownMenuItem>
              </div>
            </div>

            <DropdownMenuItem
              className={cn(
                "w-full justify-start focus-visible:border-none mx-0.5"
              )}
              onClick={toggleIsDrag}
              onSelect={(e) => e.preventDefault()}
            >
              <Ban />
              Disable Drag
            </DropdownMenuItem>

            <DropdownMenuSeparator />
          </>
        ) : null}

        {/* THE REST */}
        <DropdownMenuGroup className="flex flex-col w-full px-0.5">
          {!isDrag ? (
            <DropdownMenuItem
              className={cn(
                "w-full justify-start focus-visible:border-none hover",
                isDrag &&
                  "bg-primary text-primary-foreground hover:!bg-primary/90 hover:!text-primary-foreground group/drag-to-scroll:"
              )}
              onClick={toggleIsDrag}
              onSelect={(e) => e.preventDefault()}
            >
              <Move
                className={cn(
                  isDrag &&
                    "group-hover/drag-to-scroll:!text-primary-foreground"
                )}
              />
              Drag to Move
            </DropdownMenuItem>
          ) : null}

          <DropdownMenuItem
            className="justify-start w-full"
            onClick={toggleOrientation}
          >
            <RefreshCcw
              className={cn(
                "transition-[rotate] duration-300",
                orientation === "landscape" && "-rotate-90"
              )}
            />
            Toggle Orientation
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={removeScreen}
            className="w-full justify-start focus-visible:border-none hover:!bg-destructive hover:!text-destructive-foreground group/remove-button focus-visible:!bg-destructive focus-visible:!text-destructive-foreground group/remove-button"
          >
            <Trash className="group-hover/remove-button:!text-destructive-foreground" />
            Remove
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MoreDropdown;
