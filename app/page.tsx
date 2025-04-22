import Layout from "./layout";

import HeaderArea from "./components/HeaderArea";
import Place from "./components/Place";
import SectionHeader from "./components/SectionHeader";
import Skill from "./components/Skill";
import MainWrap from "./components/MainWrap";
import Para from "./components/Para";
import ColumnWrap from "./components/ColumnWrap";
import AppendixItem from "./components/AppendixItem";

export default function Home() {
  return (
    <Layout>
      <MainWrap>
        <HeaderArea
          header="Dan Govan"
          intro="Senior Front End / Full Stack developer and Software Engineer, passionate about UI/UX and emerging tech, looking to join a curious, collaborative and forward-looking team."
        />
        <section>
          <SectionHeader>Summary</SectionHeader>
          <Para>
            With 20 years of hands-on web experience, I bring deep expertise in
            React &amp; the modern front-end ecosystem, paired with a strong
            design sensibility &amp; eye for detail. I thrive in
            cross-functional teams, love solving user-centric problems, &amp;
            get fired up by clean code, great UX, &amp; collaborative culture.
            Whether it&rsquo;s shipping scalable UI libraries, leading design
            system rollouts, or levelling up legacy platforms, I bring curiosity
            &amp; pragmatism to every project. I&rsquo;m looking to join a
            forward-thinking team where I can keep learning, building, &amp;
            making a meaningful impact.
          </Para>
        </section>
        <section>
          <SectionHeader>Skills</SectionHeader>
          <ColumnWrap>
            <Skill title="JS Frameworks">
              Focused on the evolving React ecosystem since 2018, lately in
              Next.js, but with recent experience with Astro &amp; previously
              Gatsby &amp; React Native. Always keen to see what&rsquo;s next.
            </Skill>
            <Skill title="Styling">
              Lately Tailwind, previously frameworks like Chakra-UI, before that
              CSSinJS (styled-components, styled-system, JSS, TSS, CSS modules),
              preprocessors (Sass, LESS, Stylus).
            </Skill>
            <Skill title="Semantics">
              Early projects with international brands like Vauxhall &amp;
              Colgate ensured a strong background in semantic HTML for
              accessibility, SEO, &amp; responsive &amp; device-agnostic design;
              essential for scalability &amp; localisation.
            </Skill>
            <Skill title="JavaScript">
              Mainly TypeScript for SPAs &amp; SSR apps in Next.js (v12–14).
              Experience includes REST APIs, Redux, Context, React Query, &amp;
              GraphQL. Some backend in Node &amp; PHP, keen to expand to
              full-stack roles.
            </Skill>
            <Skill title="Testing">
              E2E with Playwright &amp; Cypress. Unit testing with Jest, React
              Testing Library. AB testing with Optimizely, visual regression
              with Chromatic.
            </Skill>
            <Skill title="Design systems">
              Love collaborating with designers whether that be on rapid
              prototyping, greenfield component libraries, or maintaining living
              style guides. Also comfortable extracting assets from comps
              (Photoshop to Figma), identifying UX gaps, &amp; prototyping in
              Storybook.
            </Skill>
            <Skill title="Knowledge sharing">
              Value collaboration through pairing, code reviews, &amp;
              mentorship opportunities in cross-functional teams.
            </Skill>
            <Skill title="Tooling">
              VS Code, Docker, Webpack, Yarn/PNPM, Git. CI/CD with Travis,
              Jenkins, Azure DevOps, GitHub Actions. Project management in Jira,
              Trello, Fibery.
            </Skill>
          </ColumnWrap>
        </section>
        <div className="md:flex print:block gap-12">
          <section>
            <SectionHeader>Experience</SectionHeader>
            <Place
              company="Altium"
              companyType="In-house product team in a multinational company"
              location="Cambridge"
              locationType="Remote"
              employmentType="Contract"
              title="Software Engineer"
              dates="Sept 2023 - Dec 2024"
              duration="1y 4mon contract, renewed twice"
            >
              <Para>
                Joining Altium&apos;s Octopart in-house web team to overhaul a
                legacy codebase on a site with 2.3M monthly users.
              </Para>
              <Para>
                Led migration from Styled JSX to Tailwind, implemented a new
                design system using Storybook & Chromatic for documentation, UX
                alignment &amp; visual regression testing.
              </Para>
              <Para>
                Delivered new UX filters that increased usage 4%, SEO-focused
                landing page templates used thousands of times to index to for
                google, &amp; E2E tests with Playwright. Contributed to tech
                upgrades: pnpm, Node 20, Next.js 14 (App Router), GraphQL
                rewrites, redux refactors.
              </Para>
              <Para>
                Active in agile rituals: sprint planning, code reviews,
                retrospectives.
              </Para>
            </Place>
            <Place
              title="Senior Frontend Developer"
              company="EDD London"
              companyType="Agency"
              dates="Jul 2022 - Apr 2023"
              employmentType="Contract"
              location="Hackney London"
              locationType="Hybrid"
            >
              <Para>
                Built booking platforms &amp; a CMS agency showcase using
                TypeScript, React, Storybook, &amp; dynamic SSR with Next.js.
              </Para>
              <Para>
                Lead developers on building &amp; integrating React components.
              </Para>
              <Para>
                Created a custom UI library extending Chakra UI, using their
                theming framework to provide white-label support.
              </Para>
              <Para>
                Used React Hook Forms, framer-motion, MSW, React Query, custom
                Headless CMS integrations.
              </Para>
            </Place>
            <Place
              title="UI/UX Designer & Developer"
              company="Lightbydan"
              companyType="In-house"
              dates="Nov 2022 - Jan 2023"
              employmentType="Contract"
              location="London"
              locationType="Remote"
            >
              <Para>
                Built a photography showcase in TypeScript with Gatsby/GraphQL
                &amp; Chakra-UI, deployed via Netlify. Forms with Formik &amp;
                Firebase.
              </Para>
            </Place>
            <Place
              title="React Developer"
              company="Festicket"
              companyType="In-house"
              dates="Apr 2021 - Jul 2022"
              employmentType="Contract"
              location="London"
              locationType="Remote"
            >
              <Para>
                Joined a product team to build internal portals &amp;
                partner-facing features in a large React/Redux codebase of a
                ticket marketplace platform.
              </Para>
              <Para>
                Worked with TypeScript, Redux Toolkit, Jest, React-i18next, PHP
                templates (Twig, PHPTal, and Jenkins pipelines.
              </Para>
            </Place>
            <Place
              title="Full Stack Developer"
              company="BDH"
              companyType="Agency"
              dates="Feb 2021"
              employmentType="Contract"
              location="Bristol"
              locationType="Remote"
            >
              <Para>
                Made improvements to the MVP of a Networked Interactive
                Presentation app after a round of user testing, with React /
                Redux & express / socket.io.
              </Para>
            </Place>
            <Place
              title="React Developer"
              company="Jollywise"
              companyType="Agency"
              dates="Sept 2020 - Mar 2021"
              employmentType="Contract"
              location="Brighton"
              locationType="Remote"
            >
              <Para>
                Led frontend React &amp; Redux-heavy revamp for Cartoon
                Network’s “Elliot from Earth,” with a new design, api &amp;
                components. Also contributed to other interactive projects, SPAs
                &amp; mini-games.
              </Para>
            </Place>
            <Place
              title="Senior Frontend Developer"
              company="EDD London"
              companyType="Agency"
              dates="Feb 2020 - Jun 2020"
              employmentType="Contract"
              location="Hackney London"
              locationType="On-site"
            >
              <Para>
                Built React UI components for a camera rental eCommerce site
                &amp; then led on overhauling the layout from desktop-specific
                to device-agnostic to support mobile/tablet with animated
                transitions.
              </Para>
            </Place>
            <Place
              title="Senior Frontend Developer"
              company="Rehab Agency"
              companyType="Agency"
              dates="Oct 2019 - Feb 2020"
              employmentType="Contract"
              location="Spitalfields London"
              locationType="On-site"
            >
              <Para>
                Built a SCORM-based anti-phishing educational tool using React,
                CSS modules and JSON. 8 localisations of 6 lessons meant of
                JSON. Ended up leading the field and advising parallel projects
                to bring them up to speed.
              </Para>
            </Place>
            <Place
              title="Frontend Developer"
              company="YunoJuno"
              companyType="In-house"
              dates="May 2019 - Aug 2019"
              employmentType="Contract"
              location="Bermondsey London"
              locationType="Hybrid"
            >
              <Para>
                Returned to this in-house product team to use React with modular
                SCSS to implement a new registration &amp; onboarding system to
                their freelancer platform.
              </Para>
            </Place>
            <Place
              title="UI Developer"
              company="22 design"
              companyType="Agency"
              dates="May 2018 - Oct 2018"
              employmentType="Contract"
              location="London"
              locationType="On-site"
            >
              <Para>
                Boutique agency role where projects included an HTML5 banner for
                the front page of Talk Talk, updates to an OpenCart eCommerce
                site, and other HTML5 and JS interactive elements.
              </Para>
            </Place>
            <Place
              title="Frontend Developer"
              company="KoffeeCup"
              companyType="Agency"
              dates="May 2018 - Sept 2018"
              employmentType="Contract"
              location="London"
              locationType="On-site"
            >
              <Para>
                Overhauled &amp; updated an Angular/Cordova tablet app for
                on-site tablet & kiosk deployment at a client event.
              </Para>
            </Place>
            <Place
              title="Frontend Developer & CSS Architect"
              company="YunoJuno"
              companyType="In-house"
              dates="Jul 2015 - Dec 2017"
              employmentType="Contract"
              location="Bermondsey London"
              locationType="Hybrid"
            >
              <Para>
                Built out an evolving UX &amp; Frontend, tamed legacy startup
                CSS, and maintained an extensive design system using practical
                BEM, Stylus/SASS &amp; Django templating, later moving to React.
              </Para>
              <Para>
                Carried out a platform-wide redesign with a single CSS retheme
                for a seamless &amp; non-destructive transition.
              </Para>
            </Place>
            <Place
              title="Creative Technologist"
              company="MetaBroadcast"
              companyType="In-house"
              dates="Jul 2014 - Jun 2015"
              employmentType="Part-time"
              location="London"
              locationType="On-site"
            >
              <Para>
                Joined a backend engineering team to build experimental UIs to
                consume and test TV metadata APIs for the BBC. Also contributed
                to the company blog and spoke at monthly meetups.
              </Para>
            </Place>
            <Place
              title="Frontend Developer"
              company="VooDooBytes"
              companyType="Agency"
              dates="Feb 2014 - Jun 2015"
              employmentType="Contract"
              location="London"
              locationType="On-site"
            >
              <Para>
                Developed sites &amp; eCommerce for clients like
                agreatplacetobe, Cameraworks, Heineken, Rex &amp; Mariano, DMB
                represents &amp; Blossom Hill. Used Mixture, Sass, Liquid, &amp;
                jQuery for integration to Umbraco.
              </Para>
            </Place>
            <Place
              title="Senior Interface Developer"
              company="Maynard Malone"
              companyType="Agency"
              dates="Feb 2014 - Apr 2014"
              employmentType="Contract"
              location="London"
              locationType="On-site"
            >
              <Para>
                An agency role on a content-based site for Organix site, where I
                was quickly able to pick up Drupal and used PHP, CSS & jQuery to
                implement new sections of the site.
              </Para>
            </Place>
            <Place
              title="Senior Interactive Web Developer"
              company="VML London"
              companyType="Agency"
              dates="Nov 2012 - Feb 2014"
              employmentType="Full-time"
              location="Camden London"
              locationType="On-site"
            >
              <Para>
                Responsive CSS/UX Lead on builds from microsites to
                enterprise-level CQ builds, for Colgate, Premier Inn &amp;
                Premier League.
              </Para>
              <Para>
                Frontend lead on a 6-month fluid mobile build (500k daily users,
                £3M weekly revenue).
              </Para>
              <Para>
                Organised knowledge-sharing workshops, was tech voice on the
                social media committee, and in-house portraits &amp; events
                photographer.
              </Para>
            </Place>
            <Place
              title="Interface Developer"
              company="MRM Meteorite"
              companyType="Agency"
              dates="Oct 2011 - Nov 2012"
              employmentType="Full-time"
              location="Southwark London"
              locationType="On-site"
            >
              <Para>
                Built microsites for Vauxhall &amp; Nationwide, an Intel
                facebook campaign, &amp; iPad/PhoneGap apps for Regus &amp; The
                Mall. Championed responsive &amp; parallax design.
              </Para>
            </Place>
            <Place
              title="Front-End Developer"
              company="MRM London"
              companyType="Agency"
              dates="Apr 2006 - Oct 2011"
              employmentType="Full-time"
              location="Southwark London"
              locationType="On-site"
            >
              <Para>
                Starting as an Associate before promotion, I worked in HTML, CSS
                &amp; jQuery to reconcile the work of copywriters, designers
                &amp; backend, to build &amp; localise sites & HTML emails for
                clients like Intel, Vauxhall, Sky Movies, MSN &amp; MasterCard.
              </Para>
              <Para>
                Led initiatives in bridging the tech &amp; creative teams.
                Presented on company values &amp; best practice.
              </Para>
            </Place>
          </section>

          <section>
            <SectionHeader>Info</SectionHeader>
            <ul>
              <AppendixItem
                title="Education"
                content="2004 Warwick University, BEng in Mechanical Engineering "
              />
              <AppendixItem title="Location" content="Poplar, London" />
              <AppendixItem
                title="Website"
                content="dangovan.com"
                href="https://dangovan.com"
              />
              <AppendixItem
                title="Email"
                content="dangovan@proton.me"
                href="mailto:dangovan@proton.me"
              />
              <AppendixItem
                title="LinkedIn"
                content="linkedin.com/in/dangovan"
                href="https://www.linkedin.com/in/dangovan/"
              />
              <AppendixItem
                title="Github"
                content="github.com/danielgovan"
                href="https://github.com/danielgovan/"
              />
            </ul>
          </section>
        </div>
      </MainWrap>
    </Layout>
  );
}
