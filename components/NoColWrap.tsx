import React from "react";
import { ChildrenProps } from "./MainWrap";

const NoColWrap = ({ children }: ChildrenProps) => {
  return <div className="break-inside-avoid-column">{children}</div>;
};

export default NoColWrap;
