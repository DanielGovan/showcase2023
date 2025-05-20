import Layout from "./layout";

import HeaderArea from "./components/HeaderArea";
import MainWrap from "./components/MainWrap";
import SkillsFull from "./copy/SkillsFull";
import ExperienceContract from "./copy/ExperienceContract";
import SummaryContract from "./copy/SummaryContract";
import ExperienceARecent from "./copy/ExperienceARecent";
import ExperiencePermEra from "./copy/ExperiencePermEra";
import InfoSection from "./copy/InfoSection";

// CV aimed towards contract work

export default function Home() {
  return (
    <Layout>
      <MainWrap>
        <HeaderArea
          header="Dan Govan"
          intro="Senior Front-End / JavaScript Developer with 20 years of experience crafting intuitive, user-focused interfaces and guiding teams toward scalable, modern front-end solutions."
        />
        <section>
          <SummaryContract />
        </section>
        <section>
          <SkillsFull />
        </section>
        <div className="md:flex print:block gap-12">
          <section>
            <ExperienceARecent />
            <ExperienceContract />
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
