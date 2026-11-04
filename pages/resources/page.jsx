import Section01 from "@/components/resources/Section01";
import Section03 from "@/components/resources/Section03";
import Section04 from "@/components/resources/Section04";
import { ResourceGrid, ResourcesProvider } from "@/components/resources/ResourceBrowser";

export default function ResourcesPage() {
  return (
    <ResourcesProvider>
      <Section01 key="Section01" />
      <ResourceGrid key="Section02" />
      <Section03 key="Section03" />
      <Section04 key="Section04" />
    </ResourcesProvider>
  );
}
