import Layout from "@app/layout";

import HeaderArea from "@components/HeaderArea";
import MainWrap from "@components/MainWrap";
import SummaryPerm from "@copy/SummaryPerm";
import SkillsFull from "@copy/SkillsFull";
import ExperiencePermEra from "@copy/ExperiencePermEra";
import ExperienceContractBrief from "@copy/ExperienceContractBrief";
import ExperienceARecent from "@copy/ExperienceARecent";
import InfoSection from "@copy/InfoSection";

// CV aimed towards perm work

export default async function PermCV() {
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
            <InfoSection />
          </section>
        </div>
      </MainWrap>
    </Layout>
  );
}
