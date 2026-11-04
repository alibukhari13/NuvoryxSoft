import Section01 from "@/components/case-studies/northwind-cloud-migration/Section01";
import Section02 from "@/components/case-studies/northwind-cloud-migration/Section02";
import Section03 from "@/components/case-studies/northwind-cloud-migration/Section03";
import Section04 from "@/components/case-studies/northwind-cloud-migration/Section04";
import Section05 from "@/components/case-studies/northwind-cloud-migration/Section05";

export default function CaseStudiesNorthwindCloudMigrationPage() {
  return (
    <>
      <Section01 key="Section01" />
      <Section02 key="Section02" />
      <Section03 key="Section03" />
      <Section04 key="Section04" />
      <Section05 key="Section05" />
    </>
  );
}
