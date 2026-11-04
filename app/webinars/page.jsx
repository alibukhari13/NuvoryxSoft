import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/webinars/page";

export const metadata = { title: "Webinars · Nuvoryx" };

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
