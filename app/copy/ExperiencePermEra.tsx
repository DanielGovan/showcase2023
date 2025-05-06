import { Li, Ul } from "../components/List";
import Para from "../components/Para";
import Place from "../components/Place";
import SectionHeader from "../components/SectionHeader";

const ExperiencePermEra = () => {
  return (
    <>
      <SectionHeader>Permenant roles 2006 – 2015</SectionHeader>
      <Place
        title="Creative Technologist"
        company="MetaBroadcast"
        companyType="In-house"
        dates="Jul 2014 - Jun 2015"
        employmentType="Part-time"
        location="London"
        locationType="On-site"
      >
        <Para>
          Joined a backend engineering team to build experimental UIs using
          JavaScript to consume and test TV metadata APIs for the BBC. Also
          contributed to the company blog and spoke at monthly meetups.
        </Para>
      </Place>
      <Place
        title="Senior Interactive Web Developer"
        company="VML London"
        companyType="Agency"
        dates="Nov 2012 - Feb 2014"
        employmentType="Full-time"
        location="Camden London"
        locationType="On-site"
      >
        <Para>
          Responsive CSS/UX Lead on builds from microsites to enterprise-level
          CQ builds, for Colgate, Premier Inn &amp; Premier League.
        </Para>
        <Ul>
          <Li>
            Frontend lead on a 6-month fluid mobile build (£3M revenue pw, 500k
            dailies).
          </Li>
          <Li>
            Organised knowledge-sharing workshops. Portraits &amp; events
            photographer.
          </Li>
        </Ul>
      </Place>
      <Place
        title="Interface Developer"
        company="MRM London"
        companyType="Agency"
        dates="Apr 2006 - Nov 2012"
        employmentType="Full-time"
        location="Southwark London"
        locationType="On-site"
      >
        <Para>
          Starting as an Associate before promotion to Front-End Developer and
          then Interface Developer, I worked in HTML, CSS &amp; jQuery to
          reconcile the work of copywriters, designers &amp; backend, to build
          &amp; localise sites & HTML emails for clients like Intel, Nationwide,
          Vauxhall, Sky Movies, MSN &amp; MasterCard.
        </Para>
        <Ul>
          <Li>
            Intel facebook campaign, &amp; iPad/PhoneGap apps for Regus &amp;
            The Mall.
          </Li>
          <Li>Championed responsive &amp; parallax design.</Li>
          <Li>Led initiatives in bridging the tech &amp; creative teams.</Li>
          <Li>Presented on company values &amp; best practice.</Li>
        </Ul>
      </Place>
    </>
  );
};

export default ExperiencePermEra;
