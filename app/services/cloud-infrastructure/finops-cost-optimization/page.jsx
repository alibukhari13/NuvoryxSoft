import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/services/cloud-infrastructure/finops-cost-optimization/page";

export const metadata = { title: "FinOps / Cost Optimization · Nuvoryx" };

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
