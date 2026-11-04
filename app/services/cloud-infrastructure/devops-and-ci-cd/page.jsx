import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/services/cloud-infrastructure/devops-and-ci-cd/page";

export const metadata = { title: "DevOps & CI/CD · Nuvoryx" };

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
