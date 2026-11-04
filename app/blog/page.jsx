import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/blog/page";

export const metadata = { title: "Blog · Nuvoryx" };

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
