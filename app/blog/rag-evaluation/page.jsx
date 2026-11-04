import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/blog/rag-evaluation/page";

export const metadata = {
  title: "RAG evaluation: measure retrieval quality before users do · Nuvoryx",
};

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
