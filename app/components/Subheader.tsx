// import styled from "styled-components";

import { ChildrenProps } from "./MainWrap";

// const StyledSubheader = styled.h3`
//   font-size: 1.3rem;
//   color: #a4000e;
//   font-family: "Ubuntu", sans-serif;
//   margin: 0 0 0.4rem 0;

//   @media print {
//     font-size: 1rem;
//     margin: 0;
//   }

//   .dateText {
//     display: block;
//     font-size: 0.78em;
//     opacity: 0.7;
//     color: #111;
//     line-height: 1;

//     @media print {
//       font-size: 0.78em;
//     }
//   }
// `;

const Subheader = ({ children }: ChildrenProps) => {
  return <h3>{children}</h3>;
};

export default Subheader;
