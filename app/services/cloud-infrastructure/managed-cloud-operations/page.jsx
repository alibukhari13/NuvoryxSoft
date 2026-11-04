import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/services/cloud-infrastructure/managed-cloud-operations/page";

export const metadata = { title: "Managed Cloud Operations · Nuvoryx" };

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
