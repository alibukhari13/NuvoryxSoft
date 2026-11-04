import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/case-studies/medacore-clinical-copilot/page";

export const metadata = {
  title:
    "A clinical copilot that gives physicians 9 hours back every week · Nuvoryx",
};

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
