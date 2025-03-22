import { useEffect, useMemo, useRef, useState } from "react";
import { CheckedScreens } from "../../types/screens";
import ScreenNav from "./ScreenNav/ScreenNav";
import ScreenContent from "./ScreenContent";
import { Orientation } from "../../types/global";
import { TransformWrapper } from "react-zoom-pan-pinch";
import { useZoom } from "../../context/zoom";

const Screen = ({
  url,
  error,
  screen,
  isLoading,
  setCheckedScreens,
}: {
  url: string;
  error: string;
  isLoading: boolean;
  screen: CheckedScreens[string];
  setCheckedScreens: React.Dispatch<React.SetStateAction<CheckedScreens>>;
}) => {
  const { name, size, icon } = screen;

  const [orientation, setOrientation] = useState<Orientation>("potrait");
  const [parentWidth, setParentWidth] = useState<number | null>(null);
  const [isDrag, setIsDrag] = useState<boolean>(false);

  const contentRef = useRef<HTMLDivElement | null>(null);
  const transformRef = useRef(null);

  const { setZoom, zoom } = useZoom();

  const toggleIsDrag = () => setIsDrag((prev) => !prev);

  const toggleOrientation = () => {
    setOrientation((prev) => (prev === "landscape" ? "potrait" : "landscape"));
  };

  const removeScreen = () => {
    setCheckedScreens((prev) => {
      const newCheckedScreens = { ...prev };
      delete newCheckedScreens[screen.id];
      return newCheckedScreens;
    });
  };

  const resetZoom = () => {
    if (transformRef.current) {
      const instance = transformRef.current as any;
      instance.resetTransform();
    }
  };

  const currentSize = {
    w: size[orientation === "landscape" ? "h" : "w"],
    h: size[orientation === "landscape" ? "w" : "h"],
  };

  const widePercentageDifference: number | null = useMemo(() => {
    if (!parentWidth) return null;

    return parseFloat(
      (((currentSize.w - parentWidth) / currentSize.w) * 100).toFixed(2)
    );
  }, [parentWidth, currentSize.w]);

  const getCurrDimensionZoomed = (currSize: number) => {
    if (!widePercentageDifference) return "error";

    const currDimensionsZoomed = (dimension: number) =>
      parseFloat(((dimension * zoom) / 100).toFixed(2));

    if (!parentWidth || currentSize.w < parentWidth)
      return currDimensionsZoomed(currSize);

    const currDimensions =
      currSize - currSize * (widePercentageDifference / 100);

    return currDimensionsZoomed(currDimensions);
  };

  const currDimensions = useMemo(
    () => ({
      w: getCurrDimensionZoomed(currentSize.w),
      h: getCurrDimensionZoomed(currentSize.h),
    }),
    [zoom, currentSize]
  );

  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new ResizeObserver(() => {
      if (contentRef.current) {
        const contentRefWidth =
          contentRef.current.getBoundingClientRect().width;
        setParentWidth(parseFloat(contentRefWidth.toFixed(2)));
      }
    });
    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <TransformWrapper
      ref={transformRef}
      disabled={!isDrag}
      minScale={0.5}
      maxScale={3}
      onTransformed={(ref) => {
        setZoom(Math.round(ref.state.scale * 100));
      }}
    >
      <div
        key={name}
        className="flex flex-col justify-center border border-border rounded-2xl w-full overflow-hidden bg-foreground/10"
      >
        <ScreenNav
          toggleOrientation={toggleOrientation}
          currDimensions={currDimensions}
          removeScreen={removeScreen}
          toggleIsDrag={toggleIsDrag}
          currentSize={currentSize}
          orientation={orientation}
          resetZoom={resetZoom}
          isDrag={isDrag}
          icon={icon}
          name={name}
        />

        <ScreenContent
          widePercentageDifference={widePercentageDifference}
          parentWidth={parentWidth}
          currentSize={currentSize}
          contentRef={contentRef}
          isLoading={isLoading}
          isDrag={isDrag}
          error={error}
          size={size}
          url={url}
        />
      </div>
    </TransformWrapper>
  );
};

export default Screen;
