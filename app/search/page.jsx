import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/search/page";

export const metadata = { title: "Search · Nuvoryx" };

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
