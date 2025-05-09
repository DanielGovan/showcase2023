import { ChildrenProps } from "./MainWrap";

export const Ul = ({ children }: ChildrenProps) => {
  return <ul className=" [&:marker]text-red-800 list-disc pl-5">{children}</ul>;
};

export const Li = ({ children }: ChildrenProps) => {
  return (
    <li className="marker:text-red-800 text-lg print:text-sm print:leading-5 mb-2 print:mb-2">
      {children}
    </li>
  );
};
