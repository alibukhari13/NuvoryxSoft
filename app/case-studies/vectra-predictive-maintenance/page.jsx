import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/case-studies/vectra-predictive-maintenance/page";

export const metadata = {
  title: "Predictive maintenance cuts unplanned downtime by 61% · Nuvoryx",
};

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
