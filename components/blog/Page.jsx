import ResourceHero from "@/components/resources/ResourceHero";
import TypeListing from "@/components/resources/TypeListing";
import Section03 from "@/components/webinars/Section03";
import Section04 from "@/components/webinars/Section04";

export default function blogPage() {
  return (
    <>
      <ResourceHero
        label="Blog"
        title={
          <>
            Ideas from the <span className="text-brand">engine room.</span>
          </>
        }
        text="Practical, opinionated writing from our engineers, architects and AI specialists."
      />
      <TypeListing type="Blog" />
      <Section03 />
      <Section04 />
    </>
  );
}
