"use client";

import { useState } from "react";
import { BusLine } from "@/lib/types";
import { Clock, MapPin } from "lucide-react";

interface BusScheduleProps {
  busLines: BusLine[];
}

export default function BusSchedule({ busLines }: BusScheduleProps) {
  const [selectedBusId, setSelectedBusId] = useState<number>(
    busLines[0]?.id || 1,
  );

  const selectedBus = busLines.find((bus) => bus.id === selectedBusId);

  const getStatusBadge = (status: string) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";

    switch (status.toLowerCase()) {
      case "active":
        return `${baseClasses} bg-green-100 text-green-800`;
      case "maintenance":
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case "out of service":
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Bus Schedule
          </h2>
          <p className="text-lg text-gray-600">
            View detailed schedules and arrival times for all our bus routes
          </p>
        </div>

        {/* Bus Route Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {busLines.map((bus) => (
              <button
                key={bus.id}
                onClick={() => setSelectedBusId(bus.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedBusId === bus.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span>{bus.route_number}</span>
                  <span className={getStatusBadge(bus.status)}>
                    {bus.status}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {selectedBus && (
          <>
            {/* Bus Info Header */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {selectedBus.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Route {selectedBus.route_number}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    <Clock className="inline w-4 h-4 mr-1" />
                    Frequency: Every {
                      selectedBus.route_info.frequency_minutes
                    }{" "}
                    minutes
                  </p>
                  <p className="text-sm text-gray-600">
                    Total Distance: {selectedBus.route_info.total_distance} km
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    Driver: {selectedBus.driver.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    Shift: {selectedBus.driver.shift_start} -{" "}
                    {selectedBus.driver.shift_end}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    Capacity: {selectedBus.passengers.current}/
                    {selectedBus.passengers.capacity}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${selectedBus.passengers.utilization_percentage}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Table */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b">
                <h3 className="text-lg font-semibold text-gray-800">
                  Bus Stops & Arrival Times
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Stop
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Estimated Arrival
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Location
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {selectedBus.bus_stops.map((stop, index) => (
                      <tr
                        key={stop.id}
                        className={`hover:bg-gray-50 ${
                          stop.is_next_stop
                            ? "bg-orange-50 border-l-4 border-orange-500"
                            : ""
                        }`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div
                              className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center text-xs font-medium ${
                                stop.is_next_stop
                                  ? "bg-orange-500 text-white"
                                  : index === 0
                                  ? "bg-green-500 text-white"
                                  : index === selectedBus.bus_stops.length - 1
                                  ? "bg-red-500 text-white"
                                  : "bg-gray-300 text-gray-600"
                              }`}
                            >
                              {index + 1}
                            </div>
                            <div className="ml-3">
                              <div className="text-sm font-medium text-gray-900">
                                {stop.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1 text-gray-400" />
                            {stop.estimated_arrival}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                            {stop.latitude.toFixed(4)},{" "}
                            {stop.longitude.toFixed(4)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {stop.is_next_stop && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                              Next Stop
                            </span>
                          )}
                          {index === 0 && !stop.is_next_stop && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Origin
                            </span>
                          )}
                          {index === selectedBus.bus_stops.length - 1 &&
                            !stop.is_next_stop && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                Destination
                              </span>
                            )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Bus Status Footer */}
              {selectedBus.status !== "Active" && (
                <div className="px-6 py-4 bg-yellow-50 border-t">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-800">
                        <strong>Service Notice:</strong> This bus is currently
                        under {selectedBus.status.toLowerCase()}. Estimated
                        times are not available during this period.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
