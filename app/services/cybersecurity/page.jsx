import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/services/cybersecurity/page";

export const metadata = { title: "Cybersecurity · Nuvoryx" };

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
