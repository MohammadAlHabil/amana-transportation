import { Bus, MapPin, Clock, Users, TrendingUp } from "lucide-react";
import { busData } from "@/lib/data";

export default function Hero() {
  // Calculate dynamic stats from the data
  const activeRoutes = busData.bus_lines.filter(
    (bus) => bus.status === "Active",
  ).length;
  const totalBusStops = busData.bus_lines.reduce(
    (total, bus) => total + bus.bus_stops.length,
    0,
  );

  // Get current passengers and average utilization from operational summary
  const currentPassengers = busData.operational_summary.current_passengers;
  const averageUtilization = busData.operational_summary.average_utilization;

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {busData.company_info.name}
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-blue-100">
            Proudly Servicing Malaysian Bus Riders Since{" "}
            {busData.company_info.founded}!
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-4 rounded-full mb-4">
                <Bus className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">{activeRoutes}</div>
              <div className="text-blue-200">Active Routes</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-4 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">{totalBusStops}+</div>
              <div className="text-blue-200">Bus Stops</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">{currentPassengers}</div>
              <div className="text-blue-200">Current Passengers</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-4 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">
                {averageUtilization}%
              </div>
              <div className="text-blue-200">Average Utilization</div>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-12">
            <a
              href="#map"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Track Buses Live
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
