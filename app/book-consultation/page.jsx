import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/book-consultation/page";

export const metadata = { title: "Book Consultation · Nuvoryx" };

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
