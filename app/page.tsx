import AtAGlance from "@copy/AtAGlance";
import SkillsFull from "@copy/SkillsFull";
import Summary from "@copy/Summary";

export default function HomePage() {
  return (
    <>
      {/* <h1>Welcome to My Portfolio</h1>
      <Para>
        This is a showcase of my work, skills, and experiences in web
        development. Explore my case studies, timeline, and skills to learn more
        about my journey and expertise.
      </Para>
      <Para>
        Feel free to reach out if you have any questions or would like to
        collaborate on a project!
      </Para> */}

      <section className="flex gap-10">
        <Summary />
        <AtAGlance />
      </section>
      <section>
        <SkillsFull />
      </section>
    </>
  );
}
