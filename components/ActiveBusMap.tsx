"use client";

import { useState, useEffect } from "react";
import { BusLine } from "@/lib/types";
import dynamic from "next/dynamic";

// Dynamically import the MapComponent to avoid SSR issues
const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

interface ActiveBusMapProps {
  busLines: BusLine[];
}

export default function ActiveBusMap({ busLines }: ActiveBusMapProps) {
  const [selectedBusId, setSelectedBusId] = useState<number | null>(null);
  const [activeBuses, setActiveBuses] = useState<BusLine[]>([]);

  useEffect(() => {
    // Filter only active buses
    const active = busLines.filter((bus) => bus.status === "Active");
    setActiveBuses(active);
    // Select first active bus by default
    if (active.length > 0) {
      setSelectedBusId(active[0].id);
    }
  }, [busLines]);

  const selectedBus = selectedBusId
    ? activeBuses.find((bus) => bus.id === selectedBusId)
    : null;

  return (
    <section id="map" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Active Bus Map
          </h2>
          <p className="text-lg text-gray-600">
            Track our buses in real-time and see their current locations and
            routes
          </p>
        </div>

        {/* Bus Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {activeBuses.map((bus) => (
              <button
                key={bus.id}
                onClick={() => setSelectedBusId(bus.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedBusId === bus.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {bus.route_number} - {bus.name}
              </button>
            ))}
          </div>
        </div>

        {/* Bus Info Card */}
        {selectedBus && (
          <div className="mb-6 bg-white rounded-lg p-4 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-semibold text-gray-800">
                  {selectedBus.name}
                </h3>
                <p className="text-sm text-gray-600">
                  Route: {selectedBus.route_number}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Capacity: {selectedBus.passengers.utilization_percentage}% (
                  {selectedBus.passengers.current}/
                  {selectedBus.passengers.capacity})
                </p>
                <p className="text-sm text-gray-600">
                  Driver: {selectedBus.driver.name}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Next Stop:{" "}
                  {selectedBus.bus_stops.find((stop) => stop.is_next_stop)
                    ?.name || "N/A"}
                </p>
                <p className="text-sm text-gray-600">
                  ETA:{" "}
                  {selectedBus.bus_stops.find((stop) => stop.is_next_stop)
                    ?.estimated_arrival || "N/A"}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Map Container */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-96 md:h-[600px]">
            <MapComponent
              busLines={activeBuses}
              selectedBusId={selectedBusId}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
