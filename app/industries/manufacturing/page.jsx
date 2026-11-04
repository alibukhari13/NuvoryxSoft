import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/industries/manufacturing/page";

export const metadata = { title: "Manufacturing · Nuvoryx" };

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
