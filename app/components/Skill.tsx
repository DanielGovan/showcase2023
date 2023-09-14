import { ChildrenProps } from "./MainWrap";
import Para from "./Para";
import Subheader from "./Subheader";

// const StyledSkill = styled.div`
//   --webkit-column-break-inside: avoid;
//   break-inside: avoid;
//   h3 {
//     margin: 0;
//   }
//   @media print {
//     margin-top: 0.4rem;
//     h3 {
//       margin-right: 0.2rem;
//       /* display: inline; */
//       line-height: 1;
//     }
//   }
// `;

interface SkillProps extends ChildrenProps {
  title: string;
}

const Skill = ({ title, children }: SkillProps) => {
  return (
    <div>
      <Subheader>{title}</Subheader>
      <Para>{children}</Para>
    </div>
  );
};

export default Skill;
