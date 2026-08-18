"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const DRUGS = [
  "Alcohol",
  "Amphetamines",
  "Anticonvulsants",
  "Antidepressants",
  "Antipsychotics",
  "Anxiolytics",
  "Caffeine",
  "Cannabis",
  "Cocaine",
  "Inhalants",
  "Mood Stabilizers",
  "Nitrites",
  "Opioids",
  "OTC Medications",
  "Performance Enhancers",
  "Psychedelics",
  "Sleeping Pills",
  "Tobacco",
];

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function NavBar() {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`sticky top-0 flex h-screen shrink-0 flex-col overflow-hidden border-black/10 transition-[width] duration-300 ease-in-out dark:border-white/10 ${
        open ? "w-56 border-r" : "w-14 border-r-0"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label={open ? "Collapse navigation" : "Expand navigation"}
        className="flex w-14 shrink-0 items-center justify-center py-8"
      >
        <Image
          src="/hamburger-icon.svg"
          alt=""
          width={24}
          height={24}
          className="dark:invert"
        />
      </button>
      <nav className="w-56 shrink-0 overflow-y-auto px-6">
        <ul className="flex w-44 flex-col items-end gap-3">
          {DRUGS.map((drug) => (
            <li key={drug} className="w-full text-right">
              <Link
                href={`/${slugify(drug)}`}
                className="text-[12.5pt] whitespace-nowrap hover:underline"
              >
                {drug}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
