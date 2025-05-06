import ColumnWrap from "../components/ColumnWrap";
import SectionHeader from "../components/SectionHeader";
import Skill from "../components/Skill";

const SkillsPrev = () => (
  <>
    <Skill title="JS Frameworks">
      Focused on the evolving React ecosystem since 2018, with recent expertise
      in Next.js (v12–14), alongside exploration of Astro and Gatsby. Always
      eager to experiment with the latest frameworks.
    </Skill>
    <Skill title="Styling">
      Lately Tailwind, previously frameworks like Chakra-UI, CSSinJS
      (styled-components, CSS modules etc), and preprocessors like SASS.
    </Skill>
    <Skill title="Semantics">
      Early projects with international brands like Vauxhall &amp; Colgate
      ensured a strong background in semantic HTML for accessibility, SEO, and
      responsive &amp; device-agnostic design; essential for scalability &amp;
      localisation.
    </Skill>
    <Skill title="JavaScript">
      Mainly TypeScript for SPAs &amp; SSR apps in Next.js (v12–14). Experience
      includes REST APIs, Redux, Context, React Query, &amp; GraphQL. Some
      backend in Node &amp; PHP, keen to expand to full-stack roles.
    </Skill>
    <Skill title="Testing">
      E2E with Playwright. Unit testing with Jest, React Testing Library. AB
      testing with Optimizely. Visual regression (and UX approval) with
      Chromatic.
    </Skill>
    <Skill title="Design systems">
      Strong advocate for design-system thinking as a way to scale quality and
      coherence, whether that be on rapid prototyping, greenfield component
      libraries, or maintaining living style guides. Comfortable extracting
      assets from comps (Photoshop to Figma) and identifying UX gaps.
    </Skill>
    <Skill title="Collaborating">
      Enjoy partnering with UX and Product across all phases, from shaping
      requirements to final delivery. Value hands-on teamwork through pairing,
      code reviews, knowledge sharing and mentoring. Staying sharp in the
      fast-paced frontend ecosystem is vital (and part of the fun).
    </Skill>
    <Skill title="Tooling">
      VS Code, Docker, Webpack, Yarn/PNPM, Git. CI/CD with Travis, Jenkins,
      Azure DevOps, GitHub Actions. Project management in Jira, Trello, Fibery.
    </Skill>
  </>
);

const SkillsFull = () => {
  return (
    <>
      <SectionHeader>Skills</SectionHeader>
      <ColumnWrap>
        <Skill title="JS Frameworks">
          Focused on the evolving React ecosystem since 2018, with the last few
          years in Next.js, alongside exploration of Astro and Gatsby. Always
          eager to experiment with the latest frameworks.
        </Skill>
        <Skill title="Styling">
          Proficient in Tailwind CSS for DX &amp; scalability, with experience
          in Chakra-UI, CSS-in-JS (styled-components, CSS modules), and
          preprocessors like SASS. Focused on scalable, efficient styling.
        </Skill>
        <Skill title="Semantics">
          Developed a strong foundation in semantic HTML for accessibility, SEO,
          &amp; responsive design from working with EMEA brands (e.g., Vauxhall,
          Colgate). Expertise in building scalable, device-agnostic UIs.
        </Skill>
        <Skill title="JavaScript">
          Mainly TypeScript for SPAs &amp; SSR apps in Next.js (v12–14).
          Experience includes REST APIs, Redux, Context, React Query, &amp;
          GraphQL. Some backend in Node &amp; PHP, keen to expand to full-stack
          roles.
        </Skill>
        <Skill title="Testing">
          E2E with Playwright. Unit testing with Jest, React Testing Library. AB
          testing with Optimizely. Visual regression (and UX approval) with
          Chromatic.
        </Skill>
        <Skill title="Design systems">
          Advocate for design-system thinking to scale quality and consistency,
          from rapid prototyping to greenfield component libraries to
          maintaining living style guides. Long experience extracting assets
          (Photoshop to Figma) and identifying UX gaps.
        </Skill>
        <Skill title="Collaboration">
          Enjoy partnering with UX and Product across all phases, from discovery
          to delivery. Value teamwork through pairing, code reviews, knowledge
          sharing and mentoring. Staying sharp in the fast-paced frontend
          ecosystem is vital (and part of the fun).
        </Skill>
        <Skill title="Tooling">
          VS Code, Docker, Webpack, Yarn/PNPM, Git. CI/CD with Travis, Jenkins,
          Azure DevOps, GitHub Actions. Project management in Jira, Trello,
          Fibery.
        </Skill>
      </ColumnWrap>
    </>
  );
};

export default SkillsFull;
