import { ChildrenProps } from "./MainWrap";

const Para = ({ children }: ChildrenProps) => {
  return <p className="text-lg print:text-sm mb-4 print:mb-2">{children}</p>;
};

export default Para;
