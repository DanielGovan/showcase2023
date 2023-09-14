// const StyledSectionHeader = styled.h2`
//   font-family: "Ubuntu", sans-serif;
//   font-weight: 700;
//   font-size: 2rem;
//   color: #888;
//   letter-spacing: 2px;
//   margin: 2rem 0 1rem;
//   text-align:

import { ChildrenProps } from "./MainWrap";

//   &:nth-child(1) {
//     margin: 0rem 0 0;
//   }

//   @media print {
//     letter-spacing: normal !important;
//     font-size: 1.5rem !important;
//     margin: 1rem 0 0rem;
//   }
// `;

const SectionHeader = ({ children }: ChildrenProps) => {
  return <h2>{children}</h2>;
};

export default SectionHeader;
