import Section01 from "@/components/landing/Section01";
import Section02 from "@/components/landing/Section02";
import Section03 from "@/components/landing/Section03";
import Section04 from "@/components/landing/Section04";
import Section05 from "@/components/landing/Section05";
import Section06 from "@/components/landing/Section06";
import Section07 from "@/components/landing/Section07";
import Section08 from "@/components/landing/Section08";
import Section09 from "@/components/landing/Section09";
import Section10 from "@/components/landing/Section10";
import Section11 from "@/components/landing/Section11";
import Section12 from "@/components/landing/Section12";
import Section13 from "@/components/landing/Section13";
import Section14 from "@/components/landing/Section14";
import Section15 from "@/components/landing/Section15";
import Section16 from "@/components/landing/Section16";
import Section17 from "@/components/landing/Section17";
import Section18 from "@/components/landing/Section18";
import Section19 from "@/components/landing/Section19";
import Section20 from "@/components/landing/Section20";

const sections = [
  Section01,
  Section02,
  Section03,
  Section04,
  Section05,
  Section06,
  Section07,
  Section08,
  Section09,
  Section10,
  Section11,
  Section12,
  Section13,
  Section14,
  Section15,
  Section16,
  Section17,
  Section18,
  Section19,
  Section20,
];

export default function HomePage() {
  return sections.map((Section, index) => <Section key={index} />);
}
