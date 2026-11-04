import Section01 from "@/components/webinars/Section01";
import Section02 from "@/components/webinars/Section02";
import Section03 from "@/components/webinars/Section03";
import Section04 from "@/components/webinars/Section04";

export default function WebinarsPage() {
  return (
    <>
      <Section01 key="Section01" />
      <Section02 key="Section02" />
      <Section03 key="Section03" />
      <Section04 key="Section04" />
    </>
  );
}
