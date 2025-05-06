import Layout from "../layout";

import HeaderArea from "../components/HeaderArea";
import SectionHeader from "../components/SectionHeader";
import MainWrap from "../components/MainWrap";
import AppendixItem from "../components/AppendixItem";
import SummaryPerm from "../copy/SummaryPerm";
import SkillsFull from "../copy/SkillsFull";
import ExperiencePermEra from "../copy/ExperiencePermEra";
import ExperienceContractBrief from "../copy/ExperienceContractBrief";
import ExperienceARecent from "../copy/ExperienceARecent";

// CV aimed towards perm work

export default function Home() {
  return (
    <Layout>
      <MainWrap>
        <HeaderArea
          header="Dan Govan"
          intro="Senior Front-End / JavaScript Developer with 20 years of experience crafting intuitive, user-focused interfaces and guiding teams toward scalable, modern front-end solutions."
        />
        <section>
          <SummaryPerm />
        </section>
        <section>
          <SkillsFull />
        </section>
        <div className="md:flex print:block gap-12">
          <section>
            <ExperienceARecent />
            <ExperienceContractBrief />
            <ExperiencePermEra />
          </section>

          <section>
            <SectionHeader>Info</SectionHeader>
            <ul>
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
              <AppendixItem
                title="Github"
                content="github.com/danielgovan"
                href="https://github.com/danielgovan/"
              />
            </ul>
          </section>
        </div>
      </MainWrap>
    </Layout>
  );
}
