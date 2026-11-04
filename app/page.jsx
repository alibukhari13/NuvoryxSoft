import PageShell from "@/components/layout/PageShell";
import HomePage from "@/pages/home/page";

export const metadata = {
  title: "Nuvoryx — Engineering intelligent software.",
};

export default function HomeRoute() {
  return (
    <PageShell>
      <HomePage />
    </PageShell>
  );
}
