import { useControls } from "react-zoom-pan-pinch";
import { Slider } from "../../../ui/slider";
import { useZoom } from "../../../../context/zoom";
import { cn } from "../../../../lib/utils";

const SliderZoom = ({ className }: { className?: string }) => {
  const { instance, setTransform } = useControls();
  const { zoom, setZoom } = useZoom();

  return (
    <Slider
      className={cn("w-full", className)}
      value={[zoom]}
      min={0}
      max={300}
      step={1}
      onValueChange={(value) => {
        setZoom(value[0]);
        const state = instance.transformState;
        let newScale = value[0] / 100;

        newScale = Math.max(0.5, Math.min(3, newScale)); // Limit zoom range (50% - 300%)
        setTransform(state.positionX, state.positionY, newScale);
      }}
      showSliderThumb={false}
    />
  );
};

export default SliderZoom;
