import { Copyright, Mail } from "lucide-react";
import { Children, ReactElement, cloneElement, isValidElement } from "react";
import { cn } from "../lib/utils";

interface IconLinkProps {
  children:
    | ReactElement<{ className?: string }>
    | ReactElement<{ className?: string }>[];
  href: string;
  className?: string;
  ariaLabel: string;
}

const IconLink = ({ href, children, className, ariaLabel }: IconLinkProps) => {
  const childrenWithClassName = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        className: cn(
          "fill-foreground",
          child.props.className,
          child.type === "svg" && "size-[1.4rem]"
        ),
      });
    }
    return child;
  });
  return (
    <a
      aria-label={ariaLabel}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {childrenWithClassName}
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="px-4 py-6 flex flex-col [@media(min-width:920px)]:flex-row justify-end gap-x-3 gap-y-2 border-t border-border">
      <span className="inline-flex items-center gap-1 justify-center">
        <Copyright className="size-[1rem]" />
        <span className="text-base">2025 Breakpoints</span>
      </span>
      <div className="flex flex-1 justify-between flex-col gap-y-2  [@media(min-width:920px)]:flex-row items-center">
        <div className="flex items-center gap-1.5">
          <IconLink
            href="https://github.com/raihan-ramadhan"
            ariaLabel="Go to my Github Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 24 24"
            >
              <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
            </svg>
          </IconLink>
          <IconLink
            href="https://www.linkedin.com/in/raihan-ramadhan-baab69227/"
            ariaLabel="Go to my Linkedin Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 30 30"
            >
              <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
            </svg>
          </IconLink>
          <IconLink
            href={"mailto:raihanramadhan.rn22@gmail.com"}
            ariaLabel="Send me a mail"
          >
            <Mail className="fill-transparent p-0.5" />
          </IconLink>
        </div>
        <div className="flex items-center gap-2 flex-col [@media(min-width:920px)]:flex-row">
          <IconLink
            ariaLabel="Buy me a coffee"
            href="https://ko-fi.com/raihan_rn22"
            className="inline-flex items-center gap-1 bg-secondary hover:text-foreground transition-colors duration-200 py-1.5 px-3 rounded-sm group/ko-fi  whitespace-nowrap"
          >
            <svg
              className="translate-y-[1.5px]"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <path
                className="fill-secondary-foreground/50 group-hover/ko-fi:fill-[#29b6f6] transition-[fill] duration-200"
                d="M24,44C12.972,44,4,35.028,4,24S12.972,4,24,4s20,8.972,20,20S35.028,44,24,44z"
              />
              <path
                fill="#fff"
                d="M32.227,15L13,15c-1.105,0-2,0.895-2,2v13c0,1.657,1.343,3,3,3h14c1.657,0,3-1.343,3-3v-2h1.5	c3.656,0,6.607-3.019,6.497-6.7C38.89,17.743,35.787,15,32.227,15z M32.5,24.5H31v-6h1.5c1.657,0,3,1.343,3,3v0	C35.5,23.157,34.157,24.5,32.5,24.5z"
              />
              <path
                className="fill-secondary-foreground/50 dark:fill-background/50 group-hover/ko-fi:fill-[#ef5350] transition-[fill] duration-200"
                d="M23.538,19c-1.084,0-2.022,0.605-2.538,1.498C20.484,19.605,19.546,19,18.462,19	c-1.636,0-2.962,1.363-2.962,3.043C15.5,25.522,21,29,21,29s5.5-3.478,5.5-6.957C26.5,20.363,25.174,19,23.538,19z"
              />
            </svg>
            <span className="text-sm shrink-0 w-fit inline-block">
              Buy me a coffee
            </span>
          </IconLink>
          <div className="flex items-center gap-1 text-sm [@media(min-width:920px)]:text-base">
            <span>Built with</span>
            <svg
              className="size-[1.1rem]"
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 1063 1000"
            >
              <path
                fill="currentColor"
                d="M775 1q126 0 207 80t81 207v60q0 285-532 653Q0 634 0 348v-60Q0 161 80.5 81T287 1q81 0 134 30.5T531 130q58-68 111-98.5T775 1z"
              />
            </svg>
            <span>by Raihan.R</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
