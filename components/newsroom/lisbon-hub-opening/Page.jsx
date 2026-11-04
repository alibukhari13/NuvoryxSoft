import Page from "@/components/templates/ArticlePage";
const page = {
  title: "Nuvoryx opens a new delivery hub in Lisbon",
  eyebrow: "COMPANY NEWS",
  date: "Jul 17, 2025",
  readTime: "3 min read",
  description:
    "The new Lisbon hub expands our European presence and creates closer collaboration across client teams.",
  paragraphs: [
    "Nuvoryx has opened a new delivery hub in Lisbon, Portugal, adding to its distributed network of engineering and client teams.",
    "The hub will support collaboration with clients across Europe and bring engineers, designers and delivery specialists together around shared product goals.",
    "Lisbon joins our existing locations in San Francisco, New York, Dubai, Lahore and Singapore.",
  ],
  pullQuote:
    "A strong local team helps us stay close to the people and products we support.",
};

export default function newsroomlisbonhubopeningPage() {
  return <Page page={page} />;
}
