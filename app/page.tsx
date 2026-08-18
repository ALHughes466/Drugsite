import Link from "next/link";

const ABOUT_LINKS = [
  "Filler text for about info",
  "Filler text for about info",
  "Filler text for about info",
  "Filler text for about info",
  "Filler text for about info",
];

export default function Home() {
  return (
    <div className="flex flex-col items-center px-8 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Kirchner.wiki</h1>

      <nav className="mt-10 flex flex-wrap justify-center gap-x-24 gap-y-4">
        <Link href="/open-educational-resources" className="text-lg font-bold underline hover:no-underline">
          Open Educational Resources
        </Link>
        <Link href="/drug-reference-site" className="text-lg font-bold underline hover:no-underline">
          Drug Reference Site
        </Link>
      </nav>

      <div className="mt-40 flex max-w-3xl flex-wrap justify-center gap-x-10 gap-y-6">
        {ABOUT_LINKS.map((text, index) => (
          <span key={index} className="font-semibold whitespace-nowrap">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
