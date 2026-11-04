import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/maintenance/page";

export const metadata = { title: "We’ll be back shortly. · Nuvoryx" };

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
