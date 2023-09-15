import Layout from "./layout";

import { FaLinkedin, FaGithubAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import HeaderArea from "./components/HeaderArea";
import Place from "./components/Place";
import SectionHeader from "./components/SectionHeader";
import Skill from "./components/Skill";
import FooterLink from "./components/FooterLink";
import MainWrap from "./components/MainWrap";
import Para from "./components/Para";
import ColumnWrap from "./components/ColumnWrap";
import NoColWrap from "./components/NoColWrap";

export default function Home() {
  return (
    <Layout>
      <MainWrap>
        <HeaderArea
          header="Dan Govan"
          intro="Senior frontend software engineer
        with a passion for UI/UX and over 17 years experience building for the web"
        />

        {/* <SectionHeader>Overview</SectionHeader>
      <Para>
        An agency-side web developer from 2006, I worked on sites of all sizes
        for big names like Intel, Vauxhall, Nationwide, Colgate and Premier Inn,
        always building with a mind to accessibility and internationalisation.
      </Para>
      <Para>
        In 2014 I transitioned into contracting, expanding my scope to work with
        smaller agencies and in-house teams. From content-driven sites to SPAs
        to complex product platforms I became well versed in quickly picking up
        new frameworks, design patterns and legacy codebases.
      </Para> */}
        {/* <Para>
        Now I aspire to join a curious, diverse, collaborative and
        forward-looking team, in building a high quality, impactful product.
      </Para> */}
        <section>
          <SectionHeader>Skills</SectionHeader>
          <ColumnWrap>
            <Skill title="React">
              The evolving React ecosystem has been my focus since 2018. Recent
              work has included forms with React Hook Form and Formik, mocking
              with Faker and MSW, data fetching and state management with
              React-Query and Redux Toolkit, animation with Framer-Motion,
              server-side rendering with Next.js 13 and Gatsby.
            </Skill>
            <Skill title="Scripting">
              My first JavaScript specific role was in 2014, and by 2018 it was
              all JavaScript, with the last 2 years in TypeScript. Mostly
              frontend with React, RESTful APIs etc, but regularly contributing
              to Node backends. I&rsquo;ve also worked with React Native,
              express, socket.io, and previously with Angular 2, PHP &amp; and
              had exposure to a variety of backends.
            </Skill>
            <Skill title="Testing">
              End to end with Cypress, Unit with Cypress, Jest, React Testing
              Library, visual regression with Chromatic.
            </Skill>
            <Skill title="Styling">
              2006 I started out tasked reducing the size of the CSS file for a
              well-trafficked Intel site, and it&rsquo;s just continued from
              there. CSS3 (Sass, LESS, Stylus), BEM / SMACSS-based architecture,
              then js-wrapped modules, styled components, styled system, styled
              jsx, JSS, TSS, and lately framworkes like Chakra-ui and Tailwind
            </Skill>
            <Skill title="Markup">
              Building sites for international brands like Vauxhall and Colgate
              gave me a grounding in semantic HTML with a mind to accessibility,
              SEO, scalability &amp; unexpected localisation. The practical
              challenges of keeping apps and websites performant and
              device-agnostic. Over the years I&rsquo;ve also learned (and
              forgotten) a bewildering array of templating syntaxes.
            </Skill>
            <Skill title="Design">
              Talking to creatives on their own terms, translating and pulling
              assets out of creative comps in Photoshop or Figma, adding
              interstitial layouts &amp; interactions that those don&rsquo;t
              cover, identifying UX breakdowns early.
            </Skill>
            <Skill title="Mentoring">
              I usually collaborate in small interdisciplinary teams, but I
              value knowledge sharing via pairing and code reviews whenever
              possible. In my last role I had the opportunity to mentor and lead
              two juniors.
            </Skill>
            <Skill title="Tooling">
              VS Code, Docker, Webpack, Azure, Chromatic, Yarn, NPM, Git, CI
              with GitHub &amp; Jenkins, Travis and Semaphore, Jira, Trello,
              Fibery, Netlify.
            </Skill>
          </ColumnWrap>
        </section>
        <section>
          <SectionHeader>Experience</SectionHeader>
          <ColumnWrap>
            {/* <SectionHeader>Frontend Contractor 2014 - 2023</SectionHeader> */}
            <Place time="Jul 2022 - Apr 2023" place="EDD London">
              <Para>
                An agency role where projects included two booking platforms and
                a CMSd showcase site for the agency itself (which I also did the
                photography for). All involved prototyping components in
                TypeScript, React and Storybook before integrating them into a
                dynamic SSR Next.JS app. Lead two developers on building and
                integrating React components.
              </Para>
              <Para>
                For a booking system project I built a UI library extending
                Chakra UI with custom components to take advantage of their
                theming system and laying the groundwork for a white label
                offering.
              </Para>
              <Para>
                Fun new things included React Hook Forms, mocking with Faker
                &amp; MSW, state and data fetching with React Query, animation
                with framer motion, and for the CMS content I consumed a custom
                Headless CMS.
              </Para>
            </Place>
            <Place time="Nov 2022 to Jan 2023" place="Side project">
              <Para>
                Designed and built a photography showcase site in TypeScript
                with Gatsby/GraphQL auto deploying from Git via serverless
                Netlify, running polls and forms with Formik and Firebase.
              </Para>
            </Place>
            <Place time="Apr 2021 - Jul 2022" place="Festicket">
              <Para>
                In-house, product side role on an event ticket marketplace
                platform, building interfaces to increase transparency to
                partners on fees and sales performance. Working in small teams
                we built out a succession of portals and other components in a
                large mostly React / Redux codebase.
              </Para>
              <Para>
                Fun new things included learning TypeScript and Redux Toolkit,
                testing as standard with Jest / React Testing Library. We also
                integrated with React-i18next and touched on some PHP templating
                with Twig, while avoiding legacy PHPTal.
              </Para>
            </Place>
            {/* <Place time="Feb 2021" place="BDH">
          Networked Interactive Presentation app, with React / Redux &amp;
          express / socket.io, making improvements to a MVP after a round of
          user testing.
        </Place> */}
            <Place time="Sept 2020 - Mar 2021" place="Jollywise">
              <Para>
                Lead on retrofitting a legacy React and Redux-heavy
                content-driven site for Cartoon Network show Ben Ten with a new
                design, api and components for their new property Elliot from
                Earth. I also contributed to the Climate Champions project,
                styled a company Christmas quiz SPA, and built a set of React /
                JS dragon-themed mini games.
              </Para>
            </Place>
            <Place time="Feb - Mar 2020 / Jun 2020" place="EDD London">
              <Para>
                I built missing React UI components for a new camera rental
                eCommerce site then led on overhauling the layout from
                desktop-specific to device-agnostic.
              </Para>
            </Place>
            <Place time="Oct 2019 - Feb 2020  / Jun 2020" place="Rehab Agency">
              <Para>
                Working on a SCORM-based anti-phishing educational tool, I built
                8 localisations of 6 iterations, consuming a great deal of copy
                in JSON form. Ended up leading the field and advising parallel
                projects to bring them up to speed. Used React, hooks, CSS
                modules, JSON, SCORM &amp; Sketch.
              </Para>
            </Place>
            <Place time="May - Aug 2019" place="YunoJuno">
              <Para>
                Returning to this in-house product team I used React with
                modular scss to implement a new registration &amp; onboarding
                system to their freelancer platform.
              </Para>
            </Place>
            <Place time="May - Oct 2018" place="22 design">
              <Para>
                Boutique agency role where projects included an HTML5 banner for
                the front page of Talk Talk, updates to an OpenCart eCommerce
                site, a JS 360 spinner &amp; an interactive quiz.
              </Para>
            </Place>
            <Place time="May - Sept 2018" place="KoffeeCup">
              <Para>
                Quickly got up to speed on a legacy Angular/Cordova app that
                needed urgent updating for a client company conference. Updated
                it with a new year of content, assets & structure for an on-site
                tablet & kiosk deployment.
              </Para>
            </Place>
            <Place time="Jul 2015 - Dec 2017" place="YunoJuno">
              <Para>
                In-house role working on a platform to connect freelancers with
                companies. I built out an evolving UX &amp; Frontend, tamed
                legacy CSS built in the startup years, and maintained an
                extensive design system using practical BEM, Stylus/SASS and
                Django templating, later moving to React.
              </Para>
              <Para>
                A highlight was carrying out a platform-wide redesign with a
                single CSS retheme for a seamless and non-destructive
                transition.
              </Para>
            </Place>
            <Place time="Jul 2014 - Jun 2015" place="MetaBroadcast">
              <Para>
                In-house Creative Technologist in a backend engineering team,
                brought on for rapid prototyping, creating UIs to test and
                consume their extensive experimental TV-based metadata APIs for
                the BBC. I was also contributed to the company blog and spoke at
                monthly meetups.
              </Para>
            </Place>
            <Place time="Feb 2014 - Jun 2015" place="VooDooBytes">
              <Para>
                Long-running team up with a small agency on a series of
                content-based and eCommerce sites including agreatplacetobe,
                Cameraworks, Heineken, Rex &amp; Mariano, DMB represents &amp;
                Blossom Hill, using Mixture, Liquid, Sass &amp; jQ for
                integration to Umbraco.
              </Para>
            </Place>
            <Place time="Feb - Apr 2014" place="Maynard Malone">
              <Para>
                An agency role on a content-based Organix site, where I was
                quickly able to pick up Drupal and used PHP, CSS &amp; jQ to
                implement new sections of the site.
              </Para>
            </Place>
            <NoColWrap>
              {/* <SectionHeader>Permanent roles: 2006 to 2014</SectionHeader> */}
              <Place time="2012 - 2014: " place="VML London">
                <Para>
                  Senior Interactive Web Developer specialising in responsive
                  builds, from microsites to enterprise-level CQ builds, for
                  Colgate, Premier Inn &amp; Premier League.
                </Para>
                <Para>
                  My longest project was 6-months building a fluid mobile site
                  that receives 500k uniques a day and 3mil in revenue a week.
                  As the team increased from 6 devs to 20 I started out as
                  Front-end lead then specialised to CSS and UX Lead.
                </Para>
                <Para>
                  I also organised knowledge-sharing workshops, was on the
                  social media committee as tech voice, &amp; was in-house
                  photographer for portraits & events.
                </Para>
              </Place>
            </NoColWrap>
            <Place time="2011 - 2012: " place="MRM Meteorite">
              <Para>
                Interface Developer building microsites for Vauxhall &amp;
                Nationwide, an Intel facebook campaign, iPad site for Regus, a
                PhoneGap&apos;d iPhone app for The Mall &amp; championed
                responsive &amp; parallax design.
              </Para>
            </Place>
            <Place
              time="2006 - 2011: "
              place="MRM
            London"
            >
              <Para>
                Starting as an Associate Frontend Developer before promotion, I
                worked in HTML, CSS &amp; later jQ, reconciling the work of
                copywriters, designers &amp; backend devs to produce sites,
                localisations &amp; HTML emails for clients like Intel,
                Vauxhall, Sky Movies, MSN &amp; MasterCard.
              </Para>
              <Para>
                Away from the keyboard I led initiatives in improving
                communication between the tech &amp; creative departments, and
                presented on company values &amp; best practice.
              </Para>
            </Place>
          </ColumnWrap>
        </section>

        <section className="print:hidden">
          <SectionHeader>Contact</SectionHeader>
          <div className="flex font-sans text-red-800">
            <FooterLink
              print="www.linkedin.com/in/daniel-govan-9227511"
              href="https://www.linkedin.com/in/%F0%9F%91%8D-daniel-govan-9227511/"
              noprint={true}
            >
              <FaLinkedin />
              <span className="ml-2">LinkedIn</span>
            </FooterLink>

            <FooterLink
              print="github.com/danielgovan/"
              href="https://github.com/danielgovan/"
            >
              <FaGithubAlt />
              <span className="ml-2">Github</span>
            </FooterLink>
            <FooterLink
              print="danielgovan@gmail.com"
              href="mailto:danielgovan@gmail.com"
            >
              <GrMail />
              <span className="ml-2">Email</span>
            </FooterLink>
          </div>
        </section>
      </MainWrap>
    </Layout>
  );
}
