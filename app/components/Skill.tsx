import { ChildrenProps } from "./MainWrap";
import Para from "./Para";
import Subheader from "./Subheader";

interface SkillProps extends ChildrenProps {
  title: string;
}

const Skill = ({ title, children }: SkillProps) => {
  return (
    <div className="break-inside-avoid print:leading-4 mb-4 print:mb-2">
      <Subheader>{title}</Subheader>
      <Para>{children}</Para>
    </div>
  );
};

export default Skill;
