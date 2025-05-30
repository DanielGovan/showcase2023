import SkillsFull from "@copy/SkillsFull";
import ExperienceContract from "@copy/ExperienceContract";
import Summary from "@copy/Summary";
import ExperienceARecent from "@copy/ExperienceARecent";
import ExperiencePermEra from "@copy/ExperiencePermEra";
import InfoSection from "@copy/InfoSection";
import AtAGlance from "@copy/AtAGlance";

// Generalised CV for people to stumble across

export default function ContractCV() {
  return (
    <>
      <section className="flex gap-10">
        <Summary />
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
