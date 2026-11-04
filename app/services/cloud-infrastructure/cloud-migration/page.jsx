import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/services/cloud-infrastructure/cloud-migration/page";

export const metadata = { title: "Cloud Migration · Nuvoryx" };

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
