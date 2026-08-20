import Image, { type StaticImageData } from "next/image";

interface DrugArticleImage {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
}

const IMAGE_DISPLAY_HEIGHT = 256;

function getIntrinsicSize(image: DrugArticleImage) {
  if (typeof image.src !== "string") {
    return { width: image.width ?? image.src.width, height: image.height ?? image.src.height };
  }
  return { width: image.width, height: image.height };
}

export const DRUG_SECTION_TITLES = [
  "Drug identification and classification",
  "Routes of administration & pharmacokinetics",
  "Brain regions, neural systems, and neurotransmitters affected",
  "Subjective effects",
  "Behavioral and physiological effects",
  "Tolerance, dependence, and withdrawal",
  "Side effects & risks",
  "Therapeutic uses",
  "Controversies, misconceptions, and public perception",
] as const;

export type DrugSectionTitle = (typeof DRUG_SECTION_TITLES)[number];

interface DrugArticleInteraction {
  title: string;
  content: React.ReactNode;
}

interface DrugArticleReference {
  text: string;
  href?: string;
}

interface DrugArticleAuthor {
  name: string;
  href?: string;
}

interface DrugArticleProps {
  title: string;
  authors?: DrugArticleAuthor[];
  children: React.ReactNode;
  images?: DrugArticleImage[];
  sections: Record<DrugSectionTitle, React.ReactNode>;
  interactions?: DrugArticleInteraction[];
  references?: DrugArticleReference[];
}

export default function DrugArticle({
  title,
  authors = [],
  children,
  images = [],
  sections,
  interactions = [],
  references = [],
}: DrugArticleProps) {
  return (
    <article className="flex gap-12">
      <div className="min-w-0 flex-1 max-w-3xl">
        <header>
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          <p className="mt-1 text-sm text-black/50 dark:text-white/50">
            {authors.length > 0 ? (
              <>
                By{" "}
                {authors.map((author, index) => (
                  <span key={author.href ?? author.name}>
                    {index > 0 &&
                      (index === authors.length - 1
                        ? authors.length > 2
                          ? ", and "
                          : " and "
                        : ", ")}
                    {author.href ? (
                      <a href={author.href} className="underline hover:no-underline">
                        {author.name}
                      </a>
                    ) : (
                      author.name
                    )}
                  </span>
                ))}
              </>
            ) : (
              "Author not yet credited"
            )}
          </p>
        </header>
        <div className="mt-6 flex flex-col gap-4 leading-7">{children}</div>
        <div className="mt-8 flex flex-col divide-y divide-black/10 border-t border-black/10 dark:divide-white/10 dark:border-white/10">
          {DRUG_SECTION_TITLES.map((sectionTitle) => (
            <CollapsibleSection key={sectionTitle} title={sectionTitle}>
              {sections[sectionTitle]}
            </CollapsibleSection>
          ))}
          {interactions.map((interaction) => (
            <CollapsibleSection key={interaction.title} title={interaction.title}>
              {interaction.content}
            </CollapsibleSection>
          ))}
          <CollapsibleSection title="References">
            {references.length > 0 ? (
              <ul className="flex list-disc flex-col gap-2 pl-5">
                {references.map((reference) => (
                  <li key={reference.href ?? reference.text}>
                    {reference.href ? (
                      <a
                        href={reference.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:no-underline"
                      >
                        {reference.text}
                      </a>
                    ) : (
                      reference.text
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No references yet.</p>
            )}
          </CollapsibleSection>
        </div>
      </div>
      <aside className="w-64 shrink-0">
        <div className="flex flex-col gap-4">
          {images.length > 0 ? (
            images.map((image) => {
              const { width: intrinsicWidth, height: intrinsicHeight } = getIntrinsicSize(image);
              const displayWidth =
                intrinsicWidth && intrinsicHeight
                  ? Math.round((IMAGE_DISPLAY_HEIGHT * intrinsicWidth) / intrinsicHeight)
                  : IMAGE_DISPLAY_HEIGHT;
              return (
                <Image
                  key={typeof image.src === "string" ? image.src : image.src.src}
                  src={image.src}
                  alt={image.alt}
                  width={intrinsicWidth ?? IMAGE_DISPLAY_HEIGHT}
                  height={intrinsicHeight ?? IMAGE_DISPLAY_HEIGHT}
                  style={{ height: IMAGE_DISPLAY_HEIGHT, width: displayWidth }}
                  className="max-w-none rounded border border-black/10 dark:border-white/10"
                />
              );
            })
          ) : (
            <div className="flex h-64 w-full items-center justify-center rounded border border-black/10 bg-black/5 px-2 text-center text-xs text-black/40 dark:border-white/10 dark:bg-white/5 dark:text-white/40">
              No images yet
            </div>
          )}
        </div>
      </aside>
    </article>
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
