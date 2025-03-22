import { createContext, useContext, useState } from "react";

// Define the context type
type ZoomContextType = {
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
};

// Create Context with a default empty function to avoid undefined errors
export const ZoomContext = createContext<ZoomContextType>({
  zoom: 100,
  setZoom: () => {}, // Default no-op function
});

export function useZoom() {
  const context = useContext(ZoomContext);
  if (!context) {
    throw new Error("useZoom must be used within a ZoomProvider");
  }
  return context;
}

export function ZoomProvider({ children }: { children: React.ReactNode }) {
  const [zoom, setZoom] = useState(100);
  return (
    <ZoomContext.Provider value={{ zoom, setZoom }}>
      {children}
    </ZoomContext.Provider>
  );
}
