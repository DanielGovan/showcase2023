import { Li, Ul } from "../components/List";
import Para from "../components/Para";
import Place from "../components/Place";
import SectionHeader from "../components/SectionHeader";

const Expanded = () => (
  <>
    <Para>
      Joined the in-house Octopart web team to modernise a high-traffic legacy
      codebase serving over 2.3M monthly users. Collaborated daily with
      engineers, designers, and PMs in a cross-functional team.
    </Para>
    <Para>
      Researched &amp; evaluated styling approaches before leading the migration
      from Styled JSX to Tailwind. Rolled out a new design system powered by
      Storybook &amp; Chromatic to improve documentation, UX consistency, and
      catch visual regressions early.
    </Para>
    <Para>
      Shipped key user-facing features, including redesigned UX filters (usage
      up 4%) and high-volume, SEO-optimised landing page templates that improved
      search indexing and organic traffic. Introduced E2E testing with
      Playwright to support future refactors.
    </Para>
    <Para>
      Advocated for a shift away from Redux and overly broad Context patterns,
      contributing to a cleaner, more scalable state management approach.
      Contribute to other tech upgrades: pnpm, Node 20, Next.js 14 (App Router),
      GraphQL rewrites.
    </Para>
    <Para>
      Committed to Agile ceremonies such as sprint planning, standups, backlog
      refinement, retrospectives, and code reviews to drive team momentum
      through collaboration, iteration, and continuous improvement.
    </Para>
  </>
);

const ExperienceARecent = () => {
  return (
    <>
      <SectionHeader>Experience</SectionHeader>
      <Place
        company="Altium"
        companyType="In-house product team in a multinational company"
        location="Cambridge"
        locationType="Remote"
        employmentType="Contract"
        title="Software Engineer"
        dates="Sept 2023 - Dec 2024"
        duration="1y 4m contract, renewed twice"
      >
        <Para>
          As part of Octopart&rsquo;s in-house web team, I helped modernise a
          high-traffic legacy codebase serving over 2.3 million monthly users.
          Worked closely with engineers, designers, &amp; product managers in a
          tightly knit, cross-functional team.
        </Para>
        <Ul>
          <Li>
            Led migration from Styled JSX to Tailwind after evaluating multiple
            styling strategies
          </Li>
          <Li>
            Built &amp; rolled out a new design system using Storybook &amp;
            Chromatic for documentation, UX alignment, and visual regression
            testing
          </Li>
          <Li>
            Shipped redesigned UX filters (+4% usage) and SEO-optimised landing
            page templates that boosted indexing &amp; organic traffic
          </Li>
          <Li>
            Introduced E2E testing with Playwright to support maintainability
          </Li>
          <Li>
            Advocated for a shift away from Redux &amp; too broad Context in
            favour of more scalable state patterns
          </Li>
          <Li>
            Contributed to key tech upgrades: pnpm, Node 20, Next.js 14 (App
            Router), &amp; GraphQL rewrites
          </Li>
          <Li>
            Active participant in Agile ceremonies; helped sustain team momentum
            through collaboration &amp; continuous improvement
          </Li>
        </Ul>
      </Place>
    </>
  );
};

export default ExperienceARecent;
