import Layout from "@app/layout";

import HeaderArea from "@components/HeaderArea";
import MainWrap from "@components/MainWrap";
import ExperiencePermEra from "@copy/ExperiencePermEra";
import ExperienceARecent from "@copy/ExperienceARecent";
import ExperienceContract from "@copy/ExperienceContract";

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
            <ExperienceContract />
            <ExperiencePermEra />
          </section>
        </div>
      </MainWrap>
    </Layout>
  );
}
