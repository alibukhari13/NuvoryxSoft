import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/newsroom/page";

export const metadata = { title: "Newsroom · Nuvoryx" };

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
