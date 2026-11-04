import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-paper px-6 text-center text-ink">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          404 · Page not found
        </p>
        <h1 className="mt-5 text-4xl">This page isn’t here.</h1>
        <Link
          className="mt-8 inline-flex rounded-full bg-brand px-6 py-3 font-bold"
          href="/"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
