import { WithChildren } from "@app/types";
import Subheader from "./Subheader";

type repeatRole = { place?: string; date: string; blurb: React.ReactNode };

type ExperienceProps = WithChildren<{
  company: string;
  companyType: string;
  title: string;
  dates: string;
  duration?: string;
  location: string;
  locationType: "On-site" | "Remote" | "Hybrid";
  employmentType: "Full-time" | "Contract" | "Part-time";
  repeatRoles?: repeatRole[];
}>;

// Company type? egs:
// In-house product team in a multinational company
// Agency project team

// Dates and duration?
// Eg 6 months contract, renewed twice
// 2 years perm
// 1 year part time

const Company = ({ children }: WithChildren) => (
  <h4 className="text-2xl print:text-xl font-bold text-gray-700 block font-sans m-0 leading-5 print:leading-4">
    {children}
  </h4>
);

const Dates = ({ children }: WithChildren) => (
  <h4 className="text-base font-bold text-gray-400 block mb-1 font-sans leading-5 print:text-sm">
    {children}
  </h4>
);

const SubInfo = ({ children }: WithChildren) => (
  <h5 className="hidden text-sm opacity-70 text-gray-900">{children}</h5>
);

const Place = ({
  title,
  company,
  companyType,
  employmentType,
  dates,
  duration,
  children,
  location,
  locationType,
  repeatRoles,
}: ExperienceProps) => {
  // const moreDates = dates.slice(1);
  return (
    <div className="flex flex-col mb-6 print:mb-2 gap-1">
      <div className="flex gap-4">
        <div className="basis-1/5 print:basis-1/4">
          <Subheader>{title}</Subheader>
          <Company>{company}</Company>
          <SubInfo>{companyType}</SubInfo>
          <SubInfo>
            {location}, {locationType}
          </SubInfo>
          <Dates>{dates}</Dates>
          <SubInfo>{duration || employmentType}</SubInfo>
        </div>
        <div className="basis-4/5 print:basis-3/4">{children}</div>
      </div>
      {repeatRoles ? (
        <>
          {repeatRoles.map((item, i) => (
            <div className="flex gap-4" key={i}>
              <div className="basis-1/5 print:basis-1/4 mt-1">
                {item.place ? <Company>{item.place}</Company> : <></>}
                <Dates>{item.date}</Dates>
              </div>
              <div className="basis-4/5 print:basis-3/4">
                <div>{item.blurb}</div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Place;
