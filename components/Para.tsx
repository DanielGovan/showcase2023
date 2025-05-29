import { WithChildren } from "@app/types";

const Para = ({ children }: WithChildren) => {
  return (
    <p className="text-lg print:text-sm print:leading-5 mb-2 print:mb-2">
      {children}
    </p>
  );
};

export default Para;
