import AboutHero from "../components/about/AboutHero";
import CoreValues from "../components/about/CoreValues";
import QualityControl from "../components/about/QualityControl";

export default function About() {
  return (
    <main className="p-6 md:p-12 max-w-3xl">
      <AboutHero />
      <CoreValues />
      <QualityControl />
    </main>
  );
}
