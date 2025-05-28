import { ChildrenProps } from "./MainWrap";

const ColumnWrap = ({ children }: ChildrenProps) => {
  return <div className="md:columns-2 print:columns-2">{children}</div>;
};

export default ColumnWrap;
