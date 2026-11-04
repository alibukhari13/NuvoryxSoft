import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/industries/healthcare/page";

export const metadata = { title: "Healthcare · Nuvoryx" };

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
