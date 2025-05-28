import Layout from "@app/layout";

import HeaderArea from "@components/HeaderArea";
import MainWrap from "@components/MainWrap";

// TODO
// Update which Next.js version this is using. What features are available? I hate that all the pages are called "page.tsx".
// Sort the import statements from "../" to "@components" to "@copy" to "@utils" etc.
// Add a footer with links to social media, GitHub, etc.
// Make 3 case studies based on the three sites I have access to.
// Add a link to the CV pages to download the CV as a printed PDF, will need an external library for this

// LATER
// Add a dark mode toggle??

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
