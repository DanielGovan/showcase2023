import TodoList from "@components/TodoList";
import SkillsFull from "@copy/SkillsFull";

// Skills page. This is a full list of skills, technologies, and tools, with how long I&rsquo;ve used them.
// Interactive skill matrix showing proficiency levels
// Favorite tools and why you chose them

export default function Skills() {
  return (
    <>
      <TodoList>
        <li>
          Pull in &quot;At a glance&quot; from the CV, turn into a infographic
          later.
        </li>
        <li>
          Add a &quot;What&rsquo;s next?&quot; section, a learning roadmap for
          emerging technologies
        </li>
      </TodoList>
      <section>
        <SkillsFull />
      </section>
    </>
  );
}
