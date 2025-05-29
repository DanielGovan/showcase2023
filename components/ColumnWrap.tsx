import { WithChildren } from "@app/types";

const ColumnWrap = ({ children }: WithChildren) => {
  return <div className="md:columns-2 print:columns-2">{children}</div>;
};

export default ColumnWrap;
