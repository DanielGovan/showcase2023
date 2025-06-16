import Para from "../components/Para";
import SectionHeader from "../components/SectionHeader";

const Summary = () => {
  return (
    <div className="flex-3/4 print:flex-3/5">
      <SectionHeader>Summary</SectionHeader>
      <Para>
        Hi, I'm Dan! As well as the standard expertise in React and Typescript,
        20 years of being the glue between design &amp; development has given me
        a collaborative focus and a great eye for UX, while 10 years in contract
        roles means I&rsquo;m well-versed in adapting to new teams, patterns and
        codebases; vital qualities in the ever changing front end stack.
      </Para>
      <Para>
        Whether I'm leading design system rollouts, shipping scalable UI
        libraries, or dragging legacy platforms into 2025, I bring a curious,
        pragmatic, user-first approach to every project. I'm keen to join an
        in-house product team where I can help shape the tech, processes &amp;
        culture, together.
      </Para>
    </div>
  );
};

export default Summary;
