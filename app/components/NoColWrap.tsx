import React from "react";
import { ChildrenProps } from "./MainWrap";

// const StyledNoColWrap = styled.div`
//   --webkit-column-break-inside: avoid;
//   break-inside: avoid;
// `;

const NoColWrap = ({ children }: ChildrenProps) => {
  return <div>{children}</div>;
};

export default NoColWrap;
