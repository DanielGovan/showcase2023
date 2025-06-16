import Para from "../components/Para";
import SectionHeader from "../components/SectionHeader";

const SummaryContract = () => {
  return (
    <div className="flex-3/4 print:flex-3/5">
      <SectionHeader>Summary</SectionHeader>
      <Para>
        Hi, I'm Dan! As well as the standard expertise in React and the modern
        front-end stack, 20 years of being the glue between design &amp;
        development has given me a collaborative focus and a great eye for UI,
        while 10 years in contract roles means I&rsquo;m well-versed in adapting
        to new teams and codebases; I love diving into new codebases to pick up
        and improve on established patterns.
      </Para>
      <Para>
        Whether I'm leading design system rollouts, shipping scalable UI
        libraries, or dragging legacy platforms into the modern era, I bring a
        curious, pragmatic, user-first approach to every project.
      </Para>
    </div>
  );
};

export default SummaryContract;
