import DrugArticle from "../drug-article";

export default function AnticonvulsantsPage() {
  return (
    <DrugArticle
      title="Anticonvulsants"
      authors={[
        { name: "Kristin Kirchner, Ph.D.", href: "https://www.linkedin.com/in/kristinkirchner/" },
        { name: "Brittney Cobb" },
        { name: "Cayden McElroy", href: "https://www.linkedin.com/in/cayden~mcelroy/" },
      ]}
      sections={{
        "Drug identification and classification": (
          <p>
            Topiramate, or Topamax, is a sulfamate-substituted monosaccharide, an anticonvulsant or antiepileptic
            drug (AED). While it lacks common recreational street names, it has acquired the colloquial moniker
            &ldquo;Dopamax&rdquo; due to its well-documented impacts on cognitive processing (Hart & Ksir, 2022).
            Topiramate is a prescription drug (Schedule IV) in the US. Its group of users is heterogeneous, as it
            includes children and adults with seizure disorders, adults to whom it is prescribed as migraine
            prophylaxis, and those using it off-label for psychiatric disorders, including alcohol use disorder.
          </p>
        ),
        "Routes of administration & pharmacokinetics": (
          <p>
            Topiramate is only administered orally, as immediate-release tablets, sprinkle capsules, and
            extended-release capsules. It is readily absorbed, with its bioavailability being about 80%. The maximum
            plasma concentration occurs between 2 and 3 hours, and the elimination half-life is very high, at
            approximately 21 hours. Topamax can last anywhere from twelve to twenty-four hours (Shank & Maryanoff,
            2008). The absorption of the medicine is not greatly influenced by food consumption. The main cause of
            variability is each individual’s different metabolism and kidney function. The slow oral
            pharmacokinetics cause a sustained effect due to its excretion, principally unchanged, in the urine.
            This is quite dissimilar to inhaled substances, which do not allow a quick rush, making recreational
            distraction not so salient (Hart & Ksir, 2022). Because Topamax is long-lasting, this means that side
            effects may also be long-lasting, especially if not taken in proper doses.
          </p>
        ),
        "Brain regions & neural systems affected": (
          <p>
            Topiramate has a neurobiological effect on the cerebral cortex, hippocampus, and amygdala. It operates by
            inhibiting hyperactivity in the mesolimbic dopamine system, which is central to reward and addictive
            behavior. Seizures are caused by overly excitable neural firing, so by reducing excitability in these
            regions, Topamax helps prevent the spread of seizures (Walker & Sander, 1996). Acute use inhibits
            excessive neuronal firing, whereas chronic use leads to neuroadaptive changes by modulating both
            excitatory glutamatergic and inhibitory GABAergic systems. Since executive function is controlled by the
            cortex, memory is regulated by the hippocampus, and emotional reactivity is controlled by the amygdala,
            the direct correlation between topiramate and the observable cognitive and mood improvements becomes
            evident (Hart & Ksir, 2022). Chronic use may cause long-lasting alterations, like receptor sensitivity.
            Cognitive slowing could also occur due to prolonged inhibition (Steele et al., 2024).
          </p>
        ),
        "Neurotransmitters & circuits affected": (
          <p>
            Topiramate possesses a distinct pharmacological profile. It is a gamma-aminobutyric acid (GABA) positive
            allosteric modulator of GABA-A receptors that enables inhibitory transmission. Simultaneously, it
            interacts as an antagonist at the AMPA/kainate form of glutamate receptor, thus suppressing excitatory
            transmission. It also inhibits sodium channels, which are voltage-dependent. Simultaneously modulating
            GABA and glutamate results in the net downstream effect of reducing neuronal firing rates, which is why
            it is effective in preventing seizures and stabilizing psychiatric symptoms (Valencia et al., 2023;
            Shank & Maryanoff, 2008).
          </p>
        ),
        "Subjective effects": (
          <p>
            The subjective effects of topiramate are very dose-dependent based on empirical research. Low-dose
            therapy can be considered neurostabilizing, and there are reports of reducing anxiety levels. But
            subjective experience often changes to cognitive slowing, with memory retrieval problems and
            word-finding difficulties, at higher therapeutic doses (Steele et al., 2024). Diplopia (double vision)
            may be included in the perceptual changes. Notably, topiramate is not associated with a euphoric high;
            hence, the medication does not have positive subjective reinforcing effects, which also leads to a
            higher dropout rate because of the unpleasant cognitive side effects (Chen et al., 2024).
          </p>
        ),
        "Behavioral and physiological effects": (
          <p>
            Among the physiological effects of topiramate, a major impact is a marked reduction in weight due to
            decreased appetite and changes in taste (usually a metallic taste). Observable behavioral changes
            include reduced seizure activity and improved migraine prevention. For the off-label use of weight loss
            and alcohol use disorder, it can reduce impulsivity or cravings. It can cause mild dizziness and
            paresthesia (tingling) in the extremities as well. The negative behavioral changes are manifested by
            adverse effects on attention and short-term memory. On the contrary, in the case of impulse control
            disorders, it plays a positive role in decision-making because it minimizes deficits in the form of
            craving and inhibition. It can slow the heart rate, and it possesses central nervous system depressive
            properties, which is physiologically possible (Hart & Ksir, 2022).
          </p>
        ),
        "Tolerance, dependence, and withdrawal": (
          <p>
            Topiramate has a low likelihood of tolerance to its antiseizure effects, unlike benzodiazepines. But it
            does cause physical dependence, as a result of the central nervous system adapting to a permanent
            GABAergic tone. Sudden discontinuation may trigger a relapse of glutamatergic excitation, resulting in a
            withdrawal syndrome. The symptoms usually appear within 24–72 hours, with severe rebound seizures (which
            may be fatal), agitation, and insomnia. Due to this physical dependence, clinicians should not withdraw
            patients rapidly from the drug, as it may result in severe neurotoxic withdrawal (Hart & Ksir, 2022;
            Steele et al., 2024).
          </p>
        ),
        "Side effects & risks": (
          <p>
            The side-effect profile of topiramate is robust. The short-term side effects include dose-related
            cognitive impairment (memory loss, confusion), dizziness, and paresthesia. Acute angle-closure glaucoma
            is a rare risk; nephrolithiasis (kidney stones) is among the long-term health risks. In terms of bone
            health, the latest pharmacovigilance evidence reveals that antiepileptic drugs, including topiramate,
            could be linked to an increased risk of osteopenia, and patients who take them should be subject to
            clinical observation (Yang et al., 2025). Moreover, topiramate has interactions with alcohol; since both
            are CNS depressants, the combination of the two will have an additive effect, which causes severe
            intellectual impairment and increased respiratory depression.
          </p>
        ),
        "Therapeutic uses": (
          <p>
            Topiramate has been approved by the FDA for the prevention of partial-onset seizures, primary
            generalized tonic-clonic seizures, and migraine prophylaxis (Walker & Sander, 1996). Topiramate is now
            being used off-label in alcohol use disorder as a harm-reduction drug. It is also important to note that
            in clinical trials, it has proven effective in decreasing the number of heavy drinking days, with its
            activity affected by genetic differences, including the GRIK1 polymorphism, opening the path toward
            personalized medicine in the addiction domain (Kranzler et al., 2014). The medical community sees this
            as an important pharmacotherapeutic bridge, and it is noted that topiramate would help minimize the
            public health burden of alcohol dependence.
          </p>
        ),
        "Controversies, misconceptions, and public perception": (
          <p>
            The most notable controversy with regard to topiramate is the Dopamax stigma. The extent of cognitive
            side effects is more often than not overstated in the media, which causes patients to shun seizure
            drugs. Scientifically, although the decline in cognition is a known risk, it is usually dose-dependent
            and reversible. In addition, the pathophysiology of topiramate’s efficacy in migraines, including how
            this medication affects oxidative stress and neurogenic inflammation, is a recent discussion among
            neurologists (Chen et al., 2024).
          </p>
        ),
      }}
      references={[
        {
          text: "Chen, Q.-W., Meng, R.-T., & Ko, C.-Y. (2024). Modulating oxidative stress and neurogenic inflammation: The role of topiramate in migraine treatment. Frontiers in Aging Neuroscience, 16.",
          href: "https://doi.org/10.3389/fnagi.2024.1455858",
        },
        {
          text: "Hart, C. L., & Ksir, C. (2022). Drugs, society & human behavior (18th ed.). McGraw-Hill Education.",
        },
        {
          text: "Kranzler, H. R., Covault, J., Feinn, R., Armeli, S., Tennen, H., Arias, A. J., Gelernter, J., Pond, T., Oncken, C., & Kampman, K. M. (2014). Topiramate treatment for heavy drinkers: Moderation by a GRIK1 polymorphism. The American Journal of Psychiatry, 171(4), 445–452.",
          href: "https://doi.org/10.1176/appi.ajp.2013.13081014",
        },
        {
          text: "Shank, R. P., & Maryanoff, B. E. (2008). Molecular pharmacodynamics, clinical therapeutics, and pharmacokinetics of topiramate.",
          href: "https://onlinelibrary.wiley.com/doi/full/10.1111/j.1527-3458.2008.00041.x",
        },
        {
          text: "Steele, J. W., Krishnan, V., & Finnell, R. H. (2024). Mechanisms of neurodevelopmental toxicity of topiramate. Critical Reviews in Toxicology, 54(7), 465–475.",
          href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11296906/",
        },
        {
          text: "Valencia, I., Alexander, A. L., Andrade, D. M., Arevalo-Astrada, M., Rubiños, C., Auer, N., Bainbridge, J. L., Baxendale, S. A., Bartolomei, F., Becker, D. A., Berg, A. T., Bernasconi, A., Bernasconi, N., Bernhardt, B., Bhatnagar, S., Blümcke, I., Blumenfeld, H., Buchanan, G. F., Burdette, D. E., ... Jobst, B. C. (2023). Highlights from the annual meeting of the American Epilepsy Society 2022. Epilepsy Currents.",
          href: "https://doi.org/10.1177/15357597231187227",
        },
        {
          text: "Walker, M. C., & Sander, J. W. (1996). Topiramate: A new antiepileptic drug for refractory epilepsy. Seizure, 5(3), 199–203.",
          href: "https://www.seizure-journal.com/article/S1059-1311(96)80036-7/pdf",
        },
        {
          text: "Yang, N., Han, X., Hua, H., Wang, Y., Chen, Y., Zhou, Y., & Feng, H. (2025). Evaluating the risk of osteopenia-related adverse events with antiepileptic drugs: A pharmacovigilance study based on the FAERS database. Frontiers in Pharmacology, 16.",
          href: "https://doi.org/10.3389/fphar.2025.1685289",
        },
      ]}
    >
      <p>
        Overall, topiramate is a multifaceted anticonvulsant with a distinct neurobiological mechanism that includes
        the dual pathways of modulation of GABA and glutamate. However, as its pharmacodynamics can be used with
        strong clinical efficacy to treat epilepsy and alcohol dependence, they are counterbalanced by a complex
        side-effect profile, such as cognitive impairment and osteopenia risk (Yang et al., 2025). Topiramate is an
        important harm-reducing tool with regard to mental health policy. One outstanding question that needs to be
        addressed in future research is how we can use genetic markers to inform personalized dosing to optimize
        therapeutic effects and reduce the distressing cognitive side effects (Kranzler et al., 2014).
      </p>
    </DrugArticle>
  );
}
