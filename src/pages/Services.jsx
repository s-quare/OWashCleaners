import ServicesHero from "../components/services/ServicesHero";
import ServiceDetail from "../components/services/ServiceDetail";
import { servicesDetailed } from "../data/config";
import ServiceFAQ from "../components/services/ServiceFAQ";
import QuickQuote from "../components/home/QuickQuote";

export default function Services() {
  return (
    <main className="relative">
      <ServicesHero />

      <div className="relative bg-brand-cream pt-10 rounded-t-3xl">
        <div className='pb-10'>
        <h2 className='text-4xl font-bold text-center mt-15 text-gray-800'>Our Services</h2>
        {servicesDetailed.map((service, index) => (
          <ServiceDetail
            key={index}
            {...service}
            // Flips the order for every second item to keep the page visually dynamic
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
      <QuickQuote />
      <ServiceFAQ />
      </div>
      
    </main>
  );
}
