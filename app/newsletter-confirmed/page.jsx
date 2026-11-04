import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/newsletter-confirmed/page";

export const metadata = { title: "You’re on the list. · Nuvoryx" };

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
