import Section01 from "@/components/newsroom/Section01";
import Section02 from "@/components/newsroom/Section02";
import Section03 from "@/components/newsroom/Section03";
import Section04 from "@/components/newsroom/Section04";

export default function NewsroomPage() {
  return (
    <>
      <Section01 key="Section01" />
      <Section02 key="Section02" />
      <Section03 key="Section03" />
      <Section04 key="Section04" />
    </>
  );
}
