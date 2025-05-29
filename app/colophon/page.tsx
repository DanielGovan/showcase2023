import Layout from "@app/layout";

import HeaderArea from "@components/HeaderArea";
import MainWrap from "@components/MainWrap";
import SkillsFull from "@copy/SkillsFull";

export default function Home() {
  return (
    <Layout>
      <MainWrap>
        <HeaderArea
          header="Dan Govan"
          intro="Senior Front-End / JavaScript Developer with 20 years of experience crafting intuitive, user-focused interfaces and guiding teams toward scalable, modern front-end solutions."
        />
        Colophon page. What I used to make this site and why.
      </MainWrap>
    </Layout>
  );
}
