// const StyledMainWrap = styled.div`
//   max-width: 1200px;
//   font-size: 1.4rem;
//   font-family: "Lora", serif;
//   margin: 0 auto;
//   line-height: 1.2;
//   color: #333;
//   background: #fff;
//   padding: 1rem;

//   @media print {
//     @page {
//       margin: 0.5cm;
//     }
//   }
// `;

export type ChildrenProps = { children: React.ReactNode };

const MainWrap = ({ children }: ChildrenProps) => {
  return <div>{children}</div>;
};

export default MainWrap;
