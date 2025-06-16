import { WithChildren } from "@app/types";

export const Ul = ({ children }: WithChildren) => {
  return <ul className=" [&:marker]text-red-800 list-disc pl-5">{children}</ul>;
};

export const Li = ({ children }: WithChildren) => {
  return (
    <li className="marker:text-red-800 text-lg print:text-sm print:leading-4 mb-2 print:mb-2">
      {children}
    </li>
  );
};
