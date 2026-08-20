import DrugArticle from "../drug-article";
import cigaretteImage from "./Cigarette_DS.jpg";

export default function TobaccoPage() {
  return (
    <DrugArticle
      title="Tobacco"
      authors={[
        { name: "Kristin Kirchner, PhD", href: "https://www.linkedin.com/in/kristinkirchner/" },
        { name: "Karla Martinez", href: "https://www.linkedin.com/in/karla-martinez-898b973b9/" },
      ]}
      images={[{ src: cigaretteImage, alt: "A lit cigarette" }]}
      sections={{
        "Drug identification and classification": (
          <p>
            Tobacco is classified as a strong stimulant to the central nervous system, despite its paradoxical relaxing effects (ADF, 2023).
            While tobacco usually refers to the plant itself, nicotine is the actual psychoactive ingredient. Tobacco and nicotine products
            are most often consumed through pipes, oral moist snuff, cigarettes, and vapes. Tobacco is a legal and regulated substance under
            U.S. federal law, with the federal minimum age of sale being 21 years with no exceptions even for military personnel
            (U.S. Food and Drug Administration, 2024). The CDC reports that tobacco use is more commonly used in rural populations (26.2%)
            than urban areas (17.5%).
          </p>
        ),
        "Routes of administration & pharmacokinetics": (
          <>
            <p>
              One of the most common ways to administer tobacco products is through inhalation by cigarettes, cigars, and pipes. Additionally,
              smokeless products like &ldquo;snuff&rdquo; and chewing tobacco are also used to administer tobacco through the buccal and sublabial routes
              (Alcohol and Drug Foundation, 2024). The pharmacokinetics of this drug depends on the way that it&rsquo;s administered. When Nicotine
              is inhaled, it is absorbed almost immediately as it enters the bloodstream through the lungs; it reaches the brain in about 10 to
              20 seconds (Alcohol and Drug Foundation, 2024). With such a quick onset, it causes a sharp &ldquo;spike&rdquo; in dopamine, which can increase
              the drug&rsquo;s potential for addiction. Sublabial administration (absorption through the lips and gums) causes a slower absorption through
              the oral mucosa. This route has a different effect on the body than smoking: research shows that snuff users usually report lower
              physical functioning scores on health-related quality of life scales when compared to non-users, even if this route offers a different
              effect on the body than to smoking (Wachsmann et al., 2023).
            </p>
            <p>
              Bioavailability (how much and how fast a drug enters the bloodstream) depends on the variety of routes in which the drug is used by.
              Inhalation delivers high arterial concentrations quickly. However, the alkalinity of smokeless tobacco is usually adjusted chemically
              to improve the absorption of nicotine through the mouth&rsquo;s membranes. The intensity of the &ldquo;buzz&rdquo; that a person feels and the dependence
              risk that comes with the use is directly influenced by the route of administration. Thus, inhaled tobacco has the highest risk for addiction
              because the brain&rsquo;s reward circuitry is quickly activated after a puff is taken when compared to oral tobacco&rsquo;s slower effect on the body.
              Despite it&rsquo;s slower effect, there is still a significant pattern of long term health risks and a lower quality of life for oral tobacco
              (Wachsmann et al., 2023; Alcohol and Drug Foundation, 2024).
            </p>
          </>
        ),
        "Brain regions, neural systems, and neurotransmitters affected": (
          <>
            <p>
              The mesolimbic dopamine system is the primary neural pathway that is involved in tobacco addiction. Nicotine causes dopamine to be
              released in the nucleus accumbens to create acute reinforcement (Alcohol and Drug Foundation, 2024). Chronic tobacco use causes stable
              adjustments in resting state networks in addition to the reward circuit. Functional magnetic resonance imaging (fMRI) has shown the
              decreased functional connectivity between the Sensorimotor Network (SMN), specifically the left precentral gyrus, and the Visual
              Network (VN) (Sun et al., 2025). These areas are important for behavior because the SMN is in charge of motor control and the VN
              processes sensory observation; their degeneration may explain why chronic smokers have compulsive automated habits. Nicotine
              interference during adolescent development affects the prefrontal cortex during development. It impairs the executive control needed
              to prevent the reward system&rsquo;s impulsive urges. This biological susceptibility shows the context for the Tobacco 21 regulations
              (U.S. Food and Drug Administration, 2024).
            </p>
            <p>
              Nicotine is a nicotinic acetylcholine receptor agonist that mimics the signaling molecules that activate chemical circuitry in the
              brain. Nicotine hijacks the mesolimbic reward system that releases dopamine, triggering release in the ventral tegmental area, which
              results in immediate reinforcing effects that can lead to addiction (Alcohol and Drug Foundation, 2024). Advanced neuroimaging
              suggests that tobacco addiction involves extensive changes in the opioid and serotonin systems along with dopamine (Sun et al., 2025).
              These systems regulate the &ldquo;sensorimotor&rdquo; and &ldquo;visual&rdquo; networks, which can explain why chronic users have changes in the way they
              process sensory input and cravings. Chronic use of tobacco comes with long term neurochemical changes that are caused that affect
              users by lowering overall physical health and quality of life (Wachsmann et al., 2023).
            </p>
          </>
        ),
        "Subjective effects": (
          <p>
            The subjective effects of tobacco are identified by a biphasic response in which low doses act as a stimulant that increases
            alertness and cognitive focus and higher doses or fast inhalation can cause sedation and relaxation (Alcohol and Drug Foundation,
            2024). The changes that are seen in mood and motivation are often associated with reducing withdrawal symptoms rather than true
            sedation. The short term &ldquo;boosts&rdquo; to mood don&rsquo;t translate into a long term positive well-being; tobacco users consistently report
            significantly lower subjective scores in vitality and social functioning when compared to non-users (Wachsmann et al., 2023). There
            is a high variability between individuals in these effects because tobacco users&rsquo; perception of their physical and mental health
            are influenced by their gender and age (Wachsmann et al., 2023).
          </p>
        ),
        "Behavioral and physiological effects": (
          <p>
            Tobacco use causes noticeable physiological and behavioral changes that can be seen almost immediately after its use. Nicotine
            functions as a sympathomimetic agent which causes a fast increase in heart rate and blood pressure while suppressing appetite and
            interfering with sleep (Alcohol and Drug Foundation, 2024). During the acute phase of use, users often show increased attention and
            improvement on short term cognitive performance, but these effects are also often followed by a decrease in their impulse control
            and impaired decision making as the drug fades (Sun et al., 2025).
          </p>
        ),
        "Tolerance, dependence, and withdrawal": (
          <p>
            Tobacco use can cause quick physical and physiological dependence because it constantly stimulates the brain&rsquo;s reward circuitry. In
            order to maintain homeostasis during long-term exposure, tolerance then develops through a neurobiological adaptation known as
            upregulation where the brain increases the density of nicotinic receptors to maintain homeostasis (Alcohol and Drug Foundation,
            2024). This leads to a cycle of dependence because more frequent doses are needed to produce the same reinforcing effects. When
            nicotine levels drop, the brain is now in a state of hyperexcitability which causes withdrawal symptoms like strong cravings,
            irritability, anxiety, and trouble sleeping (Alcohol and Drug Foundation, 2024). While acute physical withdrawal usually peaks within
            48 to 72 hours, the psychological dependence can last months because the sensorimotor and visual networks are still conditioned to
            environmental cues related to the drug (Sun et al., 2025; Wachsmann et al., 2023).
          </p>
        ),
        "Side effects & risks": (
          <p>
            The short-term side effects caused by tobacco use are increased heart rate, high blood pressure, lightheadedness and gastrointestinal
            distress (Alcohol and Drug Foundation, 2024). Long term health risks like cardiovascular disease, cancer, and chronic obstructive
            pulmonary disease (COPD). The empirical research shows tobacco users report a lower &ldquo;health related quality of life&rdquo; in physical
            functioning compared to non-users (Wachsmann et al., 2023). Since the body can quickly metabolize nicotine, fatal overdoses in adults
            are uncommon, but they can still happen in cases of excessive consumption or skin contact; this can cause respiratory failure or
            seizures.
          </p>
        ),
        "Therapeutic uses": (
          <p>
            The main medical use of nicotine is Nicotine Replacement Therapy (NRT) which uses patches, gums, or lozenges to deliver controlled
            doses to manage withdrawal symptoms during quitting. There is still debate about the use of non-combustible products as a &ldquo;safer&rdquo;
            nicotine alternatives; users of these of products still report lower physical functioning and energy than the non-users (Wachsmann et
            al., 2023). Nicotine may also have neuroprotective potential for conditions like Parkinson&rsquo;s (Alcohol and Drug Foundation, 2024).
          </p>
        ),
        "Controversies, misconceptions, and public perception": (
          <p>
            The most common misconception is that nicotine is the main carcinogen in tobacco. Research shows that the most harm comes from the
            tar and carbon monoxide that are released when tobacco is burned. Tobacco users can be negatively perceived by the public because
            nicotine is sometimes seen as a way to self-medicate for underlying mental health issues. The research shows that tobacco use is more
            common with individuals who experience severe psychological stress (Cornelius et al., 2023).
          </p>
        ),
      }}
      references={[
        {
          text: "Alcohol and Drug Foundation. (2024, November 27). Tobacco.",
          href: "https://adf.org.au/drugfacts/tobacco/",
        },
        {
          text: "Cornelius, M. E., Loretan, C. G., Jamal, A., Davis Lynn, B. C., Mayer, M., Alcantara, I. C., & Neff, L. (2023). Tobacco product use among adults – United States, 2021. MMWR. Morbidity and Mortality Weekly Report, 72(18), 475–483.",
          href: "https://doi.org/10.15585/mmwr.mm7218a1",
        },
        {
          text: "Sun, J., Lv, Q., Dang, J., Zhang, M., Tao, Q., Kang, Y., Ma, L., Mei, B., Wang, W., Han, S., Cheng, J., & Zhang, Y. (2025). Neural networks and chemical messengers: Insights into tobacco addiction. Brain Topography, 38(1), Article 42.",
          href: "https://doi.org/10.1007/s10548-025-01117-y",
        },
        {
          text: "U.S. Food and Drug Administration. (2025, August 7). Tobacco 21.",
          href: "https://www.fda.gov/tobacco-products/retail-sales-tobacco-products/tobacco-21",
        },
        {
          text: "Wachsmann, S., Nordeman, L., Billhult, A., & Rembeck, G. (2023). Tobacco impact on quality of life, a cross-sectional study of smokers, snuff-users and non-users of tobacco. BMC Public Health, 23(1), Article 886.",
          href: "https://doi.org/10.1186/s12889-023-15844-z",
        },
      ]}
    >
      <p>
        Tobacco is classified as a strong stimulant to the central nervous system, despite its paradoxical relaxing effects (ADF, 2023).
        While tobacco usually refers to the plant itself, nicotine is the actual psychoactive ingredient. Tobacco and nicotine products
        are most often consumed through pipes, oral moist snuff, cigarettes, and vapes. Tobacco is a legal and regulated substance under U.S.
        federal law, with the federal minimum age of sale being 21 years with no exceptions even for military personnel
        (U.S. Food and Drug Administration, 2024). The CDC reports that tobacco use is more commonly used in rural populations (26.2%)
        than urban areas (17.5%).
      </p>
    </DrugArticle>
  );
}
