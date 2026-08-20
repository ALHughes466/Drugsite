"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PLACEHOLDERS = [
  "Placeholder 1",
  "Placeholder 2",
  "Placeholder 3",
  "Placeholder 4",
  "Placeholder 5",
  "Placeholder 6",
  "Placeholder 7",
];

function OerNavBar() {
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
          {PLACEHOLDERS.map((label) => (
            <li key={label} className="w-full text-right">
              <Link href="#" className="text-[12.5pt] whitespace-nowrap hover:underline">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default function OpenEducationalResourcesPage() {
  return (
    <>
      <header className="w-full py-16 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          <Link href="/open-educational-resources">Open Educational Resources</Link>
        </h1>
        <p className="mt-3">
          <Link href="/" className="text-sm underline hover:no-underline">
            Return to homepage
          </Link>
        </p>
      </header>
      <div className="mx-auto flex w-full max-w-6xl flex-1">
        <OerNavBar />
        <main className="flex-1 px-8 py-8">
          <div className="flex flex-col gap-4 leading-7">
            <p>Placeholder text.</p>
          </div>
        </main>
      </div>
    </>
  );
}
