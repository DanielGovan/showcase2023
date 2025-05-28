import Layout from "../layout";

import HeaderArea from "../../components/HeaderArea";
import MainWrap from "../../components/MainWrap";
import SummaryPerm from "../../copy/SummaryPerm";
import SkillsFull from "../../copy/SkillsFull";
import ExperiencePermEra from "../../copy/ExperiencePermEra";
import ExperienceContractBrief from "../../copy/ExperienceContractBrief";
import ExperienceARecent from "../../copy/ExperienceARecent";
import InfoSection from "../../copy/InfoSection";

export default function Home() {
  return (
    <Layout>
      <MainWrap>
        <HeaderArea
          header="Dan Govan"
          intro="Senior Front-End / JavaScript Developer with 20 years of experience crafting intuitive, user-focused interfaces and guiding teams toward scalable, modern front-end solutions."
        />
        Opportuity for tone and nift. Jobs, line, notes?
        <div className="md:flex print:block gap-12">
          <section>
            <ExperienceARecent />
            <ExperienceContractBrief />
            <ExperiencePermEra />
          </section>
        </div>
      </MainWrap>
    </Layout>
  );
}
