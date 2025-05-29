import ColumnWrap from "../components/ColumnWrap";
import SectionHeader from "../components/SectionHeader";
import Skill from "../components/Skill";

const SkillsFull = () => {
  return (
    <div className="flex">
      <div>
        <SectionHeader>Skills</SectionHeader>
        <ColumnWrap>
          <Skill title="JS Frameworks">
            Focused on the evolving React ecosystem since 2018, with the last
            few years in Next.js, alongside exploration of Astro and Gatsby.
            Always eager to experiment with the latest frameworks.
          </Skill>
          <Skill title="Styling">
            Proficient in Tailwind CSS for DX &amp; scalability, with experience
            in Chakra-UI, CSS-in-JS (styled-components, CSS modules), and
            preprocessors like SASS. Focused on scalable, efficient styling.
          </Skill>
          <Skill title="Semantics">
            Developed a strong foundation in semantic HTML for accessibility,
            SEO, &amp; responsive design from working with EMEA brands (e.g.,
            Vauxhall, Colgate). Expertise in building scalable, device-agnostic
            UIs.
          </Skill>
          <Skill title="JavaScript">
            Mainly TypeScript for SPAs &amp; SSR apps in Next.js (v12–15).
            Experience includes REST APIs, Redux, Context, React Query, &amp;
            GraphQL. Some backend in Node &amp; PHP, keen to expand to
            full-stack roles.
          </Skill>
          <Skill title="Testing">
            E2E with Playwright. Unit testing with Jest, React Testing Library.
            AB testing with Optimizely. Visual regression (and UX approval) with
            Chromatic.
          </Skill>
          <Skill title="Design systems">
            Advocate for design-system thinking to scale quality and
            consistency, from rapid prototyping to greenfield component
            libraries to maintaining living style guides. Long experience
            extracting assets (Photoshop to Figma) and identifying UX gaps.
          </Skill>
          <Skill title="Collaboration">
            Enjoy partnering with UX and Product from discovery to delivery.
            Value teamwork through pairing, code reviews, knowledge sharing and
            mentoring. Staying sharp in the fast-paced frontend ecosystem is
            vital.
          </Skill>
          <Skill title="Tooling">
            VS Code, Docker, Webpack, Yarn/PNPM, Git. CI/CD with Travis,
            Jenkins, Azure DevOps, GitHub Actions. Project management in Jira,
            Trello, Fibery.
          </Skill>
        </ColumnWrap>
      </div>
    </div>
  );
};

export default SkillsFull;
