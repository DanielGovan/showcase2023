// const StyledPara = styled.p`
//   font-size: 1.2rem;
//   line-height: 1.3;
//   padding: 0;
//   margin: 0.5rem 0 1rem 0.5rem;

import { ChildrenProps } from "./MainWrap";

//   @media print {
//     font-size: 0.95rem !important;
//     line-height: 1.1 !important;
//     margin: 0.4rem 0 0.4rem 0 !important;
//   }
// `;

const Para = ({ children }: ChildrenProps) => {
  return <p>{children}</p>;
};

export default Para;
