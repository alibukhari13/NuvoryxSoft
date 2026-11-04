import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/services/cloud-infrastructure/page";

export const metadata = { title: "Cloud Infrastructure · Nuvoryx" };

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
