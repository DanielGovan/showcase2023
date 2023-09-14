// import styled from "styled-components";

import { ChildrenProps } from "./MainWrap";

// const StyledColumnWrap = styled.div`
//   @media screen and (min-width: 1000px) {
//     column-count: 2;
//     column-width: 200px;
//     margin-bottom: 2rem;
//   }
//   @media print {
//     column-count: 2;
//     column-width: 200px;
//   }
// `;

const ColumnWrap = ({ children }: ChildrenProps) => {
  return <div>{children}</div>;
};

export default ColumnWrap;
