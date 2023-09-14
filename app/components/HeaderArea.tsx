// const StyledHeaderArea = styled.div`
//   font-weight: 300;
//   overflow: hidden;
//   display: grid;
//   color: #a4000e;
//   font-family: "Ubuntu", sans-serif;
//   margin: 0 0 20px 0;

//   @media screen and (min-width: 1000px) {
//     grid-template-columns: 1fr 1.2fr;
//   }
//   @media print {
//     grid-template-columns: 1fr 1.2fr;
//   }
// `;

// const StyledHeader = styled.h1`
//   font-weight: 300;
//   font-size: 6rem;
//   text-shadow: 1px 1px 1px #710013;
//   letter-spacing: -1px;
//   margin: 0;
//   line-height: 0.8;

//   @media print {
//     text-shadow: none !important;
//     font-size: 4rem !important;
//     line-height: 1 !important;
//     padding: 0 !important;
//   }
// `;

// const StyledIntro = styled.p`
//   font-weight: 300;
//   font-size: 1.5rem;
//   margin: 0;

//   @media print {
//     margin-top: 10px;
//     text-shadow: none !important;
//     font-size: 1.1rem !important;
//     line-height: 1 !important;
//     padding: 0 !important;
//   }
// `;

type HeaderAreaProps = {
  header: string;
  intro: string;
};

const HeaderArea = ({ header, intro }: HeaderAreaProps) => {
  return (
    <div>
      <h1>{header}</h1>
      <p>{intro}</p>
    </div>
  );
};

export default HeaderArea;
