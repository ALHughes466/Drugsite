"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TABS = [
  "Introduction to the Activity",
  "Placeholder 2",
  "Placeholder 3",
  "Placeholder 4",
  "Placeholder 5",
  "Placeholder 6",
  "Placeholder 7",
];

function OerNavBar({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (tab: string) => void;
}) {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`sticky top-0 flex h-screen shrink-0 flex-col overflow-hidden border-black/10 transition-[width] duration-300 ease-in-out dark:border-white/10 ${
        open ? "w-56 border-r" : "w-14 border-r-0"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label={open ? "Collapse navigation" : "Expand navigation"}
        className="flex w-14 shrink-0 items-center justify-center py-8"
      >
        <Image
          src="/hamburger-icon.svg"
          alt=""
          width={24}
          height={24}
          className="dark:invert"
        />
      </button>
      <nav className="w-56 shrink-0 overflow-y-auto px-6">
        <ul className="flex w-44 flex-col items-end gap-3">
          {TABS.map((label) => (
            <li key={label} className="w-full text-right">
              <button
                type="button"
                onClick={() => onSelect(label)}
                className={`block w-full text-right text-[12.5pt] leading-snug hover:underline ${
                  selected === label ? "font-semibold underline" : ""
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function CollapsibleSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group py-4">
      <summary className="flex cursor-pointer list-none items-center justify-between font-semibold [&::-webkit-details-marker]:hidden">
        {title}
        <span className="text-black/40 transition-transform group-open:rotate-90 dark:text-white/40">
          &#8250;
        </span>
      </summary>
      <div className="mt-3 flex flex-col gap-3 leading-7">{children}</div>
    </details>
  );
}

interface Reading {
  text: string;
  href?: string;
}

const READINGS: Reading[] = [
  {
    text: 'Bernier, M. "How to Write a D&D Campaign." D&D Beyond.',
    href: "https://www.dndbeyond.com/posts/1671-how-to-write-a-d-d-campaign",
  },
  {
    text: 'Elmore, L. B. "Role Play Research." ABLConnect, Harvard University.',
    href: "https://ablconnect.harvard.edu/role-play-research",
  },
  {
    text: "Arenas, D. L., Viduani, A., & Araujo, R. B. (2022). Therapeutic use of role-playing game (RPG) in mental health: A scoping review. Simulation & Gaming, 53(3), 285–311.",
  },
  {
    text: "Wickramasekera, I. E. (2007). Empathic features of absorption and incongruence. American Journal of Clinical Hypnosis, 50(1), 59–69.",
  },
  {
    text: "Hand, D. (2023). Role-playing games in psychotherapy: A practitioner's guide. Palgrave Macmillan/Springer Nature.",
  },
  {
    text: "Meriläinen, M. (2012). The self-perceived effects of the role-playing hobby on personal development: A survey report. International Journal of Role-Playing, (3), 49–68.",
  },
];

function IntroductionToActivity() {
  return (
    <div className="flex flex-col gap-4 leading-7">
      <p>
        Role-playing games, like Dungeons & Dragons, have recently increased in popularity (due in part to their
        presence in popular media such as &ldquo;Critical Role&rdquo; and &ldquo;Stranger Things&rdquo;). Students are
        familiar with the concept of RPGs; the ruleset and playstyle is easy to transfer to the classroom. Roleplaying
        in general can be used to encourage students to see a situation from a different perspective, empathize with
        others, problem solve under limitations, and develop communication skills. This activity uses custom built
        scenarios to immerse students into roleplaying as a unique character and summarizing their experience from
        the perspective of their character or their character&rsquo;s therapist/counselor.
      </p>
      <p>
        Players create characters, explore a world, and engage in adventures guided by a leader who narrates the
        story and outlines the rules, using dice rolls to determine the outcomes of actions. Players have freedom to
        customize their character and make decisions for how to progress &ldquo;in character.&rdquo;
      </p>
      <p>
        Students are highly motivated to make good choices for their character. Activities like this give students
        practice in navigating scenarios that could be stressful or complex. It also allows students to explore an
        environment, time period, or situation that is otherwise inaccessible (such as &ldquo;visiting&rdquo; the
        French Revolution, or being a member of a different social/cultural/racial group).
      </p>

      <div className="mt-4 flex flex-col divide-y divide-black/10 border-t border-black/10 dark:divide-white/10 dark:border-white/10">
        <CollapsibleSection title="What you need for the activity">
          <p>
            For a class of senior psychology undergraduate students, 6 domains of psychology were chosen as session
            topics: stress, lifespan development, psychopharmacology, industrial/organizational psychology, social
            psychology, and cognition. Other fields could create sessions relevant to their field, such as:
          </p>
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li>Anthropology: focus on different cultures</li>
            <li>Literature: different novels/texts</li>
            <li>History: different time periods</li>
            <li>Biology: different biomes/environments</li>
          </ul>
          <p>
            Sessions happened once every 2 weeks, were prewritten before class time, and conducted during class time.
            Each session varied in length between 10 minutes and 1 hour. Sessions should be tailored around other
            learning that needs to occur in class.
          </p>
          <p>
            A printed character sheet is given to each student. They spend time filling this sheet out. As the
            instructor, you can assign the traits yourself or lead the students through an exercise to choose their
            traits (such as spinning a wheel to determine what race a character is, or flipping a coin to determine
            if a character has 1 or 2 kids). Traits such as gender, sexuality, marital status, living status,
            education obtained, number of kids, occupation, race, income, debt, poverty status, country of origin,
            time period, and many more variables could be used to make each character unique.
          </p>
          <p>
            Each character will also be given a unique array of stats. In traditional roleplaying games, stats are
            sometimes randomized by rolling dice or are chosen from a set of numbers. I&rsquo;ve found that providing
            an array of numbers for students to choose from forces students to prioritize some stats while having to
            sacrifice performance in other stats. Students choose how to balance their &ldquo;stats&rdquo; (or,
            characteristics), which gives them agency over their characters. For this, traditional D&D stats were
            used and fitted to be applicable to the subject matter. These stats include strength, quickness (changed
            from &ldquo;dexterity&rdquo;), health, intelligence, wisdom, and charisma. Higher stats give students
            &ldquo;bonuses&rdquo; on their rolls (+1 or +2 to a roll) and lower stats hurt their chances (-1 or -2).
          </p>
          <p>
            Randomness is important for this activity. Physical dice were used in varying dimensions (20-sided,
            10-sided, 8-sided, 6-sided, 4-sided) in addition to &ldquo;Wheel of Names&rdquo; and Google&rsquo;s
            &ldquo;Dice Roller.&rdquo;
          </p>
        </CollapsibleSection>

        <CollapsibleSection title="Assessment">
          <p>
            Student learning was assessed through reflective writing rather than traditional testing. After each
            session, students submitted a discussion board writeup in which they predicted how their character would
            behave in, or react to, the outcome of that session, supporting their reasoning with scholarly journal
            articles. For psychology students, some chose the option to treat their character as a potential future
            client, considering the situation from a clinical perspective. In other fields, this same structure could
            be adapted by having students write from the perspective of historical figures, animal species, or
            cultural figures instead. At the end of the semester, students synthesized their experience into a brief
            PowerPoint presentation summarizing their character and their journey across the sessions.
          </p>
        </CollapsibleSection>

        <CollapsibleSection title="Designing a Good Session">
          <p>
            While all resources on this section of the site are freely available for you to adapt and copy (with
            credit, please!), there are several ways you can design and run a productive session.
          </p>
          <p>
            Be flexible enough to accommodate all characters. Sessions should be written vaguely enough that any
            student can see their own character within the scenario. Vague framing works better than specific
            framing: rather than &ldquo;Your husband left the house messy before he went to work,&rdquo; a more
            flexible prompt would be, &ldquo;The house is messy, perhaps from kids, roommates, or yourself.&rdquo;
            This wording lets every student interpret the scenario through the lens of their own character&rsquo;s
            circumstances.
          </p>
          <p>
            Focus on one or two character stats per session. Situations with outcomes left up to chance are
            determined by rolling dice tied to a specific stat, or characteristic. It&rsquo;s easiest for students to
            track and engage with a session that emphasizes a few relevant stats rather than trying to use all of
            them at once. Choose stats that make sense for your own field.
          </p>
          <p>
            Build in several rolling opportunities with varying tiers. Students like chance and find it one of the
            most fun parts of the activity! Using dice allows for outcomes beyond a simple success/failure binary;
            the numbers needed for each tier can be set based on how difficult you want the outcome to be, and can
            even be adjusted mid-activity based on how the class is rolling overall. As an example of how you could
            split up outcomes (based on rolling a 20-sided die): rolling a 5 or below results in a bad outcome and a
            -1 penalty to a future roll; 6-8 is a less-than-ideal outcome; 9-12 is an average outcome; 13-16 is a good
            outcome; and 17 or above is a great outcome plus a +1 bonus to a future roll.
          </p>
          <p>
            Stick to one overarching theme. A session built around a single theme works better than one that tries to
            integrate several themes or topics at once.
          </p>
          <p>
            Create opportunities to interact with other characters. Students should have a few chances to interact
            with the other &ldquo;characters&rdquo; in the class over the course of a session. Students are often
            more willing to act out a scenario, or voice a thought, when it&rsquo;s their character doing it rather
            than themselves.
          </p>
          <p>
            Create opportunities for one-on-one roleplay with the instructor. Students should be encouraged to
            interject when it&rsquo;s true to their character, even when that means departing from the planned
            script, and to engage in direct roleplay with the instructor. For example, students were told that even
            if their character had just caught a cold, the character would try to go to work anyway (and potentially
            perform poorly as a result). One student pointed out that her character had leukemia and would be
            unlikely to risk going to work with a cold, and would instead go to the doctor&rsquo;s office; she rolled
            with Charisma to see whether her character&rsquo;s boss would grant her the day off. This kind of
            interaction keeps students actively engaged rather than passively participating.
          </p>
        </CollapsibleSection>

        <CollapsibleSection title="Other Tips and Alterations">
          <p>
            Practice rolling the dice and calculating the outcome based on the character&rsquo;s abilities being used
            during that roll, ahead of time, so the process is smooth during class. Students could also be required
            to reply to other students&rsquo; discussion board post summaries (either in or out of character) to
            further their immersion in the activity. Randomness, whether during character creation or during
            sessions, can be increased or decreased to suit the instructor&rsquo;s goals.
          </p>
        </CollapsibleSection>

        <CollapsibleSection title="How Does It Actually Work?">
          <p>
            View the scenarios on the side to see a writeup of how sessions can go. These are actually sessions that
            have been conducted over multiple semesters and have been effective year after year.
          </p>
        </CollapsibleSection>

        <CollapsibleSection title="Student Feedback and Reception">
          <p>
            Pre- and post-session surveys captured how students experienced the activity. Students appreciated being
            able to customize their characters, and they liked the randomness associated with both character creation
            and session outcomes; some students wanted even more room to customize. They looked forward to upcoming
            sessions and generally felt the activity was good &ldquo;practice&rdquo; for their career goals, and
            reported that it helped them gain knowledge about diverse populations. The most well-liked session was
            the first one, which also involved the most dice rolling of any session in the sequence.
          </p>
          <p>
            Students wanted a transcript of the events they could look back on while writing their reflections; it is
            up to you whether to provide the instructor transcript for them. Students also said the rules were not
            hard to learn, and that it was exciting to participate in an activity they&rsquo;d seen represented in
            popular media.
          </p>
          <p>
            Several students reported feeling challenged when trying to find literature relevant to their characters;
            this broadened their view of how certain groups and topics are underrepresented in research. Students
            also said that realizing their character could be representative of a future client was useful, prompting
            them to consider that character&rsquo;s limitations, differing viewpoints, and priorities.
          </p>
          <p>
            Most students had never played an RPG before; by the end of the campaign, over half of students expressed
            interest in playing one again.
          </p>
        </CollapsibleSection>

        <CollapsibleSection title="Pedagogical Assessment">
          <p>
            The activity was also evaluated more formally, using a pre- and post-activity assessment administered at
            the start and end of the term to measure students&rsquo; attitudes about the activity and to look for
            shifts in empathy over the course of the semester. Two validated instruments were used:
          </p>
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li>
              Toronto Empathy Questionnaire (TEQ): focuses on the emotional reactions of individuals in response to
              the experiences of others, capturing the affective component of empathy through a series of brief,
              straightforward items.
            </li>
            <li>
              Scale of Ethnocultural Empathy (SEE): measures empathy toward people of racial and ethnic backgrounds
              different from one&rsquo;s own.
            </li>
          </ul>
          <p>
            Across the full sample, there were no statistically significant changes in TEQ or SEE scores between the
            pre- and post-activity measures. However, splitting the sample by race (non-white students compared to
            white students) revealed some notable shifts.
          </p>
          <p>
            By the end of the activity, white students felt less confident than they had at the beginning that it was
            easy for them to understand what it would feel like to be someone of another race or ethnic background.
            Non-white students, meanwhile, found it easier by the end of the activity to relate to stories where
            people talked about daily racial or ethnic discrimination than they had at the start; white
            students&rsquo; scores on this measure were unchanged. Non-white students also related more strongly to
            feelings of racial or ethnic isolation by the end of the activity than they had at the beginning.
          </p>
          <p>
            Implications: These patterns suggest the activity may increase cultural awareness and empathy among
            non-white students, while also highlighting, and over the course of the semester correcting, a degree of
            overconfidence among white students about how easily they could understand another group&rsquo;s
            experience.
          </p>
          <p>Data collection is still ongoing!</p>
        </CollapsibleSection>

        <CollapsibleSection title="Adapting the Activity to Other Fields">
          <p>
            The activity doesn&rsquo;t need to be run exactly as described above; several elements can be scaled up,
            down, or reworked depending on an instructor&rsquo;s goals and constraints:
          </p>
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li>This can be a &ldquo;one off&rdquo; rather than a full-semester campaign.</li>
            <li>Information could be selectively given to some students and not others (envelopes, Clue style).</li>
            <li>You don&rsquo;t need to have 6 stats; experiment with more or less.</li>
            <li>
              Several students can work together with the same character rather than everyone having their own
              character.
            </li>
            <li>
              It can be adapted for an asynchronous/online format by writing out the session script beforehand and
              allowing students to roll for themselves and read the outcomes based on their roll (&ldquo;choose your
              own adventure&rdquo; style). PowerPoints that use &ldquo;advance to X slide&rdquo; hyperlinking can also
              be used, and I successfully used them during an online summer class for these exact sessions.
            </li>
            <li>
              For face-to-face courses, absent students can be rolled for and updated later, or provided something
              similar to what an online student might be provided in an asynchronous modality.
            </li>
          </ul>
          <p>
            The core structure of character creation, session-based scenarios, and dice-driven outcomes can be
            adapted to a wide range of fields:
          </p>

          <p className="font-bold">English & Literature</p>
          <p>
            Character creation: Students could create characters who are aspiring writers with different
            backgrounds, writing styles, or who exist in different time periods. Students could also create
            characters that fit within the context of the text currently being read (or simply take on one of the
            characters already in the text).
          </p>
          <p>
            Session topics: &ldquo;Changing the Plot&rdquo; asks how a student&rsquo;s in-universe character would
            react if a pivotal point in the text had been different. &ldquo;Banned Books&rdquo; has student
            characters argue for or against banning certain texts from the perspective of different individuals
            (writers, educators, politicians, people from different time periods, etc.). &ldquo;Writing in
            Secret&rdquo; has student characters represent writers using pseudonyms, exploring what led them to that
            choice, its pros and cons, whether they were successful, and any backlash they faced.
          </p>

          <p className="font-bold">Biology/Other Sciences</p>
          <p>
            Character creation: Students could create characters who are scientists, medical professionals, other
            living organisms, or patients.
          </p>
          <p>
            Session topics: &ldquo;House Hunters&rdquo; asks how a student&rsquo;s created organism would fare in a
            variety of conditions, and whether it would be able to find food, shelter, and so on. &ldquo;Medical
            Results&rdquo; has student characters who have just received medical results (genetic testing, lab
            results, etc.), exploring the prognosis and how that individual is likely to handle the situation; this
            could also bring in ethics and competing motivations, with half the students playing doctors and the
            other half patients. &ldquo;Pandemic&rdquo; explores how different people would be motivated to act and
            react in a pandemic scenario. &ldquo;Mars Needs Help!&rdquo; has students roll to see whether a new
            Martian colony withstands weather events, a viral outbreak, or a lack of resources, problem-solving
            either as occupants on Mars or as scientists working remotely from Earth.
          </p>

          <p className="font-bold">History</p>
          <p>
            Character creation: Students could create characters who are figures from relevant time periods, either
            real-life figures or unnamed people of the era.
          </p>
          <p>
            Session topics: &ldquo;What-If&rdquo; has characters live in a world where a major historical event has
            been changed, and navigate the consequences. &ldquo;Time-Travel&rdquo; has characters from different time
            periods meet and consult with one another about issues of that era, surfacing how their perspectives
            differ on technology, morality, ethics, and society.
          </p>

          <p className="font-bold">Anthropology</p>
          <p>
            Character creation: Students could create characters who are members of different populations than their
            own, current or past.
          </p>
          <p>
            Session topics: &ldquo;Fish-Out-of-Water&rdquo; asks how a character would react in a novel scenario or
            environment. &ldquo;Starting Over&rdquo; asks what kind of new society a student&rsquo;s character would
            build, including what social roles, laws, and rituals it would have, and how it would handle conflict.
            &ldquo;Migration&rdquo; has characters face conflict as they migrate their community due to
            environmental, cultural, or safety challenges, navigating relationships with outside tribes, alliances,
            or trade difficulties.
          </p>

          <p className="font-bold">Sociology/Political Science</p>
          <p>
            Character creation: Students could create characters who are social workers, everyday people, or
            policymakers.
          </p>
          <p>
            Session topics: &ldquo;Urban Planning&rdquo; has characters representing different community members work
            together to design a city policy that satisfies everyone. &ldquo;Fake News&rdquo; explores how a
            spreading false news story would impact the characters, and society more broadly.
          </p>

          <p className="font-bold">Art</p>
          <p>
            Character creation: Students could create characters who are artists, museum curators, art critics, or
            members of the public.
          </p>
          <p>
            Session topics: &ldquo;Censorship&rdquo; asks how different members of the art world&mdash;critics,
            artists, activists, and public figures&mdash;would respond to a modern art installation causing public
            outrage. &ldquo;Is It a Fake?&rdquo; has characters use their skills as art critics to determine whether
            a piece is authentic; characters with higher charisma might have a better chance of gaining access to a
            repository of &ldquo;real&rdquo; pieces for comparison, while characters with higher intelligence might
            recognize a material or technique that hadn&rsquo;t yet been invented at that time.
          </p>
        </CollapsibleSection>

        <CollapsibleSection title="Summary">
          <p>
            Students are invested in a character they create. This activity lets them explore scenarios that
            aren&rsquo;t typically accessible to them, and through research about the topic, students learn about
            other people, cultures, organisms, or time periods along the way. Roleplaying as someone or something
            else turns the activity from passive to more active, and taking on a different perspective leads to
            increased awareness, self-reflection, and empathy.
          </p>
        </CollapsibleSection>

        <CollapsibleSection title="Citations & Further Readings">
          <ul className="flex list-disc flex-col gap-2 pl-5">
            {READINGS.map((reading) => (
              <li key={reading.href ?? reading.text}>
                {reading.href ? (
                  <a
                    href={reading.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:no-underline"
                  >
                    {reading.text}
                  </a>
                ) : (
                  reading.text
                )}
              </li>
            ))}
          </ul>
        </CollapsibleSection>
      </div>
    </div>
  );
}

export default function OpenEducationalResourcesPage() {
  const [selectedTab, setSelectedTab] = useState(TABS[0]);

  return (
    <>
      <header className="w-full py-16 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          <Link href="/open-educational-resources">Open Educational Resources</Link>
        </h1>
        <p className="mt-3">
          <Link href="/" className="text-sm underline hover:no-underline">
            Return to homepage
          </Link>
        </p>
      </header>
      <div className="mx-auto flex w-full max-w-6xl flex-1">
        <OerNavBar selected={selectedTab} onSelect={setSelectedTab} />
        <main className="flex-1 px-8 py-8">
          {selectedTab === "Introduction to the Activity" ? (
            <IntroductionToActivity />
          ) : (
            <div className="flex flex-col gap-4 leading-7">
              <p>Placeholder text.</p>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
