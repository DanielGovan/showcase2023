import { ChildrenProps } from "./MainWrap";
import Subheader from "./Subheader";

interface ExperienceProps extends ChildrenProps {
  company: string;
  companyType: string;
  title: string;
  dates: string;
  duration?: string;
  location: string;
  locationType: "On-site" | "Remote" | "Hybrid";
  employmentType: "Full-time" | "Contract" | "Part-time";
}

// Company type? egs:
// In-house product team in a multinational company
// Agency project team

// Dates and duration?
// Eg 6 months contract, renewed twice
// 2 years perm
// 1 year part time

const Company = ({ children }: ChildrenProps) => (
  <h4 className="text-2xl print:text-xl font-semibold opacity-70 block font-sans m-0 leading-5 print:leading-4">
    {children}
  </h4>
);

const Dates = ({ children }: ChildrenProps) => (
  <h4 className="text-base font-semibold opacity-50 block mb-1 font-sans leading-5">
    {children}
  </h4>
);

const SubInfo = ({ children }: ChildrenProps) => (
  <h5 className="hidden text-sm opacity-70 text-gray-900">{children}</h5>
);

const Experience = ({
  title,
  company,
  companyType,
  employmentType,
  dates,
  duration,
  children,
  location,
  locationType,
}: ExperienceProps) => {
  return (
    <div className="mb-6 print:mb-2 break-inside-avoid flex gap-4">
      <div className="basis-1/5 print:basis-1/3">
        <Subheader>{title}</Subheader>
        <Company>{company}</Company>
        <SubInfo>{companyType}</SubInfo>
        <SubInfo>
          {location}, {locationType}
        </SubInfo>
        <Dates>{dates}</Dates>
        <SubInfo>{duration || employmentType}</SubInfo>
      </div>
      <div className="basis-4/5 print:basis-2/3">{children}</div>
    </div>
  );
};

export default Experience;
