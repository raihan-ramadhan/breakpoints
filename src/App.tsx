import { AppSidebar } from "./components/Sidebar/app-sidebar";
import { useEffect, useState, useTransition } from "react";
import { CheckedScreens } from "./types/screens";
import { MonitorSmartphone } from "lucide-react";
import Screen from "./components/Screen/Screen";
import { ZoomProvider } from "./context/zoom";
import Footer from "./components/Footer";
import { screens } from "./data/screens";
import Navbar from "./components/Navbar";

function App() {
  const [url, setUrl] = useState("");
  const [submittedUrl, setSubmittedUrl] = useState("");

  useEffect(() => {
    const storedUrl = localStorage.getItem("submittedUrl") || "";
    setUrl(storedUrl);
    setSubmittedUrl(storedUrl);
  }, []);

  useEffect(() => {
    localStorage.setItem("submittedUrl", submittedUrl);
  }, [submittedUrl]);

  const [error, setError] = useState("");
  const [transition, setTransition] = useTransition();

  async function checkWebsite(url: string) {
    try {
      await fetch(url, { method: "HEAD" });
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error(`Website does not exist or CORS issue`);
      }
      throw new Error(`Unknown error`);
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTransition(async () => {
      try {
        setError("");
        await checkWebsite(url);
        setSubmittedUrl(url);
      } catch (error: unknown) {
        const errorMsg =
          error instanceof Error ? error.message : "Something went wrong";
        console.error(errorMsg);
        setError(errorMsg);
        setSubmittedUrl("");
      }
    });
  };

  const [checkedScreens, setCheckedScreens] = useState<CheckedScreens>(() => {
    const savedData = localStorage.getItem("checkedScreens");
    return savedData ? JSON.parse(savedData) : {};
  });

  useEffect(() => {
    localStorage.setItem("checkedScreens", JSON.stringify(checkedScreens));
  }, [checkedScreens]);

  return (
    <>
      <AppSidebar
        screens={screens}
        checkedScreens={checkedScreens}
        setCheckedScreens={setCheckedScreens}
      />
      <div
        className="relative w-full"
        style={
          {
            "--navbar-height": "60px",
          } as React.CSSProperties
        }
      >
        <Navbar
          handleSubmit={handleSubmit}
          setUrl={setUrl}
          url={url}
          submittedUrl={submittedUrl}
          setSubmittedUrl={setSubmittedUrl}
        />
        <main className="flex flex-col gap-5 py-5 px-4 overflow-hidden flex-1 min-h-[calc(100dvh-var(--navbar-height))]">
          {Object.keys(checkedScreens).length > 0 ? (
            Object.values(checkedScreens).map((screen) => (
              <ZoomProvider key={screen.id}>
                <Screen
                  setCheckedScreens={setCheckedScreens}
                  screen={screen}
                  url={submittedUrl}
                  error={error}
                  isLoading={transition}
                />
              </ZoomProvider>
            ))
          ) : (
            <div className="flex w-full flex-1 justify-center items-center flex-col">
              <div className="bg-secondary rounded-full size-30 flex justify-center items-center mb-3">
                <MonitorSmartphone className="size-8" />
              </div>
              <span className="text-2xl font-medium">Select a screen</span>
              <span className="text-center">
                <span>Choose a screen from sidebar</span>
                <br />
                <span>to preview</span>
              </span>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
