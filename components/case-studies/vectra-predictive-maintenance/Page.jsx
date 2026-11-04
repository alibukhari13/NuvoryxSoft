import Page from "@/components/templates/CaseStudyPage";
const page = {
  client: "Vectra Manufacturing",
  industry: "Manufacturing",
  service: "AI & Data Innovation",
  title: "Predictive maintenance cuts unplanned downtime by 61%",
  summary:
    "An industrial manufacturer used equipment data and machine learning to spot failures earlier and plan maintenance with less disruption.",
  metrics: [
    ["61%", "fewer unplanned stoppages"],
    ["28%", "lower maintenance cost"],
    ["6 plants", "connected to the platform"],
  ],
  challenge:
    "Maintenance teams relied on fixed schedules and reactive alerts across several plants. They needed a dependable way to prioritise interventions without overwhelming operators with false alarms.",
  approach:
    "We connected historian and sensor data, created condition features with plant specialists and delivered risk-ranked alerts integrated into existing maintenance workflows.",
  outcomes: [
    {
      title: "Earlier intervention",
      description:
        "Operations teams receive interpretable indicators before critical equipment fails.",
    },
    {
      title: "A shared view",
      description:
        "Plant and central teams can compare asset health and maintenance outcomes.",
    },
  ],
  quote:
    "We can now plan around the signal instead of waiting for the next breakdown.",
  author: "Operations Director",
  role: "Vectra Manufacturing",
};

export default function casestudiesvectrapredictivemaintenancePage() {
  return <Page page={page} />;
}
