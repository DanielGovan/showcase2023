import SubSectionHeader from "@components/SubSectionHeader";
import { Li, Ul } from "../components/List";
import Para from "../components/Para";
import Place from "../components/Place";

const ExperienceContractBrief = () => {
  return (
    <>
      <SubSectionHeader>Frontend Consultant: 2014 - 2023</SubSectionHeader>

      <Place
        title="Senior Frontend Developer"
        company="EDD London"
        companyType="Agency"
        dates="Jul 2022 - Apr 2023"
        employmentType="Contract"
        location="Hackney London"
        locationType="Hybrid"
        repeatRoles={[
          {
            date: "Feb 2020 - Jun 2020",
            blurb: (
              <Para key={1}>
                Built React UI components for a camera rental eCommerce site
                &amp; then led on overhauling the layout from desktop-specific
                to device-agnostic to support mobile/tablet with animated
                transitions.
              </Para>
            ),
          },
          {
            date: "May 2014 - Jun 2015",
            blurb: (
              <Para key={1}>
                Developed sites &amp; eCommerce for clients like
                agreatplacetobe, Cameraworks, Heineken, Rex &amp; Mariano, DMB
                represents &amp; Blossom Hill. Used Mixture, Sass, Liquid, &amp;
                jQuery for integration to Umbraco.
              </Para>
            ),
          },
        ]}
      >
        <Para>
          Key role in developing booking platforms &amp; a CMS agency showcase
          from the ground up, using TypeScript, React, and Next.js for dynamic
          SSR &amp; seamless UX.
        </Para>
        <Ul>
          <Li>
            Spearheaded the development &amp; integration of reusable React
            components, leading two devs in the build.
          </Li>
          <Li>
            Built a custom UI library extending Chakra UI&rsquo;s theming
            framework, enabling white-label support.
          </Li>
          <Li>
            Utilized React Hook Forms, framer-motion, and MSW for robust form
            handling, animations, and API mockups.
          </Li>
          <Li>
            Developed data fetching and state management with React Query &amp;
            custom Headless CMS integrations.
          </Li>
        </Ul>
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
          Joined a product team to build internal portals &amp; partner-facing
          features in a large React/Redux codebase of a ticket marketplace
          platform Improved client visibility and moved more of the front end
          from PHP templates to React.
        </Para>
        <Para>
          Worked with TypeScript, Redux Toolkit and React-i18next, but also
          testing with Jest, Twig and PHPTal for legacy page layout, and Jenkins
          CI/CD pipelines.
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
          Network&rsquo;s “Elliot from Earth,” with a new design, api &amp;
          components. Also contributed to other interactive projects, SPAs &amp;
          mini-games.
        </Para>
      </Place>
      <Place
        title="Senior FE Dev"
        company="Rehab Agency"
        companyType="Agency"
        dates="Oct 2019 - Feb 2020"
        employmentType="Contract"
        location="Spitalfields London"
        locationType="On-site"
      >
        <Para>
          Built a SCORM-based anti-phishing educational tool using React, CSS
          modules and JSON. 8 localisations of 6 lessons meant a lot of JSON.
          Ended up leading the field and advising parallel projects to bring
          them up to speed.
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
        repeatRoles={[
          {
            date: "Jul 2015 - Dec 2017",
            blurb: (
              <>
                <Para>
                  Built out an evolving UX &amp; Frontend, tamed legacy startup
                  CSS, and maintained an extensive design system using practical
                  BEM, Stylus/SASS &amp; Django templating, moving to React.
                  Lead on a platform-wide redesign with a CSS retheme for a
                  seamless &amp; non-destructive transition.
                </Para>
              </>
            ),
          },
        ]}
      >
        <Para>
          Implemented a new registration and onboarding system for
          YunoJuno&rsquo;s freelancer platform using React and modular SCSS,
          improving the user experience and streamlining the sign-up process.
        </Para>
      </Place>
      <SubSectionHeader>Other Freelance Roles</SubSectionHeader>
      <Place
        title=""
        company=""
        companyType="In-house"
        dates=""
        employmentType="Contract"
        location=""
        locationType="Hybrid"
        repeatRoles={[
          {
            place: "Lightbydan",
            date: "Nov 2022 - Jan 2023",
            blurb: (
              <Para>
                Designed, developed, and deployed a photography showcase as the
                sole developer. Built with TypeScript, Gatsby, GraphQL, and
                Chakra-UI, deployed via Netlify. Integrated Formik for form
                handling and Firebase for backend services.
              </Para>
            ),
          },
          {
            place: "BDH",
            date: "Feb 2021",
            blurb: (
              <Para>
                Brought on initially as frontend, I quickly identified backend
                gaps and took ownership of improving the MVP. Worked with React,
                Redux, Express, and Socket.io to enhance both frontend and
                backend components.
              </Para>
            ),
          },
          {
            place: "22 design",
            date: "May 2018 - Oct 2018",
            blurb: (
              <Para>
                Boutique agency role where projects included an HTML5 banner for
                the front page of Talk Talk, updates to an OpenCart eCommerce
                site, and other HTML5 and JS interactive elements.
              </Para>
            ),
          },
          {
            place: "KoffeeCup",
            date: "May 2018 - Sept 2018",
            blurb: (
              <Para>
                Picked up Angular to overhaul &amp; update a Cordova app for
                on-site tablet &amp; kiosk deployment at a client event.
              </Para>
            ),
          },
          {
            place: "Maynard Malone",
            date: "Feb 2014 - Apr 2014",
            blurb: (
              <Para>
                Joined the team to work on a content-driven site for Organix,
                quickly learning Drupal and using PHP, CSS, and jQuery to
                implement new sections.
              </Para>
            ),
          },
        ]}
      >
        <></>
      </Place>
    </>
  );
};

export default ExperienceContractBrief;
