import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/this-page-does-not-exist/page";

export const metadata = { title: "This page isn’t here. · Nuvoryx" };

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
