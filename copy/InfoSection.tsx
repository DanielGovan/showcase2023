import AppendixItem from "../components/AppendixItem";
import SectionHeader from "../components/SectionHeader";

const InfoSection = () => (
  <>
    <SectionHeader>Info</SectionHeader>
    <ul className="list-none flex flex-col gap-6 print:gap-2 print:flex-wrap print:flex-row">
      <AppendixItem
        title="Education"
        content="2004 Warwick University, BEng in Mechanical Engineering "
      />
      <AppendixItem title="Location" content="Poplar, London" />
      <AppendixItem
        title="Website"
        content="dangovan.com"
        href="https://dangovan.com"
      />
      <AppendixItem
        title="Email"
        content="dangovan@proton.me"
        href="mailto:dangovan@proton.me"
      />
      <AppendixItem
        title="LinkedIn"
        content="linkedin.com/in/dangovan"
        href="https://www.linkedin.com/in/dangovan/"
      />
      {/* <AppendixItem
                title="Github"
                content="github.com/danielgovan"
                href="https://github.com/danielgovan/"
              /> */}
    </ul>
  </>
);

export default InfoSection;
