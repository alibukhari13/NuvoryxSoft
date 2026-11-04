import ResourceHero from "@/components/resources/ResourceHero";
import TypeListing from "@/components/resources/TypeListing";
import Section03 from "@/components/webinars/Section03";
import Section04 from "@/components/webinars/Section04";

export default function podcastsPage() {
  return (
    <>
      <ResourceHero
        label="Podcasts"
        title={
          <>
            Beyond <span className="text-brand">the code.</span>
          </>
        }
        text="Candid conversations with CTOs, founders and AI leaders. New episodes every other Wednesday."
      />
      <TypeListing type="Podcast" />
      <Section03 />
      <Section04 />
    </>
  );
}
