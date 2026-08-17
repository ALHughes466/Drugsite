import DrugArticle from "../drug-article";

export default function SleepingPillsPage() {
  return (
    <DrugArticle
      title="Sleeping Pills"
      authors={[
        { name: "Kristin Kirchner, Ph.D.", href: "https://www.linkedin.com/in/kristinkirchner/" },
        { name: "Jordan Hunley" },
      ]}
      sections={{
        "Drug identification and classification": (
          <p>
            Nonbenzodiazepine sedative-hypnotics are also known by &ldquo;Z-drugs,&rdquo; &ldquo;A-minus,&rdquo; and
            &ldquo;no-go pills.&rdquo; The class of drug is sedative-hypnotic and is a medical Schedule IV controlled
            substance. Sedative-hypnotic drugs are typically used for short-term treatment of insomnia.
          </p>
        ),
        "Routes of administration & pharmacokinetics": (
          <>
            <p>
              The most common route of administration is oral tablets, but some medications offer oral spray,
              sublingual tablet, and intravenous (IV) administration. Onset of action is extremely quick; however,
              the extended-release (ER) oral tablets might take double the time of the immediate-release (IR) forms.
              The peak efficacy is an hour after administration, and the half-life is about 90 minutes after.
              Bioavailability in sedative-hypnotics is somewhat high, but some brands (like Sonata) have lower
              bioavailability (30%). The most used nonbenzodiazepine hypnotic-sedative medications, like Zolpidem,
              have a bioavailability of 65–70%, and the Eszopiclone oral pill has 75–80% bioavailability.
            </p>
            <p>
              The oral administration is absorbed through the gastrointestinal tract, reaching the stomach first.
              Evidence has shown that eating high-fat meals before or with taking sedative-hypnotics might delay the
              onset of the medication.
            </p>
          </>
        ),
        "Brain regions & neural systems affected": (
          <p>
            A primary brain region impacted by nonbenzodiazepine sedative-hypnotics is the limbic system. The
            thalamus, hippocampus, hypothalamus, and ventrolateral preoptic nucleus (VLPO) are most impacted. Most
            of these regions work together before or during sleep.
          </p>
        ),
        "Neurotransmitters & circuits affected": (
          <>
            <p>
              The primary neurotransmitter affected is gamma-aminobutyric acid (GABA), important in relaxation. It
              blocks signals in the central nervous system (CNS), which makes it an inhibitory neurotransmitter.
            </p>
            <p>
              Nonbenzodiazepine sedative-hypnotics are agonist drugs that bind to GABA-A α-1 receptors, enhancing the
              effects of GABA. Downstream effects include CNS impairment, depressing brain activity like memory
              loss, and gastrointestinal issues.
            </p>
          </>
        ),
        "Subjective effects": (
          <>
            <p>
              Common psychological effects reported by users are confusion, lapses in memory, and mood changes.
              Mood changes can be depression, hostility, anxiousness, suicidal thoughts, or visual and auditory
              hallucinations. Users also report changes in perception and cognitive abilities the day following
              administration of the medication. These subjective effects are reported to be heightened when
              individuals take high doses of the medication.
            </p>
            <p>
              Enhanced effects of the medication are reported in geriatric individuals, which might heighten the
              risk of falls and delirium. Gender differences are present as well, with increased drug presence in
              blood levels in female patients.
            </p>
          </>
        ),
        "Behavioral and physiological effects": (
          <>
            <p>
              Behavioral effects can take place during the night and the following day. Effects can be changes in
              impulse control, motor control, parasomnia, or complex sleep behavior. Complex sleep behavior (CSB)
              involves actions or activities while a person is asleep, such as walking, phone usage, cooking,
              eating, talking, and operation of heavy machinery. The next-day impairment of cognitive functions
              directly affects motor functioning, reaction time, and blurred vision. Mood changes, motivation
              changes, increased irritability, and compulsive behaviors are also possible.
            </p>
            <p>
              There has also been evidence of increased respiratory depression and gastrointestinal issues,
              including an increased risk of renal failure in patients with existing renal issues.
            </p>
          </>
        ),
        "Tolerance, dependence, and withdrawal": (
          <p>
            There has been evidence of tolerance developing over prolonged use and high dosage. Signs of withdrawal
            might include delirium, headaches, dysphoria, cramping, fatigue, or vomiting. The regions in the brain
            affected by hypnotic-sedative drugs become accustomed to higher levels of GABA. Without the sedating
            mechanism of action provided by the drug, there can be an excess of neural activity.
          </p>
        ),
        "Side effects & risks": (
          <p>
            Evidence of side effects can be seen as soon as the next day after taking, which can include cognitive
            impairment, double or blurry vision, dizziness, amnesia, and complex sleep behaviors. Long-term health
            risks can range from memory loss leading to dementia like Alzheimer’s, severe insomnia, and
            gastrointestinal issues. Overdose can cause severe CNS impairment and depression, coma, cardiovascular
            issues, and death. Interactions with other CNS depressants like opioids and alcohol can increase the
            likelihood of cognitive and motor function impairment. Specific drugs like Rifampin and St. John’s Wort
            can decrease the efficiency of the drug, while drugs like Ketoconazole can increase the efficiency of the
            drug.
          </p>
        ),
        "Therapeutic uses": (
          <p>
            The FDA heavily regulates sedative-hypnotics in an attempt to prevent overuse, in hopes of avoiding
            abuse, addiction, and death.
          </p>
        ),
        "Controversies, misconceptions, and public perception": <p>Placeholder text.</p>,
      }}
      references={[
        {
          text: "Bouchette, D., Akhondi, H., Patel, P., et al. (2024). Zolpidem. In StatPearls [Internet]. StatPearls Publishing.",
          href: "https://www.ncbi.nlm.nih.gov/books/NBK442008/",
        },
        {
          text: "Ferrara, M., Moroni, F., De Gennaro, L., & Nobili, L. (2012). Hippocampal sleep features: Relations to human memory function. Frontiers in Neurology, 3, 57.",
          href: "https://doi.org/10.3389/fneur.2012.00057",
        },
        {
          text: "Gunja, N. (2013). The clinical and forensic toxicology of Z-drugs. Journal of Medical Toxicology, 9(2), 155–162.",
          href: "https://doi.org/10.1007/s13181-013-0292-0",
        },
        {
          text: "National Center for Biotechnology Information. (2026). PubChem compound summary for CID 5732, Zolpidem.",
          href: "https://pubchem.ncbi.nlm.nih.gov/compound/Zolpidem",
        },
        {
          text: "Sanofi-Aventis. (2022). Ambien (zolpidem): Highlights of prescribing information.",
        },
        {
          text: "Sunovion Pharmaceuticals Inc. (2019). Lunesta: Highlights of prescribing information.",
        },
        {
          text: "Zhu, W., Huang, L., Cheng, H., Li, N., Zhang, B., Dai, W., Wu, X., Zhang, D., Feng, W., Li, S., & Xu, H. (2024). GABA and its receptors’ mechanisms in the treatment of insomnia. Heliyon, 10(23).",
          href: "https://doi.org/10.1016/j.heliyon.2024.e40665",
        },
      ]}
    >
      <p>
        Nonbenzodiazepine sedative-hypnotic drugs (also known as &ldquo;Z-drugs&rdquo;) are short-term medications
        used to treat insomnia. The drug binds to GABA-A α-1 receptors, which increase GABA in the limbic system in
        the brain, resulting in calming effects and sleep initiation. Dangerous side effects are complex sleep
        behavior, memory and cognitive impairment. Short-term effects are amnesia, depression, irritability, and
        next-day impairment like drowsiness, blurry vision, and delayed reaction time. There is a risk for tolerance
        and withdrawal with prolonged use and dosage change. Signs of withdrawal might appear in the form of
        vomiting, headaches, rebound insomnia, and mood instability.
      </p>
    </DrugArticle>
  );
}
