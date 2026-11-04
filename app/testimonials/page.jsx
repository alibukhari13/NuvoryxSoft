import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/testimonials/page";
import LogosPage from "@/pages/testimonials-logos/page";

export const metadata = { title: "Testimonials · Nuvoryx" };

export default async function TestimonialsRoute({ searchParams }) {
  const query = await searchParams;
  return (
    <PageShell>{query?.logos === "1" ? <LogosPage /> : <Page />}</PageShell>
  );
}
