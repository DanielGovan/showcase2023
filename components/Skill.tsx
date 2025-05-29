import { WithChildren } from "@app/types";
import Para from "./Para";
import Subheader from "./Subheader";

type SkillProps = WithChildren<{ title: string }>;

const Skill = ({ title, children }: SkillProps) => {
  return (
    <div className="break-inside-avoid print:leading-4 mb-4 print:mb-2">
      <Subheader>{title}</Subheader>
      <Para>{children}</Para>
    </div>
  );
};

export default Skill;
