import DrugArticle from "../drug-article";

export default function CocainePage() {
  return (
    <DrugArticle
      title="Cocaine"
      authors={[
        { name: "Kristin Kirchner, Ph.D.", href: "https://www.linkedin.com/in/kristinkirchner/" },
        { name: "Brandi Abraham", href: "https://www.linkedin.com/in/brandi-abraham-858441417/" },
      ]}
      sections={{
        "Drug identification and classification": (
          <p>
            Cocaine is the generic name of a drug created from the coca plant Erythroxylum coca. It is classified as a
            stimulant because it is known to increase activity throughout the central nervous system. It is classified as
            a Schedule II substance in the United States, which means it has a high potential for abuse in addition to
            some restricted medical use. Cocaine is mostly known for being frequently used recreationally in social
            settings like clubs or parties, while it is also known to be used as a local anesthetic in some medical
            settings. Cocaine usage is commonly associated with the nightclub culture because people feel the need to
            quickly increase their energy in this setting (Edland-Gryt, 2021).
          </p>
        ),
        "Routes of administration & pharmacokinetics": (
          <p>
            There are several known ways cocaine may be consumed, including injection, smoking, or snorting. How quickly
            and strongly the drug acts on one’s body depends upon how it is brought into the body. Snorting takes
            slightly longer to take effect than smoking or injecting. Because the high from cocaine is usually
            short-lived, people are prone to increase usage of the drug, which can lead towards higher risk to the body.
          </p>
        ),
        "Brain regions & neural systems affected": (
          <p>
            Cocaine is known to primarily impact the regions of the brain that deal with decision-making and rewards,
            including the prefrontal cortex and nucleus accumbens. These regions of the brain are a part of the reward
            system that controls motivation and pleasure. According to research, cocaine addiction is associated with
            abnormal functioning in the prefrontal cortex and increased physical activity in reward-related brain areas
            like the striatum (Vaquero et al., 2017). The imbalance in the brain and body weakens self-control and makes
            rewards feel stronger when they are not, which is why people continue to use the drug while being aware of
            the harmful effects. These brain alterations can make it harder for people to operate normally in the
            absence of medication.
          </p>
        ),
        "Neurotransmitters & circuits affected": (
          <p>
            The drug cocaine mostly affects dopamine but also impacts norepinephrine and serotonin as stated previously.
            As a reuptake inhibitor, it has the ability to prevent the brain from reabsorbing the chemicals in the
            neurotransmitters. Because of this, dopamine levels rise, producing stronger and more intense emotions of
            reward and pleasure. Once a person’s body becomes so used to taking cocaine, the experience of pleasure they
            feel with the drug will slowly begin to decrease, creating less dopamine, which is also why individuals can
            experience points of feeling “low” or unmotivated to take on daily tasks when they are not using the drug.
          </p>
        ),
        "Subjective effects": (
          <p>
            People who have used cocaine describe it as a feeling of blissfulness, having an increase in energy, being
            more confident, and alert. Users who have had lower dosages feel more focused and social, whereas someone who
            has taken a higher dosage can begin to feel anxiety, irritation, hallucinations, and even paranoia. Of
            course, each person’s experience is different, and their settings play a factor as well in how they respond
            to cocaine. In social settings, cocaine can be a drug that is linked to emotions of sharing experiences and
            connections with those around them, even if they are temporary (Edland-Gryt, 2021). After the high of
            cocaine begins to “wear-off,” people can experience feelings of exhaustion and sorrow.
          </p>
        ),
        "Behavioral and physiological effects": (
          <p>
            Increasing the use of cocaine can lead to noticeable behavioral changes such as increased talkativeness,
            risk-taking, and recklessness. Additionally, it may hinder judgment and decision-making. Research has also
            shown that cocaine usage is associated with an increase in aggression and violence throughout relationships
            (Kadri et al., 2025). Physiologically, cocaine has the ability to raise blood pressure, body temperature, and
            heart rate. It can also interfere with sleep routines and decrease the desire to eat, which over time puts
            stress on the body if one is not eating healthy. These effects are related to the body’s “flight or fight”
            response due to overstimulation.
          </p>
        ),
        "Tolerance, dependence, and withdrawal": (
          <p>
            People who use cocaine frequently are prone to allow their bodies to become tolerant, constantly requiring
            more of the drug to have the same effects they had when they first tried cocaine. The usage of cocaine is
            closely linked with psychological dependence, where users experience intense cravings for cocaine. If someone
            decides to stop using cocaine, withdrawal symptoms may include lack of motivation, fatigue, irritability, and
            a sense of gloominess. The reason behind these symptoms is that once someone’s brain has become accustomed to
            the presence of cocaine, they find it difficult to operate normally without the drug. Even when someone
            desires to stop using the drug, it can be difficult to break the cycle because of the withdrawal symptoms.
          </p>
        ),
        "Side effects & risks": (
          <p>
            There are both short-term risks and long-term risks from the usage of cocaine. Some of the short-term
            effects can include anxiety, increased heart rate, and potential overdose. In severe cases, cocaine poisoning
            may occur and lead to cardiac or respiratory arrest. Long-term risks can create problems like heart disease,
            stroke, and brain damage. Of course, there are other social and psychological dangers due to use of cocaine.
            Substance abuse has been researched and connected to some form of traumatic experience, prone to leading a
            person to addiction (Hong et al., 2023). Mixing cocaine with other drugs is a huge risk factor, and this can
            increase the risk of serious harm to oneself or another person. Furthermore, prenatal exposure to a drug such
            as cocaine can impact the brain development and later behavior of a growing child, indicating the effects
            can extend well beyond the individual (Salzwedel et al., 2020).
          </p>
        ),
        "Therapeutic uses": (
          <p>
            Although the use of cocaine is very limited in the medical industry, it is not commonly known to be used as
            a treatment because of the high risk. It is used in local surgical procedures such as a local anesthetic.
            Harm reduction is very important because of the limited use of cocaine throughout the medical field. This can
            include avoiding mixing cocaine and alcohol, understanding dosage risks, and increasing awareness of the drug
            and the effects it has on someone’s body. Research also expresses that treating cocaine addiction is
            challenging, and the approaches toward it focus more on the behavior of individuals and on developing
            healthier habits that can become more effective than punishment-based methods to get rid of the addiction
            (Ersche et al., 2016).
          </p>
        ),
        "Controversies, misconceptions, and public perception": (
          <p>
            Cocaine is often viewed in multiple ways depending on the context and setting it is used in; some describe
            cocaine as a “party drug.” It has also been associated with upper-class status, since those who used cocaine
            were often wealthy, and at one time the availability of crack was very limited. This was before crack
            cocaine became more widely available. There is also a difference in how cocaine can be perceived versus how
            social and cultural factors influence how drugs may be viewed. Due to the stigmas people create about
            different drugs, this can also prevent someone from getting the proper assistance to stop using.
          </p>
        ),
      }}
      references={[
        {
          text: "Carroll, K. M., Nich, C., & Frankforter, T. L. (1999). Do patients change in the ways we intend? Assessing acquisition of coping skills among cocaine-dependent patients. Psychological Assessment, 11(1), 77–85.",
          href: "https://doi.org/10.1037/1040-3590.11.1.77",
        },
        {
          text: "Edland-Gryt, M. (2021). Cocaine rituals in club culture: Intensifying and controlling alcohol intoxication. Journal of Drug Issues, 51(2), 391–408.",
          href: "https://doi.org/10.1177/0022042620986514",
        },
        {
          text: "Ersche, K. D., Gillan, C. M., Jones, P. S., Williams, G. B., Ward, L. H. E., Luijten, M., de Wit, S., Sahakian, B. J., Bullmore, E. T., & Robbins, T. W. (2016). Carrots and sticks fail to change behavior in cocaine addiction. Science, 352(6292), 1468–1471.",
          href: "https://doi.org/10.1126/science.aaf3700",
        },
        {
          text: "Hong, J. H., de Dios, C., Gilmore-Thomas, A., Lathan-Powell, E. C., Hamilton, J. E., & Heads, A. M. (2023). The association between potentially traumatic events and cocaine, cannabis, and alcohol use differs by race. Substance Use & Misuse, 58(7), 889–899.",
          href: "https://doi.org/10.1080/10826084.2023.2191699",
        },
        {
          text: "Kadri, A., Clergue-Duval, V., Lambert, C., Atger, L., Chouchana, M., de Chazeron, I., Questel, F., Laporte, C., Brousse, G., Vorspan, F., & Vicard-Olagne, M. (2025). Is cocaine use associated with intimate partner violence in patients from addiction centers? Substance Use & Misuse, 60(11), 1577–1582.",
          href: "https://doi.org/10.1080/10826084.2025.2506144",
        },
        {
          text: "Salzwedel, A., Chen, G., Chen, Y., Grewen, K., & Gao, W. (2020). Functional dissection of prenatal drug effects on baby brain and behavioral development. Human Brain Mapping, 41(17), 4789–4803.",
          href: "https://doi.org/10.1002/hbm.25158",
        },
        {
          text: "Vaquero, L., Cámara, E., Sampedro, F., Pérez de los Cobos, J., Batlle, F., Fabregas, J. M., Sales, J. A., Cervantes, M., Ferrer, X., Lazcano, G., Rodríguez, F. A., Riba, J., & Rodríguez-Fornells, A. (2017). Cocaine addiction is associated with abnormal prefrontal function, increased striatal connectivity and sensitivity to monetary incentives, and decreased connectivity outside the human reward circuit. Addiction Biology, 22(3), 844–856.",
          href: "https://doi.org/10.1111/adb.12356",
        },
      ]}
    >
      <p>
        Cocaine is a powerful drug that has a strong impact on both the brain and behavior of an individual’s body. It is
        well known for its recreational usage and strong potential for addiction, despite the fact that it is
        occasionally used in the medical field. Its effects on the brain, body, and general health illustrate why it
        continues to be a significant issue in public health and psychology.
      </p>
    </DrugArticle>
  );
}
