import { useMemo } from "react";
import { ScreenItem } from "../../types/screens";
import { Globe, Loader } from "lucide-react";
import { TransformComponent } from "react-zoom-pan-pinch";
import { cn } from "../../lib/utils";

const ScreenContent = ({
  parentWidth,
  contentRef,
  currentSize,
  isLoading,
  error,
  url,
  isDrag,
  widePercentageDifference,
}: {
  parentWidth: number | null;
  contentRef: React.RefObject<HTMLDivElement | null>;
  size: ScreenItem["size"];
  url: string;
  error: string;
  isLoading: boolean;
  isDrag: boolean;
  currentSize: { w: number; h: number };
  widePercentageDifference: number | null;
}) => {
  const transformValue = useMemo(() => {
    if (!parentWidth || currentSize.w < parentWidth) return 1;
    return !widePercentageDifference || widePercentageDifference < 0
      ? 100
      : (100 - widePercentageDifference) / 100;
  }, [widePercentageDifference, parentWidth]);

  const getCurrDimension = (originalValue: number, percent: number) =>
    originalValue - originalValue * (percent / 100);

  const heightParent = useMemo(() => {
    if (
      !parentWidth ||
      currentSize.w < parentWidth ||
      !widePercentageDifference
    ) {
      return currentSize.h;
    }

    return getCurrDimension(currentSize.h, widePercentageDifference);
  }, [widePercentageDifference, parentWidth]);

  return (
    <TransformComponent contentClass="!w-full" wrapperClass="!w-full">
      <div
        ref={contentRef}
        className="w-full flex relative"
        style={{
          height: heightParent,
        }}
      >
        <div className="size-full absolute inset-0">
          {isLoading ? (
            <div className="size-full flex justify-center items-center">
              <Loader className="animate-spin" />
            </div>
          ) : !!url ? (
            <>
              {/* IFRAME OVERLAY FOR ZOOM IN/OUT */}
              {isDrag ? <div className="z-10 relative size-full" /> : null}

              <iframe
                loading="lazy"
                title={`${url} in ${currentSize.w} x ${currentSize.h}`}
                className={cn(
                  "absolute -z-0 top-0",
                  parentWidth && parentWidth > currentSize.w
                    ? "-translate-x-1/2 left-1/2"
                    : "left-0"
                )}
                src={url}
                width={currentSize.w}
                height={currentSize.h}
                style={{
                  transform: `scale(${transformValue - 0.0009})`,
                  transformOrigin: "left top",
                }}
              />
            </>
          ) : (
            <div className="flex items-center justify-center w-full h-full text-gray-400">
              {!!error ? (
                <span className="text-destructive">{error}</span>
              ) : (
                <span className="inline-flex gap-1.5 items-center">
                  <Globe />
                  <span>Enter preview URL</span>
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </TransformComponent>
  );
};

export default ScreenContent;
