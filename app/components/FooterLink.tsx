// const StyledLink = styled.div`
//   font-family: "Ubuntu", sans-serif;
//   padding: 0;
//   margin: 0 0.5rem 0 0;
//   display: inline-block;
//   a {
//     color: #a4000e;
//     border: none !important;
//     text-decoration: none;
//     margin-right: 10px;
//     &:hover {
//       text-decoration: underline;
//     }
//   }

import { ChildrenProps } from "./MainWrap";

//   svg {
//     position: relative;
//     bottom: -0.2rem;
//     margin-right: 0.5rem;
//   }

//   @media print {
//     &.noprint {
//       display: none;
//     }

//     font-size: 0.8rem;
//     margin: 0;
//     padding: 0;
//     content: " ";

//     &[data-print]:after {
//       content: " " attr(data-print) " ";
//       font-family: monospace;
//       margin-right: 10px;
//     }

//     a {
//       margin: 0;
//       padding: 0;
//     }
//   }
// `;

interface PlaceProps extends ChildrenProps {
  print: string;
  href: string;
  flag?: string;
}

const FooterLink = ({ print, href, children, flag }: PlaceProps) => {
  return (
    <div className={flag} data-print={print}>
      <a target="_blank" rel="noreferrer" href={href}>
        {children}
      </a>
    </div>
  );
};

export default FooterLink;
