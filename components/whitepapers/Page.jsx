import ResourceHero from "@/components/resources/ResourceHero";
import TypeListing from "@/components/resources/TypeListing";
import Section03 from "@/components/webinars/Section03";
import Section04 from "@/components/webinars/Section04";

export default function whitepapersPage() {
  return (
    <>
      <ResourceHero
        label="White papers & Ebooks"
        title={
          <>
            Research you can <span className="text-brand">act on.</span>
          </>
        }
        text="In-depth frameworks and benchmarks drawn from hundreds of real engagements."
      />
      <TypeListing type="White paper" />
      <Section03 />
      <Section04 />
    </>
  );
}
