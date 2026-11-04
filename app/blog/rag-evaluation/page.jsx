import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/blog/rag-evaluation/page";

export const metadata = {
  title: "Evaluating RAG systems: metrics that correlate with user trust · Nuvoryx",
};

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
