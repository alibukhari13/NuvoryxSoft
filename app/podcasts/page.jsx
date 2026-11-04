import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/podcasts/page";

export const metadata = { title: "Podcasts · Nuvoryx" };

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
