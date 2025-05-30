import SkillsFull from "@copy/SkillsFull";
import ExperienceContract from "@copy/ExperienceContract";
import SummaryContract from "@copy/SummaryContract";
import ExperienceARecent from "@copy/ExperienceARecent";
import ExperiencePermEra from "@copy/ExperiencePermEra";
import InfoSection from "@copy/InfoSection";
import AtAGlance from "@copy/AtAGlance";

// CV aimed towards contract work

export default function ContractCV() {
  return (
    <>
      <section className="flex gap-10">
        <SummaryContract />
        <AtAGlance />
      </section>
      <section>
        <SkillsFull />
      </section>
      <div className="md:flex print:block gap-12">
        <section>
          <ExperienceARecent />
          <ExperienceContract />
          <ExperiencePermEra />
        </section>

        <section>
          <InfoSection />
        </section>
      </div>
    </>
  );
}
