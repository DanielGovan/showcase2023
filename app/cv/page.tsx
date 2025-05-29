import SkillsFull from "@copy/SkillsFull";
import ExperienceContract from "@copy/ExperienceContract";
import SummaryContract from "@copy/SummaryContract";
import ExperienceARecent from "@copy/ExperienceARecent";
import ExperiencePermEra from "@copy/ExperiencePermEra";
import InfoSection from "@copy/InfoSection";

// CV aimed towards contract work

export default function ContractCV() {
  return (
    <>
      <section>
        <SummaryContract />
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
