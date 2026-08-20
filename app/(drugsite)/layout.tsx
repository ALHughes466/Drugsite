import Link from "next/link";
import NavBar from "./nav-bar";

export default function DrugsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="w-full py-16 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          <Link href="/drug-reference-site">Drug Reference Site</Link>
        </h1>
        <p className="mt-3">
          <Link href="/" className="text-sm underline hover:no-underline">
            Return to homepage
          </Link>
        </p>
      </header>
      <div className="mx-auto flex w-full max-w-6xl flex-1">
        <NavBar />
        <main className="flex-1 px-8 py-8">{children}</main>
      </div>
    </>
  );
}
