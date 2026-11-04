import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/services/cybersecurity/data-protection/page";

export const metadata = { title: "Data Protection · Nuvoryx" };

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
