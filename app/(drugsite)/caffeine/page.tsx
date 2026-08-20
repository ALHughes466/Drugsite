import DrugArticle from "../drug-article";

export default function CaffeinePage() {
  return (
    <DrugArticle
      title="Caffeine"
      authors={[
        { name: "Kristin Kirchner, Ph.D.", href: "https://www.linkedin.com/in/kristinkirchner/" },
        { name: "Ashleigh Wentworth", href: "https://www.linkedin.com/in/ashleigh-wentworth/" },
        { name: "Shaniya Latimore" },
      ]}
      sections={{
        "Drug identification and classification": (
          <p>
            Caffeine belongs to a group of naturally occurring compounds called methylxanthines, which also includes
            theophylline and theobromine. Caffeine, also known by its chemical name 1,3,7-trimethylxanthine, is a
            psychostimulant that can be consumed in the form of coffee, tea, soft drinks, energy drinks, chocolate, or
            over-the-counter medication (Hart & Ksir, 2022). Unlike many other psychoactive substances, it is legal and
            widely available in everyday products, making it one of the easiest stimulants to obtain. Caffeine has been
            used by many people for centuries, with evidence of use dating back to the Paleolithic period (Barone &
            Roberts, 1984). Because of its affordability and accessibility, caffeine is commonly used by college
            students, shift workers, office employees, athletes, and anyone looking to improve alertness or reduce
            feelings of fatigue. Ferré (2016) explains that caffeine is the most widely consumed psychoactive drug in
            the world because it effectively increases alertness while having a much lower potential for abuse than
            stimulants such as cocaine or amphetamines. People, ranging from teenagers to older adults, use this drug
            to increase their alertness and boost their energy levels.
          </p>
        ),
        "Routes of administration & pharmacokinetics": (
          <p>
            Xanthines are a chemical class made up of caffeine, theophylline, and theobromine (Hart & Ksir, 2022).
            Caffeine is most often administered orally, and in medical cases or for neonatal care it can be
            administered intravenously (Yang et al., 2021). Caffeine is most commonly consumed by mouth through
            beverages such as coffee, tea, soft drinks, and energy drinks. It is also found in chocolate, caffeine
            tablets, and certain over-the-counter medications used to treat headaches and migraines. After ingestion,
            caffeine is rapidly absorbed through the digestive system, and its effects typically begin within about 30
            minutes. Approximately two hours after consumption, peak central nervous system effects can be seen (Hart
            & Ksir, 2022). However, effects can typically be seen within 30 to 60 minutes of absorption (Yang et al.,
            2021). The bioavailability of caffeine when absorbed orally and intravenously is 100% (Malviya et al.,
            2023). The route of administration can affect the absorption of caffeine (Hines et al., 2019). Intravenous
            absorption leads to a faster onset and more intense effects, while oral administration tends to have
            slower effects (Hines et al., 2019).
          </p>
        ),
        "Brain regions, neural systems, and neurotransmitters affected": (
          <>
            <p>
              Caffeine affects several important areas of the brain that regulate alertness, attention, motivation,
              learning, and decision-making. One of the primary regions influenced is the prefrontal cortex, which is
              responsible for planning, concentration, self-control, and higher-order thinking. By increasing activity
              in this area, caffeine can improve focus and mental performance, particularly when a person is tired.
              Another important brain region affected is the nucleus accumbens, which is part of the brain’s reward
              system. This area helps regulate motivation, reinforcement, and goal-directed behavior. According to
              Ferré (2016), caffeine indirectly increases dopamine activity in the nucleus accumbens by blocking
              adenosine receptors. Unlike stimulants such as cocaine or amphetamines, caffeine does not produce a large
              surge of dopamine. Instead, it enhances normal dopamine signaling, allowing people to feel more awake,
              motivated, and mentally engaged without producing the same high potential for addiction.
            </p>
            <p>
              Caffeine also affects the striatum, where adenosine A2A receptors interact with dopamine D2 receptors.
              Blocking these receptors increases movement, alertness, and motivation. In addition, caffeine activates
              the brain’s ascending arousal system, which plays a key role in maintaining wakefulness and reducing
              feelings of fatigue throughout the day. Caffeine also impacts the mesolimbic dopamine pathway and the
              nigrostriatal dopamine pathway (Hsu, Wang, & Chiu, 2010). The mesolimbic pathway is important for reward
              behaviors (Hart & Ksir, 2022). The nigrostriatal pathway is important for movement (Hart & Ksir, 2022).
              Hsu, Wang, & Chiu (2010) found that caffeine indirectly increases dopamine signaling when it blocks the
              adenosine receptors. As a result, dopamine signaling becomes more effective, leading to increased
              alertness, improved concentration, and greater motivation. These effects explain why caffeine is
              commonly used to stay awake while studying, working, or driving. This means that when the dopamine
              signals increase, it causes alertness and locomotor activity. Acute, or short-term, effects of caffeine
              use are stimulation and alertness. Chronic, or long-term, effects are tolerance, dependence, and
              withdrawal.
            </p>
            <p>
              The primary neurotransmitter affected by caffeine is adenosine. Caffeine acts as an antagonist on the
              adenosine receptor (Yang et al., 2021). Adenosine inhibits neurotransmitters, causing a feeling of calm
              and sedation (Hart & Ksir, 2022). Caffeine blocks the adenosine receptors, meaning the neurotransmitters
              cannot send signals to the brain telling it to feel calm and sedated. Caffeine causes the adenosine to
              decrease its neural firing and synaptic transmission, which increases alertness and reduces feelings of
              fatigue. As discussed previously, caffeine directly impacts the adenosine receptors and indirectly impacts
              the dopamine receptors. As a result, dopamine signaling increases indirectly, producing greater alertness,
              faster reaction times, and improved attention without directly stimulating dopamine release. The effects
              of caffeine differ depending on whether it is used occasionally or regularly.
            </p>
          </>
        ),
        "Subjective effects": (
          <p>
            Caffeine has many subjective effects. Childs and de Wit (2006) studied the effects of caffeine on
            non-users to see the effects of caffeine when not influenced by withdrawal. They found that their subjects
            experienced a more positive mood and were more alert (Childs & de Wit, 2006). Childs and de Wit (2006)
            also found that the effects were dose dependent, meaning they were stronger at higher doses. However,
            moderate doses, such as a cup of coffee, produced subjective effects (Childs & de Wit, 2006). An
            experiment conducted by Harrell and Juliano (2009) found that participants described feelings of nausea,
            muscle aches, cold or hot spells, jitteriness, rapid heartbeat, blurred vision, and headaches when
            consuming caffeine. Interestingly, Harrell and Juliano (2009) and Childs and de Wit (2006) both found that
            caffeine can improve reaction time. It is important to note, though, that there can be variability across
            individuals, especially for those who have a tolerance, naturally anxious individuals, and those who
            metabolize caffeine faster or slower. Most people consume caffeine because it helps them feel more awake,
            focused, and energized. Moderate amounts often improve attention, concentration, reaction time, and mood
            while reducing feelings of tiredness. These effects make caffeine especially popular among students, shift
            workers, and individuals performing mentally demanding tasks.
          </p>
        ),
        "Behavioral and physiological effects": (
          <>
            <p>
              The effects of caffeine depend largely on the amount consumed. Lower doses are generally associated with
              improved mental performance and increased alertness, while larger amounts are more likely to produce
              unwanted side effects. According to the textbook, doses of approximately 500 milligrams or more are
              associated with increased heart rate and other physiological changes. High doses may also cause
              anxiety, nervousness, restlessness, insomnia, and jitteriness. Caffeine causes a variety of behavioral
              and physiological effects. Hart and Ksir (2022) found that individuals who regularly had high amounts of
              caffeine performed poorer on mental tasks. They also found that caffeine can help to relieve headaches
              and migraines (Hart & Ksir, 2022). Childs and de Wit (2006) found that caffeine increases attention and
              psychomotor performance but may have a negative effect on memory. Grant and Chamberlain (2018) found
              that high caffeine use increased impulsive behaviors and led to poor decision making and risky behavior.
              However, it is important to note that most research is on extremely high doses of caffeine, and not on
              the average caffeine or coffee consumer.
            </p>
            <p>
              The physiological effects of caffeine include high blood pressure, high heart rate, and an increased
              basal metabolic rate. Childs and de Wit (2006) found an increase in blood pressure and a physical
              activation of the body when participants consumed caffeine. Childs and de Wit (2006) and Hart and Ksir
              (2022) found an increase in heart rate, as well as an irregular heart rate in caffeine users. Hart and
              Ksir (2022) found an increase in the basal metabolic rate of chronic caffeine users. Thölke et al.
              (2025) found that caffeine disrupts individuals’ sleep patterns, making it harder to fall asleep and
              reducing the total sleep time and quality. Wang, Guo, and Chen (2025) found that caffeine impacts the
              composition of our gut microbes, which can then suppress appetite and metabolic regulation.
            </p>
          </>
        ),
        "Tolerance, dependence, and withdrawal": (
          <p>
            There is strong evidence that people will build a tolerance to caffeine when regularly consuming it. Lara
            et al. (2019) found that after 2–3 weeks of regular use, the benefits of caffeine significantly decreased.
            Meredith et al. (2013) found that there were significant physical and psychological dependence symptoms,
            which could be seen as withdrawal symptoms. The physical symptoms they found were headaches, fatigue, and
            decreased alertness (Meredith et al., 2013). The psychological symptoms were continued use despite the
            negative effects, continued use despite trying to quit, and a craving and reliance for mood or
            performance, as well as anxiety, irritability, and disruptions in sleep (Meredith et al., 2013). These
            symptoms begin to occur within 12–24 hours, and peak symptoms tend to occur within 20–48 hours (Meredith
            et al., 2013). The main reason these symptoms occur is because of the brain’s alteration of the adenosine
            receptors. Caffeine blocks adenosine, and as a result the brain increases adenosine receptors (Meredith et
            al., 2013). When the caffeine is gone, the adenosine receptors become overactive, producing withdrawal
            symptoms (Meredith et al., 2013).
          </p>
        ),
        "Side effects & risks": (
          <p>
            Although caffeine is considered safe when consumed in moderation, excessive intake can cause several
            short-term side effects, including anxiety, nervousness, jitteriness, insomnia, an increased heart rate,
            and stomach discomfort. Long-term heavy use may contribute to chronic sleep disturbances, elevated blood
            pressure, and heart rhythm abnormalities in some individuals. While caffeine overdose is uncommon,
            extremely high doses can result in seizures, irregular heart rhythms, and, in severe cases, respiratory
            failure. There are many long-term and short-term effects of caffeine, as well as risks. Similar to what
            has been discussed previously, the short-term side effects of caffeine are increased blood pressure,
            elevated heart rate, nausea, muscle aches, cold or hot spells, jitteriness, blurred vision, and headaches
            (Harrell & Juliano, 2009; Hart & Ksir, 2022). The long-term health risks are an increased risk for
            pancreatic cancer, potential reproductive and birth defects, heart disease, and caffeinism (Hart & Ksir,
            2022). Caffeine overdose is incredibly rare, but when it does occur it is known as caffeinism. This is
            caused by an excessive amount of caffeine consumed, which leads to convulsions and respiratory arrest,
            which is what often causes the overdose and death (Hart & Ksir, 2022). Belayneh and Molla (2020)
            researched the interaction between caffeine and drugs like antidepressants, antipsychotics, cardiovascular
            medication, and antibiotics. They concluded that the effects vary depending on the drug, but it can lead
            to treatment failure, unexpected side effects, toxicity, and an alteration in the drug’s absorption,
            metabolism, and elimination (Belayneh & Molla, 2020).
          </p>
        ),
        "Therapeutic uses": (
          <>
            <p>
              Caffeine can be used in different treatment settings, such as for neonatal care. According to Yang et
              al. (2021), caffeine can be used to treat apnea of prematurity for neonates. Apnea of prematurity is
              caused by an immature central nervous system, and caffeine can help to block the adenosine receptors,
              which influences dopamine and serotonin (Yang et al., 2021). When this happens, breathing and oxygen
              delivery improves (Yang et al., 2021). One off-label medical use for caffeine is a high dose of caffeine
              for weight loss. Viana et al. (2018) found that caffeine increases resting expenditure and enhances
              lipid metabolism. As a result, caffeine has been included in some weight loss drugs, but the dosing can
              be inconsistent (Viana et al., 2018). It is commonly included in medications used to treat migraines and
              tension headaches because it improves the effectiveness of some pain relievers by constricting blood
              vessels in the brain. Research has also found that moderate caffeine consumption, generally equal to two
              or three cups of coffee per day for most healthy adults, may provide health benefits, including improved
              alertness and a lower risk of developing type 2 diabetes.
            </p>
            <p>
              To reduce potential risks, individuals should limit excessive caffeine intake, avoid consuming large
              amounts of energy drinks or caffeine tablets, and avoid combining caffeine with alcohol or other
              stimulants. Pregnant women and individuals with heart disease, anxiety disorders, or other medical
              conditions should consult a healthcare provider to determine an appropriate daily intake. Because
              caffeine is legal, inexpensive, and widely available, many people assume it is completely harmless.
              While moderate consumption is generally considered safe for most healthy adults, research has shown
              that excessive use can contribute to dependence, withdrawal, anxiety, sleep disturbances, and other
              health concerns.
            </p>
          </>
        ),
        "Controversies, misconceptions, and public perception": (
          <p>
            Caffeine, while widely studied, still has some myths and controversies. For instance, people believe
            caffeine gives you energy. However, caffeine does not give you energy; it just blocks the adenosine
            receptors, making you feel more alert and awake. Another myth about caffeine is that if you drink it
            early, you will have no problem going to sleep. The half-life of caffeine is about 3 hours, so it stays in
            the system longer than you would think (Hart & Ksir, 2022). These two myths go along with the media’s
            portrayal of caffeine. Caffeine does improve alertness and reduce fatigue, but it takes time to get into
            your system and does not stay forever (Hart & Ksir, 2022). One stigma that can be seen frequently is the
            idea of the pressures of a productivity culture. Today’s culture has drawn a fine line between the use and
            dependence of caffeine, which can be seen in this stigma. One of the most debated scientific topics of
            caffeine is dependence vs. addiction. We have seen that people build a tolerance to caffeine, but
            scientists debate whether caffeine dependence should be seen as an addiction. Caffeine affects the same
            reward pathways that drugs like nicotine or opioids do, yet it is not considered an addiction (Hsu, Wang,
            & Chiu, 2010). So, while there is still a debate, caffeine remains a dependence and not an addiction.
          </p>
        ),
      }}
      references={[
        {
          text: "Barone, J. J., & Roberts, H. (1984). Human consumption of caffeine. In P. B. Dews (Ed.), Caffeine. Springer.",
          href: "https://doi.org/10.1007/978-3-642-69823-1_4",
        },
        {
          text: "Belayneh, A., & Molla, F. (2020). The effect of coffee on pharmacokinetic properties of drugs: A review. BioMed Research International, 2020, Article 7909703.",
          href: "https://doi.org/10.1155/2020/7909703",
        },
        {
          text: "Childs, E., & de Wit, H. (2006). Subjective, behavioral, and physiological effects of acute caffeine in light, nondependent caffeine users. Psychopharmacology, 185(4), 514–523.",
          href: "https://doi.org/10.1007/s00213-006-0341-3",
        },
        {
          text: "Ferré, S. (2016). Mechanisms of the psychostimulant effects of caffeine: Implications for substance use disorders. Psychopharmacology, 233(10), 1963–1979.",
          href: "https://doi.org/10.1007/s00213-016-4212-2",
        },
        {
          text: "Grant, J. E., & Chamberlain, S. R. (2018). Caffeine's influence on gambling behavior and other types of impulsivity. Addictive Behaviors, 76, 156–160.",
          href: "https://doi.org/10.1016/j.addbeh.2017.08.007",
        },
        {
          text: "Harrell, P. T., & Juliano, L. M. (2009). Caffeine expectancies influence the subjective and behavioral effects of caffeine. Psychopharmacology, 207(3), 335–342.",
          href: "https://doi.org/10.1007/s00213-009-1658-5",
        },
        {
          text: "Hart, C. L., & Ksir, C. (2022). Drugs, society & human behavior (18th ed.). McGraw-Hill Education.",
        },
        {
          text: "Hines, R. M., Khumnark, M., Macphail, B., & Hines, D. J. (2019). Administration of micronized caffeine using a novel oral delivery film results in rapid absorption and electroencephalogram suppression. Frontiers in Pharmacology, 10, 983.",
          href: "https://doi.org/10.3389/fphar.2019.00983",
        },
        {
          text: "Hsu, C. W., Wang, C. S., & Chiu, T. H. (2010). Caffeine and a selective adenosine A2A receptor antagonist induce sensitization and cross-sensitization behavior associated with increased striatal dopamine in mice. Journal of Biomedical Science, 17, 4.",
          href: "https://doi.org/10.1186/1423-0127-17-4",
        },
        {
          text: "Lara, B., Ruiz-Moreno, C., Salinero, J. J., & Del Coso, J. (2019). Time course of tolerance to the performance benefits of caffeine. PLOS ONE, 14(1), e0210275.",
          href: "https://doi.org/10.1371/journal.pone.0210275",
        },
        {
          text: "Malviya, A. K., Saranlal, A. M., Mulchandani, M., & Gupta, A. (2023). Caffeine – Essentials for anaesthesiologists: A narrative review. Journal of Anaesthesiology, Clinical Pharmacology, 39(4), 528–538.",
          href: "https://doi.org/10.4103/joacp.joacp_285_22",
        },
        {
          text: "Meredith, S. E., Juliano, L. M., Hughes, J. R., & Griffiths, R. R. (2013). Caffeine use disorder: A comprehensive review and research agenda. Journal of Caffeine Research, 3(3), 114–130.",
          href: "https://doi.org/10.1089/jcr.2013.0016",
        },
        {
          text: "Thölke, P., Arcand-Lavigne, M., Lajnef, T., et al. (2025). Caffeine induces age-dependent increases in brain complexity and criticality during sleep. Communications Biology, 8, 685.",
          href: "https://doi.org/10.1038/s42003-025-08090-z",
        },
        {
          text: "Viana, C., Zemolin, G. M., Dal Molin, T. R., Gobo, L., Ribeiro, S. M., Leal, G. C., Marcon, G. Z., & de Carvalho, L. M. (2018). Detection and determination of undeclared synthetic caffeine in weight loss formulations using HPLC-DAD and UHPLC-MS/MS. Journal of Pharmaceutical Analysis, 8(6), 366–372.",
          href: "https://doi.org/10.1016/j.jpha.2017.12.004",
        },
        {
          text: "Wang, M., Guo, W., & Chen, J. F. (2025). Caffeine: A potential mechanism for anti-obesity. Purinergic Signalling, 21(4), 893–909.",
          href: "https://doi.org/10.1007/s11302-024-10022-1",
        },
        {
          text: "Yang, L., Yu, X., Zhang, Y., Liu, N., Xue, X., & Fu, J. (2021). Encephalopathy in preterm infants: Advances in neuroprotection with caffeine. Frontiers in Pediatrics, 9, 724161.",
          href: "https://doi.org/10.3389/fped.2021.724161",
        },
      ]}
    >
      <p>
        Caffeine is the most widely consumed psychoactive drug in the world, with millions of people using it every
        day. It is naturally found in coffee, tea, chocolate, and some soft drinks, and it is also added to many
        energy drinks and over-the-counter medications. Most people consume caffeine to increase alertness, improve
        concentration, and reduce fatigue. Although its use is legal and socially accepted, caffeine is still a
        stimulant that affects both the brain and the body. Regular use can influence neurotransmitters, alter
        behavior, and eventually lead to tolerance, dependence, and withdrawal.
      </p>
    </DrugArticle>
  );
}
