import Layout from "./layout";

import HeaderArea from "../components/HeaderArea";
import MainWrap from "../components/MainWrap";
import Link from "next/link";

// TODO
// Sort the import statements from "../" to "@components" to "@copy" to "@utils" etc.
// add a basic navbar
// Do I need to update which Next.js version this is using?
// add perma scrollbar to the main layout
// Add a footer with links to social media, GitHub, etc.
// add a print button for the CV pages
// Add a dark mode toggle?

export default function Home() {
  return (
    <Layout>
      <MainWrap>
        <HeaderArea
          header="Dan Govan"
          intro="Senior Front-End / JavaScript Developer with 20 years of experience crafting intuitive, user-focused interfaces and guiding teams toward scalable, modern front-end solutions."
          showHomeButton={false}
        />
        Welcome! Add intro, links, etc. to this page. This is the home page of
        the CV site.
      </MainWrap>
    </Layout>
  );
}
