import Section01 from "@/components/esg/Section01";
import Section02 from "@/components/esg/Section02";
import Section03 from "@/components/esg/Section03";
import Section04 from "@/components/esg/Section04";
import Section05 from "@/components/esg/Section05";

export default function EsgPage() {
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
