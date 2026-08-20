import DrugArticle from "../drug-article";

export default function AntidepressantsPage() {
  return (
    <DrugArticle
      title="Antidepressants"
      authors={[
        { name: "Kristin Kirchner, Ph.D.", href: "https://www.linkedin.com/in/kristinkirchner/" },
        { name: "Alaycia Rowe" },
      ]}
      sections={{
        "Drug identification and classification": (
          <>
            <p>
              Antidepressants can be sorted into many groups: SSRIs, SNRIs, TCAs, MAOIs, and other &ldquo;atypical&rdquo; drugs
              (Sheffler et al., 2023). In the U.S., antidepressants are not available over the counter and require a
              prescription (NIMH, n.d.). According to national data for 2023, a little over 11% of adults in America take a
              prescription for depression (NIMH, n.d.).
            </p>
            <p>
              Most people start antidepressants because of signs of depression, but antidepressants are also common in
              treating anxiety disorders like panic disorder, social anxiety, and generalized anxiety (NIMH, n.d.; Sheffler
              et al., 2023).
            </p>
          </>
        ),
        "Routes of administration & pharmacokinetics": (
          <>
            <p>
              Nearly all antidepressants are swallowed capsules, tablets, or liquids (Sheffler et al., 2023). This is
              optimal for steady, long-lasting effects. There are a handful of exceptions: transdermal patches are offered
              for selegiline, and nasal sprays for esketamine (NIMH, n.d.; Sheffler et al., 2023).
            </p>
            <p>
              Antidepressants show up in the blood quickly, but actual improvement to mood is slow and can sometimes take a
              few weeks (Harmer et al., 2017; Sheffler et al., 2023). While the neurotransmitters are changing on day one,
              changes in mood don’t follow right away (Harmer et al., 2017).
            </p>
            <p>
              Pills, taken by mouth, get absorbed more slowly and make them less likely to get abused, which is very
              different from drugs that are injected or smoked, which are felt faster (Sheffler et al., 2023). Some drugs,
              like paroxetine and venlafaxine, have short half lives; if you stop taking them suddenly, withdrawal effects
              can hit hard. Drugs like fluoxetine hang around longer, making withdrawal symptoms milder (Henssler et al.,
              2024).
            </p>
          </>
        ),
        "Brain regions, neural systems, and neurotransmitters affected": (
          <>
            <p>
              Antidepressants don’t just target one spot in the brain. They impact a multitude of regions tied to emotions,
              motivation, memory, and self-regulation. Regions impacted include the prefrontal cortex (planning, focus,
              dealing with feelings), amygdala (processing fear and negative emotions), hippocampus (memory), and other areas
              tied to reward and pleasure. Changes to these areas matter because depression isn’t just sadness: it’s trouble
              with thinking, stress, motivation, and how one handles their inner world (Harmer et al., 2017). Antidepressants
              nudge that whole network toward healthier patterns, especially tamping down those strong, negative emotional
              responses (Harmer et al., 2017).
            </p>
            <p>
              While serotonin is usually the &ldquo;go-to&rdquo; chemical when thinking about depression treatment, many
              antidepressants act on other chemicals too (Harmer et al., 2017). The main neurotransmitters that
              antidepressants impact are serotonin, norepinephrine, and dopamine (Sheffler et al., 2023). SSRIs block the
              reuptake pump for serotonin, so more serotonin is available for signaling between nerve cells. SNRIs block
              both serotonin and norepinephrine reuptake. TCAs also stop the reabsorption of serotonin and norepinephrine.
              MAOIs work differently: they block the enzyme that breaks down monoamines (serotonin, norepinephrine,
              dopamine), which means these monoamines can stay in the synapse longer and continue signaling (Sheffler et
              al., 2023). Bupropion (an NDRI) blocks the reuptake norepinephrine and dopamine, while mirtazapine affecting
              both norepinephrine and serotonin indirectly (Sheffler et al., 2023).
            </p>
            <p>
              The mesolimbic dopamine system is important for reward and motivation, and is also a main target for
              depression treatment. Depression often kills a person’s drive or capacity to feel pleasure (anhedonia), and
              while antidepressants work mostly on serotonin and norepinephrine, they still boost those reward circuits
              downstream (Harmer et al., 2017).
            </p>
          </>
        ),
        "Subjective effects": (
          <>
            <p>
              Antidepressants change things subtly and steadily, not in a way that makes people crave or chase the effect
              (Sheffler et al., 2023). With antidepressants, there is no euphoric rush or quick relief like with strong
              painkillers or stimulants (Sheffler et al., 2023). If they work, one might notice the emotional weight slowly
              lightening or that their racing, negative thinking fades. Sometimes, side effects show up before mood
              improves: nausea, headache, jitteriness, or altered sleep. At higher doses, benefits can improve, but side
              effects grow too: trouble with sweating, feeling &ldquo;numb&rdquo;, or feeling less emotionally reactive are
              common (Edinoff et al., 2021; Harmer et al., 2017).
            </p>
            <p>
              Everyone’s experience can be different because of differences in diagnosis, dose, age, body chemistry, and
              other medications (Edinoff et al., 2021).
            </p>
          </>
        ),
        "Behavioral and physiological effects": (
          <>
            <p>
              When antidepressants work, people often find it easier to focus, stay motivated, and handle stress. Early in
              treatment, though, it’s fairly common to feel jumpy, restless, or even a little more anxious before things
              settle. That’s why doctors watch closely during those first weeks (U.S. Food and Drug Administration [FDA],
              2018; Harmer et al., 2017).
            </p>
            <p>
              Side effects depend on the drug. SSRIs most often cause stomach issues, headaches, and sexual side effects.
              Some might make you sleepy, and others might have the opposite effect. Some individuals may also experience
              dry mouth, constipation, blurry vision, mental fog, and changes in appetite, energy, or sleep (Edinoff et al.,
              2021; Sheffler et al., 2023).
            </p>
          </>
        ),
        "Tolerance, dependence, and withdrawal": (
          <>
            <p>
              If a patient stops taking their antidepressants suddenly, they can experience withdrawal or
              &ldquo;discontinuation&rdquo; symptoms. This isn’t the same as addiction, but the brain is reacting to the
              sudden change (Henssler et al., 2024).
            </p>
            <p>
              Stopping these medications (especially ones with short half-lives) can cause dizziness, nausea, weird dreams,
              &ldquo;brain zaps,&rdquo; trouble sleeping, and many other negative symptoms (Henssler et al., 2024). A review
              from 2024 found that many users get these symptoms, though a lot depends on how fast they come off their
              dose. Tapering off the medication is usually advised by one’s doctor if a patient is trying to discontinue
              use. The brain needs time to rebalance its chemistry after getting used to the drug (Henssler et al., 2024).
            </p>
          </>
        ),
        "Side effects & risks": (
          <>
            <p>
              Common short-term side effects include nausea, headaches, sweating, trouble sleeping (or sleeping too much),
              stomach issues, and sexual problems (Edinoff et al., 2021). Sometimes people say they feel &ldquo;emotionally
              flat&rdquo; or less able to feel both happy and sad (Edinoff et al., 2021). SSRIs are harder to accidentally
              overdose than other drugs, but there are still risks, especially if you combine them with other drugs that
              boost serotonin (Edinoff et al., 2021).
            </p>
            <p>
              The main concern for SSRIs is serotonin syndrome, which is what happens if there’s too much serotonin in the
              system, usually because of mixing several serotonin-active meds. Other risks include: abnormally low sodium,
              heart rhythm changes, increased bleeding risk (especially when mixing these drugs with blood thinners or
              NSAIDs), and, if one’s using TCAs or MAOIs, possibly dangerous food and drug interactions with foods
              containing tyramine, like cheese and cured meats (Edinoff et al., 2021; Sheffler et al., 2023).
            </p>
            <p>
              In kids, teens, and young adults, antidepressants can raise the risk of suicidal thinking and behavior early
              on. The FDA says these populations should be monitored closely. That doesn’t mean antidepressants are always
              unsafe for young people, just that they may need more monitoring (FDA, 2018).
            </p>
          </>
        ),
        "Therapeutic uses": (
          <>
            <p>
              Antidepressants are used for major depression, and are sometimes used for panic disorder, OCD, PTSD, and
              chronic pain. Studies show that, while the size of the benefit changes from drug to drug, these medications do
              help with acute depressive episodes compared to placebo (Cipriani et al., 2018; NIMH, n.d.).
            </p>
            <p>
              The safest way to use them is with careful diagnosis, going slow with dosing, watching for side effects,
              close follow-up during the start (especially in high-risk ages), and never stopping abruptly (FDA, 2018;
              Henssler et al., 2024). Matching people with the right approach, and combining medication with therapy when
              needed works best (Cipriani et al., 2018; NIMH, n.d.).
            </p>
          </>
        ),
        "Controversies, misconceptions, and public perception": (
          <>
            <p>
              Depression is more complicated than just a serotonin problem, most antidepressants take a while to work, and
              stopping can definitely cause withdrawal in some folks (Harmer et al., 2017; Henssler et al., 2024).
            </p>
            <p>
              Antidepressants have legitimate effects, but also side effects and limits. Scientists still argue about
              exactly how they work, but the evidence points to changes not just in neurotransmitters, but also in
              emotional processing and brain rewiring (Harmer et al., 2017).
            </p>
          </>
        ),
      }}
      references={[
        {
          text: "Cipriani, A., Furukawa, T. A., Salanti, G., Chaimani, A., Atkinson, L. Z., Ogawa, Y., Leucht, S., Ruhe, H. G., Turner, E. H., Higgins, J. P. T., Egger, M., Takeshima, N., Hayasaka, Y., Imai, H., Shinohara, K., Tajika, A., Ioannidis, J. P. A., & Geddes, J. R. (2018). Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: A systematic review and network meta-analysis. The Lancet, 391(10128), 1357–1366.",
        },
        {
          text: "Edinoff, A. N., Akuly, H. A., Hanna, T. A., Ochoa, C. O., Patti, S. J., Ghaffar, Y. A., Kaye, A. D., Viswanath, O., Urits, I., & Boyer, A. G. (2021). Selective serotonin reuptake inhibitors and adverse effects: A narrative review. Neurology International, 13(3), 387–401.",
        },
        {
          text: "Harmer, C. J., Duman, R. S., & Cowen, P. J. (2017). How do antidepressants work? New perspectives for refining future treatment approaches. The Lancet Psychiatry, 4(5), 409–418.",
        },
        {
          text: "Henssler, J., Schmidt, Y., Schmidt, U., et al. (2024). Incidence of antidepressant discontinuation symptoms: A systematic review and meta-analysis. The Lancet Psychiatry, 11, 359–372.",
        },
        {
          text: "National Institute of Mental Health. (n.d.). Mental health medications. U.S. Department of Health and Human Services.",
        },
        {
          text: "Sheffler, Z. M., Reddy, V., & Pillarisetty, L. S. (2023). Antidepressants. In StatPearls. StatPearls Publishing.",
        },
        {
          text: "U.S. Food and Drug Administration. (2018, February 5). Suicidality in children and adolescents being treated with antidepressant medications.",
        },
      ]}
    >
      <p>
        Antidepressants cover a family of drugs that are best known for fighting depression. Some people take them for
        other reasons too: anxiety, OCD, PTSD, chronic pain, and even sleep problems (National Institute of Mental Health
        [NIMH], n.d.; Sheffler et al., 2023). While SSRIs and SNRIs are more commonly prescribed (Sheffler et al., 2023),
        NDRIs, tricyclic antidepressants, and MAOIs are also commonly used as antidepressants (Sheffler et al., 2023). We
        now know antidepressants work by changing how the brain handles neurotransmitters, reshaping emotional patterns,
        even nudging the brain toward new wiring. That mix of effects explains both their benefits and their limits
        (Harmer et al., 2017).
      </p>
    </DrugArticle>
  );
}
