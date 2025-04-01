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

// Bring high-level expertise, cutting-edge skills, and fresh perspectives
// Their professional journey takes them from one innovative project to another, often at the world’s most progressive businesses
// Continuously developing and applying new technologies, methodologies, and strategies

// From linkedin

// I'm a senior frontend software engineer with a passion for UI/UX and over 18 years experience building for the web, available early 2025 for React-based contracts.

// I'm an old hand at fresh component library builds. I love talking to creatives on their own terms, translating and pulling assets out of creative comps in Photoshop or Figma, adding interstitial layouts & interactions that those don't cover, identifying UX breakdowns early.

// I also love diving into legacy systems to update, refactor and debug. Over the years I've learned (and forgotten) a bewildering array of frameworks, patterns and templating syntaxes and I'm sure that will continue!

// React has been my focus since 2018 with recent work including forms with React Hook Form or Formik, data fetching / state management with React-Query or Redux Toolkit, SSR with Next.js and Gatsby, testing with RTL, Playwright, Optimizely and Chromium. Mostly Typescript these days but JS is fine. Fluent in various CSS patterns.

// CV: dangovan.com
// GitHub: github.com/DanielGovan
// Email: daniel.govan@gmail.com

export default function Home() {
  return (
    <Layout>
      <MainWrap>
        <HeaderArea
          header="Dan Govan"
          intro="Senior frontend software engineer with a passion for UI/UX and over 18 years experience building for the web, looking to join a curious, collaborative and
        forward-looking team."
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
        Now I aspire to join a 
      </Para> */}
        <section>
          <SectionHeader>Skills</SectionHeader>
          <ColumnWrap>
            {/* <Skill title="React">
              The evolving React ecosystem has been my focus since 2018, lately
              mostly in a Next.js framework. I&rsquo;ve also recenrly worked
              with Astro and will aim to pick up Remix soon.
            </Skill> */}
            <Skill title="20 years of styling">
              My first dev task in 2006 was reducing the size of the CSS file
              for a well-trafficked Intel site, so it&apos;s continued from
              there: CSS3 (Sass, LESS, Stylus), BEM / SMACSS-based architecture.
              JS modules, styled components, styled system, styled jsx, JSS,
              TSS, frameworks like Chakra-ui, light and dark modes, and lately a
              lot of Tailwind.
            </Skill>
            <Skill title="Robust markup">
              Starting off building sites for international brands like Vauxhall
              and Colgate gave me a grounding in semantic HTML with a mind to
              accessibility, SEO, scalability &amp; and the value of responsive
              design and best practice to future-proof against unexpected
              localisation. The perennial practical challenges of keeping apps
              and websites performant and device-agnostic.{" "}
              {/* Over the years I&rsquo;ve also learned (and
              forgotten) a bewildering array of templating syntaxes. */}
            </Skill>
            <Skill title="JS and its frameworks">
              As I&rsquo;m happiest building UIs my first JavaScript specific
              role wasn&rsquo;t until in 2014, but by 2018 I had pivoted to JS
              and the React ecosystem completely, the last 4 years of which
              being in TypeScript. SPAs, NextJS v12 and v13, client and
              server-side rendered apps, RESTful APIs, state management with
              Redux, Context or React Query, GraphQL. I&rsquo;ve also worked in
              Astro, Gatsby, React Native, a slew of other now outdated
              frameworks, regularly contributing to Node backends and had
              exposure to a range of others.
            </Skill>
            <Skill title="Testing">
              End to end with Playwright and some Cypress. Unit with Jest, React
              Testing Library. AB testing with Optimizely. Visual regression
              with Chromatic.
            </Skill>
            <Skill title="Developing design systems">
              Although I am well practiced at translating and pulling assets out
              of creative comps from Photoshop to Figma, identifying UX
              breakdowns early, adding interstitial layouts &amp; interactions
              etc, I always prefer collaborating with visual designers and
              ux-ers, directly and via tools like Storybook, Chromatic and
              Atomic Design, to ensure a consistent language is used from the
              outset across departments. This aids both with rapid prototyping
              in greenfield component library builds as well as maintaining a
              living design system in larger codebases.
            </Skill>
            <Skill title="Knowledge sharing">
              While collaborating in small interdisciplinary teams, I value
              knowledge sharing via pairing and code reviews whenever possible,
              and I have occasionally had the opportunity to mentor and lead
              juniors.
            </Skill>
            <Skill title="Tooling">
              VS Code, Docker, Netlify, Webpack, Yarn workspaces &amp;
              monorepos, NPM/PNPM, Git, CI/CD pipelines with Travis, Semaphore,
              Jenkins, Azure DevOps &amp; lately some GitHub Actions. Workspaces
              with Jira, Trello, Fibery and more.
            </Skill>
          </ColumnWrap>
        </section>
        <section>
          <SectionHeader>Experience</SectionHeader>
          <ColumnWrap>
            {/* <SectionHeader>Frontend Contractor 2014 - 2023</SectionHeader> */}
            <Place time="September 2023 - present" place="Altium">
              <Para>
                Joining Altium&apos;s Octopart in-house web team at an exciting
                time of investment and team growth we overhauled a legacy
                codebase on a component comparison website with 2.3 million
                monthly users.
              </Para>
              <Para>
                I led on a move from Styled JSX to Tailwind for improved site
                performance and DX, supported by documenting components in
                Storybook and Chromatic for visual regression testing, and
                implementing a new design system and style guide for visual
                consistency.
              </Para>
              <Para>
                The new team took ownership for tech debt as well as new
                features so on top of new search filters for better UX and
                landing pages for better SEO we were able to add Playwright e2e
                tests, and move to pnpm, upgrade the GraphQL patterns twice,
                node 20, and Next 14 with App Router, as well as break down
                confusing and disparate legacy redux patterns. All with
                well-structured agile methodologies: code reviews, sprint
                planning, retro and refinement meetings.
              </Para>
            </Place>
            {/* <Place time="Jun - Aug 2023" place="Side projects">
              <Para>
                To skill up on testing and keep abreast of the latest
                developments in the React ecosystem, I did courses on and
                tinkered with Cypress, Next13, Tailwind, React Server Components
                and GitHub Copilot.
              </Para>
            </Place> */}
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
                Fun new things included React Hook Forms, server-side rendering
                with Next.js 14 and Gatsby, mocking with Faker &amp; MSW, state
                and data fetching with React Query, animation with framer
                motion, and for the CMS content I consumed a custom Headless
                CMS.
              </Para>
            </Place>
            <Place time="Nov 2022 to Jan 2023" place="Photographer site">
              <Para>
                Designed and built a photography showcase site in TypeScript
                with Gatsby/GraphQL and Chakra-UI, auto deploying from Git via
                Netlify, running polls and forms with Formik and Firebase.
              </Para>
            </Place>
            <Place time="Apr 2021 - Jul 2022" place="Festicket">
              <Para>
                An in-house, product-side role at an event ticket marketplace
                platform, building interfaces that increased transparency to
                partners on fees and sales performance. I built out a succession
                of portals and other components in a large mostly React / Redux
                codebase.
              </Para>
              <Para>
                Fun new things included deep diving on TypeScript and Redux
                Toolkit, testing as standard with Jest / React Testing Library,
                and CI/CD with Jenkins, integrating with React-i18next, and
                working on PHP templating with Twig and PHPTal.
              </Para>
            </Place>
            <Place time="Feb 2021" place="BDH">
              <Para>
                Making improvements to a MVP of a Networked Interactive
                Presentation app after a round of user testing, with React /
                Redux &amp; express / socket.io.
              </Para>
            </Place>
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
            <Place time="Feb - Jun 2020" place="EDD London">
              <Para>
                I built missing React UI components for a new camera rental
                eCommerce site then led on overhauling the layout from
                desktop-specific to device-agnostic, adding mobile and tablet
                views with animated transitions.
              </Para>
            </Place>
            <Place time="Oct 2019 - Feb 2020" place="Rehab Agency">
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
                the BBC. I also contributed to the company blog and spoke at
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
            <Place time="2006 - 2011: " place="MRM London">
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
