import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/about/page";

export const metadata = { title: "About · Nuvoryx" };

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
