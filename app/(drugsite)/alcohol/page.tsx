import DrugArticle from "../drug-article";

export default function AlcoholPage() {
  return (
    <DrugArticle
      title="Alcohol"
      authors={[
        { name: "Kristin Kirchner, Ph.D.", href: "https://www.linkedin.com/in/kristinkirchner/" },
        { name: "Ahava Judah", href: "https://www.linkedin.com/in/ahava-shema-judah-53532871/" },
        { name: "Deborah Maxwell" },
      ]}
      sections={{
        "Drug identification and classification": (
          <>
            <p>
              Alcohol, or ethanol, is a psychoactive drug classified as a central nervous system (CNS) depressant.
              Alcohol is also commonly known by a variety of types and slang terms such as mead, liquor, spirits, or
              simply referred to as &ldquo;a drink.&rdquo; The term &ldquo;alcohol&rdquo; is derived from an Arabic word
              meaning &ldquo;finely divided spirit,&rdquo; referring to the portion of wine collected through
              distillation, or the concentrated essence. Dating back thousands of years, alcohol was used by early human
              civilizations and was sometimes referred to as &ldquo;booze.&rdquo; Another historical name for alcohol
              includes &ldquo;devil’s rum,&rdquo; as well as aqua vitae, meaning &ldquo;the water of life,&rdquo; a term
              introduced by the French professor of medicine Arnaldus de Villanova (Hart & Ksir, 2022). Alcohol is
              classified as a depressant because it slows down the activity of the central nervous system. Although it
              may initially produce stimulating effects at lower doses due to reduced inhibitions, its primary action is
              as a depressant.
            </p>
            <p>
              Alcohol is federally legal in the United States for recreational use by individuals aged 21 and older,
              although it is still a highly regulated substance. Its sales, distribution, and consumption are controlled
              through federal and state laws, including age restrictions and laws related to impaired driving. While
              alcohol is not classified as an illicit drug, its legal status has evolved over time, particularly during
              periods such as Prohibition, which reflect ongoing efforts to regulate its use and societal impact
              (Blocker, 2006). Medically, alcohol has very limited use today, though historically it was used as an
              anesthetic and is still used in some settings as an antiseptic or disinfectant. Despite its legal status,
              alcohol remains one of the most widely used psychoactive substances, contributing to significant public
              health concerns and widespread patterns of use (Shield et al., 2025).
            </p>
          </>
        ),
        "Routes of administration & pharmacokinetics": (
          <p>
            Alcohol is typically consumed orally. Once it is consumed, it is quickly absorbed through the
            gastrointestinal tract, mainly in the stomach and small intestine (National Institute on Alcohol Abuse and
            Alcoholism [NIAAA], 2021). The onset of alcohol usually begins within about 5 to 10 minutes after drinking,
            depending on factors such as the person’s sex, body weight, metabolism, whether food has been eaten, and
            whether alcohol is consumed with carbonated beverages. Alcohol has high bioavailability when consumed orally,
            meaning a large amount of it enters the bloodstream and reaches the brain. However, some of it is broken
            down in the stomach and liver before it fully circulates through the body, which is known as first-pass
            metabolism. Factors such as sex, body composition, and enzyme levels can affect how strongly alcohol impacts
            a person. Blood alcohol levels typically peak within 30 to 90 minutes. As alcohol begins to take effect,
            individuals may first experience reduced inhibitions and slight disruptions in complex thinking. As levels
            increase, many people report feelings of euphoria, increased confidence, and reduced anxiety, often becoming
            more social or talkative (Hart & Ksir, 2022). Alcohol quickly crosses the blood-brain barrier and is
            metabolized primarily by the liver through alcohol dehydrogenase and aldehyde dehydrogenase. Because
            metabolism occurs at a relatively steady rate, heavy drinking can quickly result in intoxication and alcohol
            poisoning (Rehm et al., 2021; Varghese & Dakhode, 2022). As blood alcohol concentration (BAC), also
            referred to as blood alcohol level (BAL), continues to rise, judgment becomes impaired, decision-making
            declines, and more risky or uncritical behaviors may occur. The effects can last for several hours because
            the body processes alcohol at a steady and relatively slow rate (Hart & Ksir, 2022).
          </p>
        ),
        "Brain regions & neural systems affected": (
          <p>
            Alcohol affects several interconnected brain regions that regulate reward, memory, emotion, and executive
            functioning, including the prefrontal cortex, cerebellum, hippocampus, and amygdala. The prefrontal cortex
            is responsible for decision making, judgment, and impulse control, and alcohol disrupts its normal
            functioning, leading to poor decisions and reduced self-control. The cerebellum is involved in coordination
            and balance, which explains why alcohol use often results in impaired motor skills and difficulty
            maintaining balance. The hippocampus plays a major role in memory, and alcohol can interfere with its
            function, sometimes leading to memory lapses or blackouts (Hart & Ksir, 2022). The amygdala is associated
            with emotion and stress, and alcohol’s effects on this region can alter emotional responses and reduce
            feelings of anxiety. The nucleus accumbens, part of the brain’s reward system, becomes more active during
            alcohol use and contributes to pleasurable feelings that reinforce continued drinking. Chronic alcohol
            misuse may produce long-term structural and functional changes within these brain regions, leading to
            persistent cognitive impairment (Nehring et al., 2023; Varghese & Dakhode, 2022). These effects help
            explain why intoxicated individuals often engage in risky behaviors (Hart & Ksir, 2022; Oscar-Berman &
            Marinković, 2007).
          </p>
        ),
        "Neurotransmitters & circuits affected": (
          <>
            <p>
              Alcohol alters communication between neurons by affecting several major neurotransmitter systems. GABA
              and glutamate are the most important because they control whether brain activity is slowed down or sped
              up. Alcohol strengthens GABA, which has a calming effect, while blocking glutamate, which normally
              increases brain activity. This combination creates a noticeable slowing of brain function. At the same
              time, alcohol increases dopamine in the brain’s reward system, which contributes to feelings of pleasure,
              encouraging repeated use (Costardi et al., 2015). Alcohol enhances gamma-aminobutyric acid (GABA), the
              brain’s primary inhibitory neurotransmitter, producing relaxation, sedation, and slowed reaction time. At
              the same time, alcohol suppresses glutamate, the primary excitatory neurotransmitter, impairing learning,
              memory, and cognitive functioning (Hart & Ksir, 2022).
            </p>
            <p>
              At the receptor level, alcohol mainly targets gamma-aminobutyric acid type A (GABA) receptors and
              N-methyl-D-aspartate (NMDA) receptors, which are a type of glutamate receptor. NMDA receptors play an
              important role in learning, memory, and excitatory signaling in the brain. When alcohol interacts with
              GABA receptors, it makes neurons less likely to fire, which contributes to relaxation and sedation. In
              contrast, alcohol blocks NMDA receptors, reducing excitatory activity and slowing communication between
              brain cells. Davies (2003) explains that these receptor-level effects are a major reason alcohol acts as a
              depressant in the brain.
            </p>
            <p>
              Alcohol also affects important neural pathways, particularly the mesolimbic dopamine system, which is
              often referred to as the brain’s reward pathway. Alcohol can also indirectly increase dopamine release
              within the ventral tegmental area (VTA) to the nucleus accumbens. Increased dopamine reinforces drinking
              behavior and contributes to the development of alcohol use disorders. Boileau et al. (2003) found that
              alcohol consumption is associated with increased dopamine release in the nucleus accumbens, reinforcing
              its rewarding effects. Repeated alcohol exposure produces neuroadaptations in these neurotransmitter
              systems that underlie tolerance, dependence, craving, and withdrawal symptoms (Rehm et al., 2021; Nehring
              et al., 2023).
            </p>
            <p>
              The effects of alcohol on the brain can differ depending on whether use is short-term or long-term. Acute
              alcohol use leads to immediate changes in brain function, such as reduced inhibition, impaired judgment,
              and slowed reaction time. In contrast, chronic alcohol use can lead to long-term changes in brain
              structure and function. These may include damage to the hippocampus affecting memory, reduced functioning
              of the prefrontal cortex impacting decision making, and structural changes in multiple brain regions
              including the cerebellum and amygdala. Squeglia et al. (2014) reported that prolonged alcohol use is
              associated with alterations in brain development and structure, particularly in regions responsible for
              cognition and behavior.
            </p>
          </>
        ),
        "Subjective effects": (
          <p>
            As alcohol intake increases, even simpler and more familiar behaviors begin to be affected. One of the most
            noticeable effects is a reduction in inhibition, which can lead to an increase in overall behavior. This
            may make individuals appear more active or outgoing, even though alcohol is not a stimulant. Instead, this
            increase in behavior is due to a decrease in self-control. When alcohol levels reach a moderate range, many
            individuals report feelings of euphoria and happiness. People may begin to feel more confident, socially
            comfortable, and less critical of themselves and others, often perceiving themselves as more witty or more
            engaging than they actually are. Low doses commonly produce relaxation, reduced anxiety, increased
            sociability, and mild euphoria. As blood alcohol concentration rises, users may experience impaired
            judgment, slowed reaction time, emotional instability, slurred speech, and reduced coordination. As alcohol
            consumption continues, it begins to affect mood and thinking more noticeably. One important effect is the
            reduction of anxiety, which contributes to a general sense of well-being. This occurs because alcohol
            disrupts normal critical thinking and judgment, making individuals less concerned about consequences. As a
            result, decision-making becomes impaired, and individuals may engage in behaviors they would normally
            avoid. These effects can range from minor lapses in judgment to more serious risk-taking behaviors. The
            overall experience is influenced by blood alcohol concentration (BAC), also referred to as blood alcohol
            level (BAL), which determines the intensity of these psychological and behavioral changes (Hart & Ksir,
            2022). The effects of alcohol are closely tied to BAC levels and how quickly those levels rise. Lower
            levels of alcohol may produce mild relaxation and reduced inhibition, while higher levels lead to more
            significant impairments in thinking, coordination, and judgment. The rate at which alcohol is consumed also
            plays an important role. When BAC rises quickly, the effects tend to be stronger and more noticeable. In
            addition, individuals who drink heavily on a regular basis may need more alcohol to feel the same effects
            as moderate drinkers. This shows how tolerance can change how alcohol affects behavior and performance
            (Hart & Ksir, 2022). Very high doses can cause unconsciousness or respiratory depression (NIAAA, 2025).
          </p>
        ),
        "Behavioral and physiological effects": (
          <>
            <p>
              Alcohol produces noticeable changes in behavior that can be observed by others. As alcohol consumption
              increases, individuals may become more talkative, social, and uninhibited. This reduction in inhibition
              can lead to behaviors that are out of character, such as being overly expressive, loud, or emotionally
              reactive. In some cases, individuals may also become more aggressive or engage in inappropriate social
              behavior. These behavioral changes are largely due to alcohol’s effects on the brain areas responsible
              for self-control and judgment, which results in a decreased ability to regulate actions (Hart & Ksir,
              2022). Alcohol impairs attention, learning, memory, balance, and motor coordination. As BAC rises,
              individuals have more difficulty focusing, processing information, and responding appropriately to
              situations. Impulse control is reduced, which can lead to risky behaviors and poor decision-making.
              Individuals may focus more on immediate rewards rather than long-term consequences, increasing the
              likelihood of behaviors such as reckless driving or unsafe choices. Social behavior is also affected, as
              individuals may misinterpret social cues or respond in ways that are inappropriate or overly exaggerated
              (Field et al., 2010).
            </p>
            <p>
              Physiologically, it slows the CNS, causes vasodilation, dehydration, and changes in heart rate. Alcohol
              can affect heart rate and blood pressure, disrupt normal sleep patterns, often reducing sleep quality
              despite initially making individuals feel drowsy. In addition, alcohol can influence appetite and
              digestion. These physical effects reflect alcohol’s widespread impact on the body and help explain many
              of the risks associated with its use (National Institute on Alcohol Abuse and Alcoholism [NIAAA], 2021).
              Chronic, heavy use increases the risks of liver disease, cardiovascular disease, pancreatitis,
              neurological damage, and several cancers (Varghese & Dakhode, 2022).
            </p>
          </>
        ),
        "Tolerance, dependence, and withdrawal": (
          <>
            <p>
              Repeated alcohol use can produce tolerance, requiring greater amounts of alcohol to achieve the same
              effect. As alcohol use continues, some individuals may develop dependence. This can be both physical and
              psychological. Dependence develops when the brain adapts to chronic alcohol exposure. Physical dependence
              occurs when the body begins to rely on alcohol to function normally, while psychological dependence
              involves cravings and a strong desire to continue drinking. Individuals may begin to feel like they need
              alcohol to relax, cope with stress, or feel normal in social situations. Over time, alcohol use can become
              a regular part of daily life, making it difficult to stop even when negative consequences are present
              (National Institute on Alcohol Abuse and Alcoholism [NIAAA], 2021).
            </p>
            <p>
              When a person who is dependent on alcohol suddenly reduces or stops drinking, withdrawal symptoms can
              occur. These symptoms can begin within several hours after the last drink and may range from mild to
              severe. Withdrawal symptoms range from tremors, sweating, anxiety, and insomnia to seizures and delirium
              tremens in severe cases, making medical supervision important for severely impacted individuals.
              Withdrawal happens because the brain has adapted to alcohol over time. Alcohol increases calming activity
              through GABA and reduces stimulating activity through glutamate, so the brain adjusts to maintain
              balance. When alcohol is suddenly removed, this balance is disrupted, leaving too much stimulation and
              not enough calming activity. This can lead to symptoms such as anxiety, restlessness, and seizures. These
              effects show how alcohol changes brain function and why withdrawal can be both dangerous and severe
              (Costardi et al., 2015). Alcohol is one of the most dangerous substances for individuals to withdraw from
              and can become fatal if not medically monitored (Nehring et al., 2023). In more serious cases, individuals
              may experience tremors, hallucinations, or seizures. The severity of withdrawal often depends on how long
              and how heavily a person has been drinking. These symptoms occur because the brain has adjusted to
              alcohol’s presence and struggles to function normally without it (NIAAA, 2021).
            </p>
          </>
        ),
        "Side effects & risks": (
          <>
            <p>
              Alcohol can produce a variety of short-term side effects, especially as blood alcohol concentration (BAC)
              increases. These may include dizziness, nausea, vomiting, headaches, and impaired coordination.
              Individuals may also experience blurred vision, slurred speech, and slowed reaction time. In addition,
              alcohol can affect mood, leading to emotional changes such as irritability or lowered inhibitions. These
              short-term effects can increase the risk of accidents and injuries, especially in situations that require
              attention and coordination (National Institute on Alcohol Abuse and Alcoholism [NIAAA], 2021). Alcohol
              increases the risk of motor vehicle crashes, falls, violence, alcohol poisoning, and risky decision-making.
            </p>
            <p>
              Long-term alcohol use is associated with a wide range of health risks. Chronic use can lead to liver
              damage, including conditions such as fatty liver, hepatitis, and cirrhosis. Alcohol can also negatively
              impact the brain, leading to memory problems and cognitive decline over time. In addition, long-term use
              increases the risk of cardiovascular problems, certain cancers, and weakened immune function. These risks
              tend to increase with prolonged and heavy alcohol consumption, making alcohol a significant public health
              concern (World Health Organization [WHO], 2018; Hart & Ksir, 2022; Rehm et al., 2021).
            </p>
            <p>
              Alcohol overdose, often referred to as alcohol poisoning, can occur when large amounts of alcohol are
              consumed in a short period of time. Because alcohol is a central nervous system depressant, high levels
              can slow or stop critical functions such as breathing and heart rate. Individuals experiencing alcohol
              poisoning may become confused, unconscious, or unable to wake up, and in severe cases, this can lead to
              death. The risk of overdose increases when alcohol is consumed rapidly or in combination with other
              depressant substances (NIAAA, 2021).
            </p>
          </>
        ),
        "Therapeutic uses": (
          <p>
            Alcohol has very limited therapeutic use in modern medicine, but it has been used historically for certain
            medical purposes. In the past, alcohol was used as an anesthetic and as a sedative, although it is no
            longer used in this way due to safer and more effective alternatives. Also, as a psychoactive substance,
            alcohol is not considered a safe or effective treatment for mental health or medical conditions, despite
            the fact that some individuals may use it to cope with stress or anxiety (National Institute on Alcohol
            Abuse and Alcoholism [NIAAA], 2021). Alcohol has limited medical use today, but harm reduction strategies
            are important for reducing alcohol-related injuries and disease. These strategies include limiting alcohol
            intake, avoiding binge drinking, never driving after drinking, and seeking treatment early for alcohol use
            disorder. Evidence-based treatments include behavioral therapies and FDA-approved medications for AUD
            (NIAAA, 2025). Education about standard drink sizes and awareness of BAC can also help individuals make
            safer decisions. In addition, having access to support systems and treatment programs can reduce the risk
            of long-term harm and dependence (World Health Organization [WHO], 2018).
          </p>
        ),
        "Controversies, misconceptions, and public perception": (
          <>
            <p>
              Alcohol is widely accepted in many cultures despite contributing to significant preventable illness and
              death. If you are struggling with alcohol use disorder, it is difficult to avoid seeing alcohol at social
              functions or even something as simple as walking into a convenience store where it is displayed at
              prominent locations inside. This contrast has generated ongoing debate regarding advertising, legal
              availability, public health policies, and the balance between personal responsibility and government
              regulation.
            </p>
            <p>
              One important factor that contributes to alcohol use is its high level of social acceptance and
              accessibility. Because alcohol is legal and widely available, it is often viewed as less harmful than
              other substances, even though it carries significant risks. This can lead to increased use and, in some
              cases, misuse. Social and cultural norms may also encourage drinking in certain settings, making it more
              difficult for individuals to recognize or limit harmful patterns of use. Understanding these broader
              influences is important when considering both prevention and harm-reduction efforts (WHO, 2018).
            </p>
            <p>
              Alcohol use is widely accepted in many social settings, but there can also be stigma associated with
              certain patterns of use. For example, individuals who develop alcohol dependence may be viewed negatively
              or blamed for their condition, which can make it more difficult to seek help. This stigma can prevent
              individuals from accessing treatment or support services. At the same time, moderate drinking is often
              socially encouraged, which creates a contradiction in how alcohol use is perceived. Understanding this
              stigma is important for addressing both prevention and treatment (NIAAA, 2021).
            </p>
            <p>
              There are several common misconceptions about alcohol that can influence how people view its effects. One
              misconception is that people can &ldquo;sober up&rdquo; quickly through methods such as drinking coffee
              or taking a cold shower. In reality, the body processes alcohol at a consistent rate, and these methods
              do not significantly reduce BAC (National Institute on Alcohol Abuse and Alcoholism [NIAAA], 2021).
            </p>
            <p>
              Alcohol is often portrayed in media as harmless, enjoyable, and a normal part of social life. Movies,
              television, and social media frequently show drinking as a way to relax, celebrate, or connect with
              others, while minimizing or ignoring the negative consequences. However, scientific evidence shows that
              alcohol use carries significant risks, including impaired judgment, health problems, and the potential
              for dependence. This contrast between media portrayals and scientific reality can shape public attitudes
              and contribute to the normalization of alcohol use (World Health Organization [WHO], 2018).
            </p>
          </>
        ),
      }}
      references={[
        {
          text: "Abernathy, K., Chandler, L. J., & Woodward, J. J. (2010). Alcohol and the prefrontal cortex. International Review of Neurobiology, 91, 289–320.",
          href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3593065/",
        },
        {
          text: "Blocker, J. S. (2006). Did prohibition really work? Alcohol prohibition as a public health innovation. American Journal of Public Health, 96(2), 233–243.",
          href: "https://doi.org/10.2105/AJPH.2005.065409",
        },
        {
          text: "Boileau, I., Assaad, J. M., Pihl, R. O., Benkelfat, C., Leyton, M., Diksic, M., Tremblay, R. E., & Dagher, A. (2003). Alcohol promotes dopamine release in the human nucleus accumbens. Journal of Neuroscience, 23(27), 9418–9423.",
          href: "https://pubmed.ncbi.nlm.nih.gov/12827641/",
        },
        {
          text: "Cederbaum, A. I. (2012). Alcohol metabolism. Clinics in Liver Disease, 16(4), 667–685.",
          href: "https://pubmed.ncbi.nlm.nih.gov/23101976/",
        },
        {
          text: "Costardi, J. V. V., Nampo, R. A., Silva, G. L., Ribeiro, M. A. F., Stella, H. J., Stella, M. B., & Malheiros, S. V. P. (2015). A review on alcohol: From the central action mechanism to chemical dependency. Revista da Associação Médica Brasileira, 61(4), 381–387.",
          href: "https://doi.org/10.1590/1806-9282.61.04.381",
        },
        {
          text: "Davies, M. (2003). The role of GABA receptors in mediating the effects of alcohol in the central nervous system. Journal of Psychiatry & Neuroscience, 28(4), 263–274.",
          href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC165791",
        },
        {
          text: "Esser, M. B., Hedden, S. L., Kanny, D., Brewer, R. D., Gfroerer, J. C., & Naimi, T. S. (2014). Prevalence of alcohol dependence among US adult drinkers, 2009–2011. Preventing Chronic Disease, 11, E206.",
          href: "https://doi.org/10.5888/pcd11.140329",
        },
        {
          text: "Field, M., Wiers, R. W., Christiansen, P., Fillmore, M. T., & Verster, J. C. (2010). Acute alcohol effects on inhibitory control and implicit cognition: Implications for loss of control over drinking. Alcohol Research & Health, 33(1–2), 143–150.",
          href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3860462/",
        },
        {
          text: "Francis, J. M., et al. (2015). Harms associated with single occasion and sustained binge drinking among young adults. PLOS ONE, 10(9), e0140041.",
          href: "https://doi.org/10.1371/journal.pone.0140041",
        },
        {
          text: "Hart, C., & Ksir, C. (2022). Drugs, society, and human behavior (18th ed.). McGraw Hill.",
        },
        {
          text: "National Institute on Alcohol Abuse and Alcoholism. (2021). Alcohol’s effects on the body.",
          href: "https://www.niaaa.nih.gov/alcohols-effects-health/alcohols-effects-body",
        },
        {
          text: "National Institute on Alcohol Abuse and Alcoholism. (2025). National Institute on Alcohol Abuse and Alcoholism.",
          href: "https://niaaa.nih.gov",
        },
        {
          text: "Nehring, S. M., Chen, R. J., & Freeman, A. M. (2023). Alcohol use disorder. In StatPearls. StatPearls Publishing.",
          href: "https://ncbi.nlm.nih.gov/books/NBK436003/?wcmmode=disabled",
        },
        {
          text: "Oscar-Berman, M., & Marinković, K. (2007). Alcohol: Effects on neurobehavioral functions and the brain. Neuropsychology Review, 17(3), 239–257.",
          href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4040959/",
        },
        {
          text: "Rehm, J., Rovira, P., Llamosas-Falcon, L., & Shield, K. D. (2021). Dose-response relationships between levels of alcohol use and risks of mortality or disease. Nutrients, 13(8), 2652.",
          href: "https://www.mdpi.com/2072-6643/13/8/2652",
        },
        {
          text: "Shield, K. D., et al. (2025). Alcohol use and the global burden of disease. The Lancet Public Health.",
        },
        {
          text: "Squeglia, L. M., Jacobus, J., & Tapert, S. F. (2014). The influence of substance use on adolescent brain development. Alcohol Research: Current Reviews, 36(1), 15–25.",
          href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4321715/",
        },
        {
          text: "Tucker, J. S., et al. (2020). Trajectories of alcohol use from adolescence to adulthood. Journal of Studies on Alcohol and Drugs.",
        },
        {
          text: "Valenzuela, C. F., & Harris, R. A. (1997). Alcohol: Neurotransmitter interactions. Alcohol Health and Research World, 21(2), 144–148.",
          href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6826822/",
        },
        {
          text: "Varghese, J., & Dakhode, S. (2022). Effects of alcohol consumption on various systems of the human body: A systematic review. Cureus, 14(10), e300057.",
          href: "https://assets.cureus.com/uploads/review_article/pdf/117297/20240724-319105-r06hpm.pdf",
        },
        {
          text: "World Health Organization. (2018). Global status report on alcohol and health.",
          href: "https://www.who.int/publications/i/item/9789241565639",
        },
      ]}
    >
      <>
        <p>
          Alcohol is most commonly used in social and recreational settings, such as gatherings, celebrations, and
          cultural or religious events. Its use covers a wide range of populations, but patterns of consumption often
          vary by age, sex, environment, and social context. Research shows that alcohol use tends to increase during
          adolescence and peak in early adulthood, with individuals between the ages of 18 and 22 demonstrating some of
          the highest rates of consumption and binge drinking (Tucker et al., 2020; Esser et al., 2014). College
          students, in particular, are more likely to engage in heavy episodic drinking in social or group settings,
          where alcohol is often normalized and easily accessible (Francis et al., 2015). In contrast, older adults may
          consume alcohol more moderately and in routine or social contexts. Additionally, alcohol is sometimes used as
          a coping mechanism for stress, anxiety, depression, and other emotional challenges, which can increase the
          risk of addiction.
        </p>
        <p>
          Alcohol is a legal but powerful CNS depressant that affects multiple brain systems and neurotransmitters.
          While many individuals consume alcohol without developing dependence, excessive use can produce significant
          physical, psychological, and social consequences. Understanding its pharmacology and health effects supports
          informed decision-making and effective prevention and treatment efforts.
        </p>
        <p>
          These findings also have important implications for mental health and public policy. Early education,
          screening, evidence-based treatment, and harm reduction strategies can reduce alcohol-related harm while
          helping individuals make informed choices about alcohol use. Continued research also helps guide policies
          that balance public safety with personal responsibility. Understanding how alcohol affects the brain and body
          helps explain the behaviors we often see when people drink. This knowledge can be used to design prevention
          measures, education, and treatment.
        </p>
      </>
    </DrugArticle>
  );
}
