import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/blog/finops-playbook/page";

export const metadata = {
  title:
    "The FinOps playbook: cutting cloud spend 30% without slowing teams · Nuvoryx",
};

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
