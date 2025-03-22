import { Tooltip, TooltipContent, TooltipTrigger } from "../../../ui/tooltip";
import { Button, buttonVariants } from "../../../ui/button";
import { Minus, Plus, RotateCcw } from "lucide-react";
import SliderZoom from "./SliderZoom";
import { cn } from "../../../../lib/utils";

const ZoomSliderAndButtons = ({
  startZooming,
  stopZooming,
  resetZoom,
  isHidePercent,
  zoom,
}: {
  isHidePercent?: boolean;
  resetZoom: () => void;
  stopZooming: () => void;
  startZooming: (direction: "in" | "out") => void;
  zoom: number;
}) => {
  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={"ghost"}
            type="button"
            size={"sm"}
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
            onClick={(e) => {
              e.preventDefault();
              startZooming("out");
              stopZooming();
            }}
            onTouchEnd={stopZooming}
          >
            <span className="sr-only">zoom out</span>
            <Minus />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Zoom Out</p>
        </TooltipContent>
      </Tooltip>
      <SliderZoom className={"w-30"} />
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={"ghost"}
            type="button"
            size={"sm"}
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
            onClick={(e) => {
              e.preventDefault();
              startZooming("in");
              stopZooming();
            }}
          >
            <span className="sr-only">zoom in</span>
            <Plus />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Zoom In</p>
        </TooltipContent>
      </Tooltip>
      {isHidePercent ? null : (
        <div className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}>
          {zoom}%
        </div>
      )}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={"ghost"}
            type="button"
            size={"sm"}
            onClick={resetZoom}
          >
            <RotateCcw />
            <span className="sr-only">Reset</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Reset Zoom</p>
        </TooltipContent>
      </Tooltip>
    </>
  );
};

export default ZoomSliderAndButtons;
