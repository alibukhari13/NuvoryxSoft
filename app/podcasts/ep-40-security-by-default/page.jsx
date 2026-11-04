import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/podcasts/ep-40-security-by-default/page";

export const metadata = {
  title: "Security by default: shifting left without slowing down · Nuvoryx",
};

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
