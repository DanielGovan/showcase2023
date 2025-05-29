import AppendixItem from "@components/AppendixItem";
import SectionHeader from "../components/SectionHeader";

const AtAGlance = () => {
  return (
    <div className="flex-1/4 print:flex-1/4">
      <SectionHeader>At a glance</SectionHeader>
      <ul className="list-none flex flex-col gap-1">
        <AppendixItem title="HTML/CSS" content="19 years" />
        <AppendixItem title="JavaScript" content="12 years" />
        <AppendixItem title="Design systems" content="10 years" />
        <AppendixItem title="React" content="6 years" />
        <AppendixItem title="Storybook" content="6 years" />
        <AppendixItem title="TypeScript" content="4 years" />
        <AppendixItem title="NextJS" content="4 years" />
      </ul>
    </div>
  );
};

export default AtAGlance;
