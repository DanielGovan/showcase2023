import Para from "@components/Para";
import TodoList from "@components/TodoList";

export default function CaseStudyLightByDan() {
  return (
    <>
      <TodoList>
        <li>
          Set up both version locally to find and take screenshots. Focusing on
          the challenges and the results, eg the polls and the sales!
        </li>
        <li>Screenshot them and write them up, maybe before and after too.</li>
      </TodoList>
      <Para>
        Welcome! This is the case study for Light by Dan. You can include
        details about the project, technologies used, challenges faced, and any
        notable achievements. Consider adding images or screenshots to
        illustrate your work. This is a great opportunity to showcase your
        skills and the impact of your contributions to the Lightbydan project.
      </Para>
      <Para>
        Designed, developed, and deployed a photography showcase as the sole
        developer. Built with TypeScript, Gatsby, GraphQL, and Chakra-UI,
        deployed via Netlify. Integrated Formik for form handling and Firebase
        for backend services.
      </Para>
    </>
  );
}
