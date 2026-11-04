import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/blog/ai-agents-in-production/page";

export const metadata = {
  title:
    "AI agents in production: guardrails, evals and the boring bits that matter · Nuvoryx",
};

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
