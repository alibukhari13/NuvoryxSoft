import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/blog/legacy-modernization-patterns/page";

export const metadata = {
  title: "Strangler, rehost or rebuild? Choosing your modernization pattern · Nuvoryx",
};

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
