import { ChildrenProps } from "./MainWrap";

interface PlaceProps extends ChildrenProps {
  print: string;
  href: string;
  noprint?: boolean;
}

const FooterLink = ({ print, href, children, noprint }: PlaceProps) => {
  return (
    <div className={`${noprint ? "print:hidden" : ""} `} data-print={print}>
      <a
        target="_blank"
        rel="noreferrer"
        href={href}
        className="flex items-center pr-4"
      >
        {children}
      </a>
    </div>
  );
};

export default FooterLink;
