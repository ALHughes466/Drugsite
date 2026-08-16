import DrugArticle from "../drug-article";

export default function InhalantsPage() {
  return (
    <DrugArticle
      title="Inhalants"
      authors={[
        { name: "Kristin Kirchner, Ph.D.", href: "https://www.linkedin.com/in/kristinkirchner/" },
        { name: "Yileni Mejia", href: "https://www.linkedin.com/in/yilenimejia/" },
      ]}
      sections={{
        "Drug identification and classification": (
          <p>
            Inhalants are a group of substances that people breathe in to get a quick high, and they include common
            household products or industrial products rather than a specific drug (Berchtold et al., 2010). They
            usually don’t have a generic name but are known by the type of product, such as solvents, aerosols, gases,
            and nitrites. Some common street names for inhalants are whippets (for nitrous oxide, &ldquo;laughing
            gas&rdquo;), poppers (for nitrites), huff, sniff, or bagging (Johnson et al., 2009). Inhalants are
            generally classified as central nervous system depressants because they slow down brain activity. However,
            some, like nitrites, act more as vasodilators, which are medications that relax the body and can reduce
            blood pressure. Most inhalants are legal to buy due to their intended use, such as spray paint or cleaning
            products, but it is illegal if the intended use is to get high. Inhalants are one of the first drugs
            abused by the younger population, especially adolescents, but are also commonly used by the majority of
            the adult population (Takagi et al., 2011), since they are cheap in most stores and are easily accessible
            because they can often be found at home. Also, inhalants may be used in social settings or sometimes even
            out of curiosity but can lead to serious health risks.
          </p>
        ),
        "Routes of administration & pharmacokinetics": (
          <>
            <p>
              Inhalants are most commonly administered by breathing in (inhaling) their chemical vapors (Takagi et
              al., 2011). Methods include &ldquo;huffing,&rdquo; which is soaking a cloth and inhaling, and
              &ldquo;sniffing&rdquo; or &ldquo;bagging,&rdquo; which is inhaling from a bag. Since this drug is
              inhaled, the substances enter the bloodstream very quickly through the lungs and reach the brain
              quickly, within seconds (Dohrn et al., 1993). This causes a rapid onset of effects, usually within
              seconds to minutes, with a short peak and duration that usually only lasts a couple of minutes unless it
              is used repeatedly.
            </p>
            <p>
              Inhalants have a high bioavailability through the lungs, which can make the effects intense but also
              dangerous. The fast delivery to the brain increases the risk of overdose and brain damage. There is
              also something called &ldquo;Sudden Sniffing Death,&rdquo; which happens when it is used repeatedly in
              a short period of time.
            </p>
          </>
        ),
        "Brain regions & neural systems affected": (
          <p>
            Inhalants impact several important brain regions including the prefrontal cortex (PFC), the nucleus
            accumbens (NA), and also the amygdala (Beckley et al., 2016). They also impact the mesolimbic dopamine
            system (MDS), which is the pathway involved in addiction and reinforcement of drug use. In the short
            term, using this drug can cause effects such as dizziness, euphoria, and impaired judgment due to its
            depressant effects on the brain (Beckley et al., 2016). However, too much use or chronic use of this drug
            can cause memory problems or permanent brain injury and may reduce cognitive function. These brain
            regions are important for behavior because they control how people make decisions, regulate emotions, and
            experience rewards. This explains why inhalants can become addictive and lead to serious and risky
            behaviors.
          </p>
        ),
        "Neurotransmitters & circuits affected": (
          <p>
            Inhalants primarily affect neurotransmitters such as dopamine, GABA, and sometimes glutamate. They often
            increase the activity of GABA, which is an inhibitory neurotransmitter that slows down brain activity,
            causing relaxation and sedation. It can also increase dopamine levels in the brain’s reward system
            (Beckley et al., 2016), which contributes to the pleasurable feelings and reinforces repeated use. Some
            inhalants can also disrupt glutamate, which is involved in learning and memory. Depending on the
            substance used, inhalants can act similar to a depressant by enhancing the inhibitory signal or reducing
            the excitatory signals in the brain. These changes can interfere with normal communication, which can
            also impair thinking, coordination, and memory. Long-term use can cause lasting damage in how the brain
            processes information.
          </p>
        ),
        "Subjective effects": (
          <p>
            People who use inhalants commonly report short-term psychological effects like euphoria, lightheadedness,
            and a sense of relaxation or detachment from reality (Roberts et al., 2020). Some also experience changes
            in perception like distorted vision or slowed thinking. Mood can vary, with some people feeling excited
            or hyperactive while others might feel anxious or confused, and moods can shift quickly. With lower
            doses, the effects are usually mild and can include dizziness or feeling &ldquo;high.&rdquo; With high
            doses, people may experience stronger intoxication and hallucinations, or some might lose consciousness.
            Research shows that these effects can vary widely between people depending on factors like age, frequency
            of use, and the specific substance inhaled (Roberts et al., 2020).
          </p>
        ),
        "Behavioral and physiological effects": (
          <p>
            Inhalant use leads to noticeable behavioral changes like poor coordination, slurred speech, and slow
            reaction time. It can also impair attention, decision-making, and impulse control (Hernández-Medina et
            al., 2023), which can result in unsafe behaviors. Social behavior may become more disinhibited, almost
            like alcohol intoxication. Inhalants can affect the body in different ways physiologically, such as an
            increase or irregularity in heart rate, nausea, headaches, and dizziness (Dohrn et al., 1993). Some users
            have also reported experiencing trouble sleeping or feeling drowsy. Since inhalants reduce oxygen supply
            to the brain and the body, they can cause serious effects such as fainting or seizures with repeated use,
            and may also cause the lips to turn a blue-purple color if overly inhaled.
          </p>
        ),
        "Tolerance, dependence, and withdrawal": (
          <p>
            If individuals use inhalants repeatedly, they can develop tolerance towards them, meaning they need to
            use more of the substance to achieve the same effects. Even though inhalants are not always associated
            with strong physical dependence like most drugs, psychological dependence can occur, where users feel a
            strong urge or craving (Keriotis & Upadhyaya, 2000) to continue using. Withdrawal symptoms are generally
            less severe than with substances like opioids, but can include sweating, nausea, irritability, headaches,
            and also insomnia. These symptoms can begin shortly after stopping use and vary in duration and severity
            (Keriotis & Upadhyaya, 2000). These withdrawal effects are related to changes in brain chemistry and
            involve neurotransmitters like GABA and dopamine.
          </p>
        ),
        "Side effects & risks": (
          <p>
            Inhalant use can cause both significant short-term and long-term risks. Some short-term effects would be
            dizziness, nausea, confusion, loss of coordination, and even, in some cases, unconsciousness or death.
            Long-term use can lead to serious health problems like liver and kidney damage, brain damage, memory
            loss, and damage to the nervous system. Inhalants also have a high risk of overdose because it is
            difficult to control the amount inhaled (Dinwiddie, 1994). Also, using inhalants with other substances
            like alcohol or any medication can increase the risk of dangerous interactions because they all depress
            the central nervous system (CNS), which can slow breathing and heart rate to life-threatening levels
            (Dinwiddie, 1994).
          </p>
        ),
        "Therapeutic uses": (
          <p>
            Some inhalants, like nitrous oxide, are used legally in medical and dental settings as anesthetics, but
            most other inhalants do not have approved medical uses when used in the way people misuse them (Vasilov
            et al., 2013). When inhalants are misused, they can be extremely dangerous, so harm-reduction strategies
            are important. One harm-reduction strategy would be educating people, especially adolescents, about the
            risks and encouraging use in safer environments, even though no use is truly safe. Also, avoiding
            repeated inhalation in a short period of time can reduce the risk of overdose. An important consideration
            is that criminalizing inhalant use may not always be effective, since many of the substances are common
            household products that can be difficult to regulate. Instead, prevention efforts focus on education,
            early intervention, and providing support for those who are at risk.
          </p>
        ),
        "Controversies, misconceptions, and public perception": (
          <p>
            There are many misconceptions about inhalants, especially among adolescents. A significant number of
            young people underestimate the risks of inhalant use (Perron & Howard, 2008), with many believing that
            trying inhalants once or twice is not harmful. One public perception is that inhalants are seen as less
            dangerous than other types of drugs because they are legal and are common in household products. Having
            friends or family members who use these substances will most likely make individuals view them as safer
            than they actually are. Inhalants are overlooked in media portrayals compared to other drugs, which can
            contribute to a lack of awareness about their serious health risks (Perron & Howard, 2008). There is also
            stigma associated with inhalant use, as it is often viewed as a youth or &ldquo;low-status&rdquo; drug,
            which might prevent people from seeking help.
          </p>
        ),
      }}
      references={[
        {
          text: "Beckley, J. T., Randall, P. K., Smith, R. J., Hughes, B. A., Kalivas, P. W., & Woodward, J. J. (2016). Phenotype-dependent inhibition of glutamatergic transmission on nucleus accumbens medium spiny neurons by the abused inhalant toluene. Addiction Biology, 21(3), 530–546.",
          href: "https://doi.org/10.1111/adb.12235",
        },
        {
          text: "Berchtold, A., Jeannin, A., Akré, C., Michaud, P.-A., & Suris, J.-C. (2010). First use of multiple substances: Identification of meaningful patterns. Journal of Substance Use, 15(2), 118–130.",
          href: "https://doi.org/10.3109/10550880903422747",
        },
        {
          text: "Dinwiddie, S. H. (1994). Abuse of inhalants: A review. Addiction, 89(8), 925–939.",
          href: "https://doi.org/10.1111/j.1360-0443.1994.tb03348.x",
        },
        {
          text: "Dohrn, C. S., Lichtor, J. L., Coalson, D. W., Flemming, D., & Zacny, J. P. (1993). Subjective and psychomotor effects of bolus doses of nitrous oxide in humans. Human Psychopharmacology: Clinical and Experimental, 8(2), 97–106.",
          href: "https://doi.org/10.1002/hup.470080203",
        },
        {
          text: "Hernández-Medina, A., Paredes, L., Garza-Villarreal, E. A., & Mercadillo, R. E. (2023). Homelessness and inhalant abuse: An interdisciplinary case study involving cognition, brain connectivity and social behavior. Journal of Social Distress and Homelessness, 32(2), 381–386.",
          href: "https://doi.org/10.1080/10530789.2022.2069403",
        },
        {
          text: "Johnson, K. W., Shamblen, S. R., Ogilvie, K. A., Collins, D., & Saylor, B. (2009). Preventing youths’ use of inhalants and other harmful legal products in frontier Alaskan communities: A randomized trial. Prevention Science, 10(4), 298–312.",
          href: "https://doi.org/10.1007/s11121-009-0132-2",
        },
        {
          text: "Keriotis, A. A., & Upadhyaya, H. P. (2000). Inhalant dependence and withdrawal symptoms. Journal of the American Academy of Child & Adolescent Psychiatry, 39(6), 679–680.",
          href: "https://doi.org/10.1097/00004583-200006000-00004",
        },
        {
          text: "Perron, B. E., & Howard, M. O. (2008). Perceived risk of harm and intentions of future inhalant use among adolescent inhalant users. Drug and Alcohol Dependence, 97(1–2), 185–189.",
          href: "https://doi.org/10.1016/j.drugalcdep.2008.04.005",
        },
        {
          text: "Roberts, D., Farahmand, P., & Wolkin, A. (2020). Nitrous oxide inhalant use disorder preceding symptoms concerning for primary psychotic illness. The American Journal on Addictions, 29(6), 525–527.",
          href: "https://doi.org/10.1111/ajad.13048",
        },
        {
          text: "Takagi, M., Lubman, D. I., Cotton, S., Fornito, A., Baliz, Y., Tucker, A., & Yücel, M. (2011). Executive control among adolescent inhalant and cannabis users. Drug and Alcohol Review, 30(6), 629–637.",
          href: "https://doi.org/10.1111/j.1465-3362.2010.00256.x",
        },
        {
          text: "Vasilov, A., Nandu, B., & Berman, J. (2013). Treatment modules and therapeutic approaches for inhalant abuse: A case report. Psychiatric Annals, 43(9), 419–423.",
          href: "https://doi.org/10.3928/00485713-20130906-08",
        },
      ]}
    >
      <p>
        Inhalants are a unique category of substances that are widely available but really dangerous when misused.
        They act as a central nervous system (CNS) depressant and can affect the brain rapidly, which can lead to
        short-term effects like impaired judgment or euphoria as well as long-term effects such as brain damage and
        organ failure. The impacts on the brain regions involved in decision-making and reward help explain their
        potential for harmful behavior.
      </p>
    </DrugArticle>
  );
}
