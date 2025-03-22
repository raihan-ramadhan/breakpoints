import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";
import { cn } from "../lib/utils";
import { Search, SearchX } from "lucide-react";

const Navbar = ({
  handleSubmit,
  url,
  setUrl,
  submittedUrl,
  setSubmittedUrl,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  url: string;
  submittedUrl: string;
  setSubmittedUrl: React.Dispatch<React.SetStateAction<string>>;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "px-4 z-50 transition-[top,background,backdrop-filter,box-shadow] duration-400 h-(--navbar-height) flex-1 flex items-center w-full",
        isSticky
          ? "sticky top-0 bg-background/50 backdrop-blur-sm shadow-md fade-in animate-in"
          : "bg-transparent"
      )}
    >
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-[auto_auto_1fr_auto] gap-2 items-center w-full"
      >
        <SidebarTrigger type="button" />
        <Separator orientation="vertical" className="!h-8" />
        <Input
          type="url"
          id="url"
          placeholder="Enter preview URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />

        {!!submittedUrl && submittedUrl === url ? (
          <Button
            type="button"
            onClick={() => {
              setUrl("");
              setSubmittedUrl("");
            }}
          >
            <span className="sr-only">Delete Submitted URL</span>
            <SearchX className="animate-in fade-in duration-150" />
          </Button>
        ) : (
          <Button type="submit">
            <span className="hidden sm:block">Preview URL</span>
            <Search className="sm:hidden animate-in fade-in duration-150" />
            <span className="sr-only">Preview URL</span>
          </Button>
        )}
      </form>
    </header>
  );
};

export default Navbar;
