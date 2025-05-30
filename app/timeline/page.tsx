import ExperiencePermEra from "@copy/ExperiencePermEra";
import ExperienceARecent from "@copy/ExperienceARecent";
import ExperienceContract from "@copy/ExperienceContract";
import Para from "@components/Para";
import TodoList from "@components/TodoList";

export default function TimelinePage() {
  return (
    <>
      <TodoList>
        <li>
          Scrolling from 2002 to now, with links, jobs I&rsquo;ve had, big
          momements, skills i&rsquo;ve picked up. Aka an interactive timeline of
          my career progression.
        </li>
        <li>
          Key achievements and learnings from each role?? don&rsquo;t want to
          duplicate the experience section.
        </li>
        <li>
          Perm to contract, part time to full. Info graphics?? Bar charts! Plot
          everything out, each role, each technology, each skill. Maybe
          highlight the most impactful roles or projects. PHP → React →
          TypeScript → Next.js. Maybe big &quot;time&quot; line in the middle,
          jobs on the left, skills on the right. Some techs end which is fine.
          JQuery. Wordpress. Backbone?
        </li>
      </TodoList>
      <Para>
        Lorem ipsum This is a timeline of my career, highlighting key roles,
        projects, and skills I&rsquo;ve developed over the years. It showcases
        my journey from early days in web development to my current expertise in
        modern front-end technologies.
      </Para>
      <Para>
        Lorem ipsum The timeline is designed to be interactive, allowing you to
        explore my professional journey in a visually engaging way. Each entry
        includes details about the role, the technologies used, and the impact
        of my work.
      </Para>
      <Para>
        Lorem ipsum As you scroll through the timeline, you&rsquo;ll see how my
        career has evolved over time, from my first role in 2002 to my current
        position. I&rsquo;ve included links to case studies and projects where
        applicable, providing a deeper insight into my work and the technologies
        I&rsquo;ve used.
      </Para>
      <Para>
        Lorem ipsum The timeline is a reflection of my passion for web
        development and my commitment to continuous learning and growth in the
        field. It highlights my journey through various roles, the challenges
        I&rsquo;ve faced, and the successes I&rsquo;ve achieved along the way.
      </Para>
      <div className="md:flex print:block gap-12">
        <section>
          <ExperienceARecent />
          <ExperienceContract />
          <ExperiencePermEra />
        </section>
      </div>
    </>
  );
}
