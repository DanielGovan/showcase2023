import Para from "@components/Para";
import SectionHeader from "@components/SectionHeader";
import TodoList from "@components/TodoList";

export default function AboutPage() {
  return (
    <>
      <TodoList phase={1}>
        <li>Mobile-first design and build for image-heavy case study pages</li>
        <li>
          Copy and imagery (from live, local, wayback) for case studies /
          Featured projects: Octopart, Not Another, Lightbydan, maybe YJ css
          theme switch???
        </li>
        <li>
          Add a footer with links to social media, GitHub, contact info etc.
        </li>
        <li>
          NTH: Add a link to the CV pages to download the CV as a printed PDF,
          will need an external library
        </li>
        <li>
          Nift: microinteractions (navbar) and page animations using framer
          motion perhaps?{" "}
          <a
            className="underline"
            href="https://prateekshawebdesign.com/blog/step-by-step-guide-to-adding-page-transitions-and-animations-in-nextjs-14"
          >
            example here
          </a>{" "}
          or{" "}
          <a
            className="underline"
            href="https://medium.com/@camille.fontaine93/in-and-out-page-transitions-and-next-js-app-router-62f2b1637ad8"
          >
            another here
          </a>
        </li>
      </TodoList>
      <TodoList phase={2}>
        <li>About page: Professional story and career journey</li>
        <li>Personal interests and trivia?? Where from, photography etc.</li>
        <li>Your development philosophy and approach</li>
        <li>What you&rsquo;re looking for in your next role</li>
        <li>Professional headshot, and more casual photo?</li>
      </TodoList>
      <TodoList phase={3}>
        <li>
          Timeline page: with a scrolling timeline of my career, with links to
          case studies and projects.
        </li>
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
      <TodoList phase={4}>
        <li>
          Spin off skills into a full page, with a matrix of skills and
          technologies, showing proficiency levels and favorite tools? Good
          opportunity for some infographics.
        </li>

        <li>
          Dedicated landing page with more room for clear call-to-actions for
          potential employers or collaborators.
        </li>
        <li>Add a dark mode toggle??</li>
      </TodoList>
      <SectionHeader>About</SectionHeader>
      <Para>
        About Dan? Your professional story (can adapt CV summary? Combine perm
        and contract layers)
      </Para>
      <SectionHeader>25 years of front end</SectionHeader>
      <Para>About the career?</Para>
      <SectionHeader>About this site?</SectionHeader>
      <Para>Colophon. What I used to make this site and why.</Para>
    </>
  );
}
