import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/services/cloud-infrastructure/multi-cloud-aws-azure-gcp/page";

export const metadata = { title: "Multi-Cloud (AWS, Azure, GCP) · Nuvoryx" };

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
