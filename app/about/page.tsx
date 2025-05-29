import Layout from "@app/layout";
import HeaderArea from "@components/HeaderArea";
import MainWrap from "@components/MainWrap";
import SummaryPerm from "@copy/SummaryPerm";

export default async function AboutPage() {
  return (
    <Layout>
      <MainWrap>
        <HeaderArea
          header="Dan Govan"
          intro="Senior Front-End / JavaScript Developer with 20 years of experience crafting intuitive, user-focused interfaces and guiding teams toward scalable, modern front-end solutions."
        />
        About page. Background, interests, etc. Add images, links, etc.
        <section>
          <SummaryPerm />
        </section>
      </MainWrap>
    </Layout>
  );
}
