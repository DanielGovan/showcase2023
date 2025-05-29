import SummaryPerm from "@copy/SummaryPerm";
import SkillsFull from "@copy/SkillsFull";
import ExperiencePermEra from "@copy/ExperiencePermEra";
import ExperienceContractBrief from "@copy/ExperienceContractBrief";
import ExperienceARecent from "@copy/ExperienceARecent";
import InfoSection from "@copy/InfoSection";

// CV aimed towards perm work

export default function PermCV() {
  return (
    <>
      <section>
        <SummaryPerm />
      </section>
      <section>
        <SkillsFull />
      </section>
      <div className="md:flex print:block gap-12">
        <section>
          <ExperienceARecent />
          <ExperienceContractBrief />
          <ExperiencePermEra />
        </section>

        <section>
          <InfoSection />
        </section>
      </div>
    </>
  );
}
