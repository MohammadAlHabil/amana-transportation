import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ActiveBusMap from "@/components/ActiveBusMap";
import BusSchedule from "@/components/BusSchedule";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { busData } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ActiveBusMap busLines={busData.bus_lines} />
      <BusSchedule busLines={busData.bus_lines} />
      <Services />
      <CallToAction />
      <Footer />
    </div>
  );
}
