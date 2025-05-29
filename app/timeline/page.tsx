import ExperiencePermEra from "@copy/ExperiencePermEra";
import ExperienceARecent from "@copy/ExperienceARecent";
import ExperienceContract from "@copy/ExperienceContract";

export default function TimelinePage() {
  return (
    <>
      Opportuity for tone and nift. Jobs, line, notes?
      <div className="md:flex print:block gap-12">
        <section>
          <ExperienceARecent />
          <ExperienceContract />
          <ExperiencePermEra />
        </section>
      </div>
    </>
  );
}
