import "./tailwind.css";
import "./source.css";

export const metadata = {
  title: "Nuvoryx — Engineering intelligent software.",
  description:
    "A software and AI consultancy website showcasing services, expertise, client success stories, resources, and career opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="lenis">
      <body>{children}</body>
    </html>
  );
}
