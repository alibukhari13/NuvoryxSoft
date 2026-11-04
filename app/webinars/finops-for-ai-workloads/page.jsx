import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/webinars/finops-for-ai-workloads/page";

export const metadata = {
  title: "FinOps for AI workloads: controlling GPU costs at scale · Nuvoryx",
};

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
