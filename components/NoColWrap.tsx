import { WithChildren } from "@app/types";

const NoColWrap = ({ children }: WithChildren) => {
  return <div className="break-inside-avoid-column">{children}</div>;
};

export default NoColWrap;
