import DrugArticle from "../drug-article";

export default function OtcMedicationsPage() {
  return (
    <DrugArticle
      title="OTC Medications"
      sections={{
        "Drug identification and classification": <p>Placeholder text.</p>,
        "Routes of administration & pharmacokinetics": <p>Placeholder text.</p>,
        "Brain regions & neural systems affected": <p>Placeholder text.</p>,
        "Neurotransmitters & circuits affected": <p>Placeholder text.</p>,
        "Subjective effects": <p>Placeholder text.</p>,
        "Behavioral and physiological effects": <p>Placeholder text.</p>,
        "Tolerance, dependence, and withdrawal": <p>Placeholder text.</p>,
        "Side effects & risks": <p>Placeholder text.</p>,
        "Therapeutic uses": <p>Placeholder text.</p>,
        "Controversies, misconceptions, and public perception": (
          <p>Placeholder text.</p>
        ),
      }}
    >
      <p>Placeholder text.</p>
      <p>Placeholder text.</p>
      <p>Placeholder text.</p>
    </DrugArticle>
  );
}
