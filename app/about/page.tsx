import Para from "@components/Para";
import SectionHeader from "@components/SectionHeader";
import TodoList from "@components/TodoList";

export default function AboutPage() {
  return (
    <>
      <TodoList>
        <li>
          Add a footer with links to social media, GitHub, contact info etc.
        </li>
        <li>
          Make a mobile first design and build for image-heavy pages case study
          pages
        </li>
        <li>
          Copy and imagery (live, local, wayback) for three case studies /
          Featured projects, Octopart, Not Another, Lightbydan, YJ css theme
          switch???
        </li>
        <li>
          Add a link to the CV pages to download the CV as a printed PDF, will
          need an external library for this
        </li>
        <li>
          If there&rsquo;s to be a clear call-to-action for potential employers
          or collaborators to contact you then the homepage should be less
          cluttered. But this will do for now!
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
        <li>
          Phase 2: Add a timeline page with a scrolling timeline of my career,
          with links to case studies and projects.
        </li>

        <li>
          Phase 3: Spin off skills page into a full page, with a matrix of
          skills and technologies, showing proficiency levels and favorite
          tools? Good opportunity for some infographics.
        </li>
        <li>Phase 3: Add a dark mode toggle??</li>
      </TodoList>
      <TodoList>
        <li>About page: Professional story and career journey</li>
        <li>Personal interests and trivia?? Where from, photography etc.</li>
        <li>Your development philosophy and approach</li>
        <li>What you&rsquo;re looking for in your next role</li>
        <li>Professional headshot, and more casual photo?</li>
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
