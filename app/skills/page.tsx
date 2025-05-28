import Layout from "../layout";

import HeaderArea from "../../components/HeaderArea";
import MainWrap from "../../components/MainWrap";
import SkillsFull from "../../copy/SkillsFull";

export default function Home() {
  return (
    <Layout>
      <MainWrap>
        <HeaderArea
          header="Dan Govan"
          intro="Senior Front-End / JavaScript Developer with 20 years of experience crafting intuitive, user-focused interfaces and guiding teams toward scalable, modern front-end solutions."
        />
        Skills page. This is a full list of skills, technologies, and tools,
        with how long I&#39;ve used them.
        <section>
          <SkillsFull />
        </section>
      </MainWrap>
    </Layout>
  );
}
