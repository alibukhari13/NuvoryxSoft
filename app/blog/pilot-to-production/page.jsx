import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/blog/pilot-to-production/page";

export const metadata = {
  title:
    "From pilot to production: an operating model for enterprise AI · Nuvoryx",
};

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
