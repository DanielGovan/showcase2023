import { Li, Ul } from "../components/List";
import Para from "../components/Para";
import Place from "../components/Place";

const ExperienceContract = () => {
  return (
    <>
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
        title="UX Developer"
        company="Lightbydan"
        companyType="In-house"
        dates="Nov 2022 - Jan 2023"
        employmentType="Contract"
        location="London"
        locationType="Remote"
      >
        <Para>
          Designed, developed, and deployed a photography showcase as the sole
          developer. Built with TypeScript, Gatsby, GraphQL, and Chakra-UI,
          deployed via Netlify. Integrated Formik for form handling and Firebase
          for backend services.
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
          Joined a product team to develop internal portals &amp; partner-facing
          features for a ticket marketplace platform, working within a large
          React/Redux codebase.
        </Para>
        <Para>
          Worked mostly with TypeScript, Redux Toolkit &amp; React-i18next. Jest
          for testing, PHP templates (Twig, PHPTal) for legacy page layout, and
          Jenkins CI/CD pipelines.
        </Para>
      </Place>
      <Place
        title="Full Stack Dev"
        company="BDH"
        companyType="Agency"
        dates="Feb 2021"
        employmentType="Contract"
        location="Bristol"
        locationType="Remote"
      >
        <Para>
          Brought on initially as frontend, I quickly identified backend gaps
          and took ownership of improving the MVP. Worked with React, Redux,
          Express, and Socket.io to enhance both frontend and backend
          components.
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
          Spearheaded frontend React &amp; Redux-heavy revamp for Cartoon
          Network’s “Elliot from Earth,” with a new design, api &amp;
          components. Also contributed to other interactive projects, SPAs &amp;
          mini-games.
        </Para>
      </Place>
      <Place
        title="Senior FE Dev"
        company="EDD London"
        companyType="Agency"
        dates="Feb 2020 - Jun 2020"
        employmentType="Contract"
        location="Hackney London"
        locationType="On-site"
      >
        <Para>
          Built React UI components for a camera rental eCommerce site &amp;
          then led on overhauling the layout from desktop-specific to
          device-agnostic. Introduced animated transitions to enhance user
          experience across mobile and tablet devices.
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
      >
        <Para>
          Implemented a new registration and onboarding system for YunoJuno’s
          freelancer platform using React and modular SCSS, improving the user
          experience and streamlining the sign-up process.
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
          Boutique agency role where projects included an HTML5 banner for the
          front page of Talk Talk, updates to an OpenCart eCommerce site, and
          other HTML5 and JS interactive elements.
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
          Picked up Angular to overhaul &amp; update a Cordova app for on-site
          tablet &amp; kiosk deployment at a client event.
        </Para>
      </Place>
      <Place
        title="FE Dev & CSS Architect"
        company="YunoJuno"
        companyType="In-house"
        dates="Jul 2015 - Dec 2017"
        employmentType="Contract"
        location="Bermondsey London"
        locationType="Hybrid"
      >
        <Para>
          Built out an evolving UX &amp; Frontend, tamed legacy startup CSS, and
          maintained an extensive design system using practical BEM, Stylus/SASS
          &amp; Django templating, later moving to React.
        </Para>
        <Para>
          Lead on a platform-wide redesign with a single CSS retheme for a
          seamless &amp; non-destructive transition.
        </Para>
      </Place>
      <Place
        title="Frontend Developer"
        company="VooDooBytes"
        companyType="Agency"
        dates="May 2014 - Jun 2015"
        employmentType="Contract"
        location="London"
        locationType="On-site"
      >
        <Para>
          Developed sites &amp; eCommerce for clients like agreatplacetobe,
          Cameraworks, Heineken, Rex &amp; Mariano, DMB represents &amp; Blossom
          Hill. Used Mixture, Sass, Liquid, &amp; jQuery for integration to
          Umbraco.
        </Para>
      </Place>
      {/* <Place
        title="Creative Technologist"
        company="MetaBroadcast"
        companyType="In-house"
        dates="Jul 2014 - Jun 2015"
        employmentType="Part-time"
        location="London"
        locationType="On-site"
      >
        <Para>
          Joined a backend engineering team to build experimental UIs to consume
          and test TV metadata APIs for the BBC. Also contributed to the company
          blog and spoke at monthly meetups.
        </Para>
      </Place> */}
      <Place
        title="Interface Developer"
        company="Maynard Malone"
        companyType="Agency"
        dates="Feb 2014 - Apr 2014"
        employmentType="Contract"
        location="London"
        locationType="On-site"
      >
        <Para>
          Worked on a content-driven site for Organix, quickly learning Drupal
          and using PHP, CSS, &amp; jQuery to implement new sections.
        </Para>
      </Place>
    </>
  );
};

export default ExperienceContract;
