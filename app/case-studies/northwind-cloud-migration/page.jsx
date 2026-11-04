import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/case-studies/northwind-cloud-migration/page";

export const metadata = {
  title:
    "Migrating 340 workloads to AWS with zero unplanned downtime · Nuvoryx",
};

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
