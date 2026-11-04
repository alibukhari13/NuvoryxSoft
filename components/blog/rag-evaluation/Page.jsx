import Page from "@/components/templates/ArticlePage";
const page = {
  title: "Evaluating RAG systems: metrics that correlate with user trust",
  eyebrow: "AI",
  date: "Aug 21, 2025",
  readTime: "10 min read",
  description:
    "Faithfulness, groundedness and answer relevance, measured the right way.",
  paragraphs: [
    "Retrieval quality is often the hidden reason a RAG answer is incomplete. Evaluate the retrieved context separately from the final response so the team can see where errors begin.",
    "Create a representative set of questions with expected evidence. Measure whether the right sources appear near the top, whether answers cite those sources and whether the system correctly declines unsupported questions.",
    "Keep the evaluation set versioned with the content and retrieval configuration. That lets teams compare chunking, ranking, filters and model changes over time.",
    "Pair automated metrics with human review for sensitive or ambiguous cases. The result is a feedback loop that improves trust as the knowledge base changes.",
  ],
  pullQuote: "Measure what the system retrieved before judging what it said.",
};

export default function blogragevaluationPage() {
  return <Page page={page} />;
}
