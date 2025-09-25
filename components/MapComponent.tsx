"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { BusLine } from "@/lib/types";

// Custom bus icon
const busIcon = L.divIcon({
  html: `<div class="bg-white border-2 rounded-md size-12 flex items-center justify-center text-xl font-bold ">🚌</div>`,
  className: "custom-bus-marker",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16],
});

// Bus stop icon
const busStopIcon = L.divIcon({
  html: `<div class=" bg-blue-600 text-white rounded-md size-8 flex items-center justify-center  shadow-lg text-xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg></div>`,
  className: "custom-stop-marker",
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12],
});

// Next stop icon (highlighted)
const nextStopIcon = L.divIcon({
  html: `<div class="bg-orange-500 text-white rounded-md size-9 flex items-center justify-center text-xl shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg></div>`,
  className: "custom-next-stop-marker",
  iconSize: [28, 28],
  iconAnchor: [14, 14],
  popupAnchor: [0, -14],
});

interface MapComponentProps {
  busLines: BusLine[];
  selectedBusId: number | null;
}

export default function MapComponent({
  busLines,
  selectedBusId,
}: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Layer[]>([]);
  const routeLinesRef = useRef<L.Layer[]>([]);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map
    if (!mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current, {
        center: [3.139, 101.6869], // KL Sentral coordinates
        zoom: 12,
        scrollWheelZoom: true,
        dragging: true,
        touchZoom: true,
        doubleClickZoom: true,
        boxZoom: true,
        keyboard: true,
      });

      // Add black and white tile layer
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 20,
        },
      ).addTo(mapInstanceRef.current);
    }

    const map = mapInstanceRef.current;

    // Clear existing markers and route lines
    markersRef.current.forEach((marker) => map.removeLayer(marker));
    routeLinesRef.current.forEach((line) => map.removeLayer(line));
    markersRef.current = [];
    routeLinesRef.current = [];

    // Only show data for the selected bus
    if (selectedBusId) {
      const selectedBus = busLines.find((bus) => bus.id === selectedBusId);

      if (selectedBus) {
        // Add bus stops only for the selected bus
        selectedBus.bus_stops.forEach((stop) => {
          const isNextStop = stop.is_next_stop;
          const marker = L.marker([stop.latitude, stop.longitude], {
            icon: isNextStop ? nextStopIcon : busStopIcon,
          })
            .bindPopup(
              `
            <div class="p-2">
              <h3 class="font-semibold">${stop.name}</h3>
              <p class="text-sm text-gray-600">Next Bus Arrival Time: ${
                stop.estimated_arrival
              }</p>
              ${
                isNextStop
                  ? '<p class="text-xs text-orange-600 font-medium">Next Stop</p>'
                  : ""
              }
            </div>
          `,
            )
            .addTo(map);

          markersRef.current.push(marker);
        });

        // Add bus current location for the selected bus
        if (selectedBus.current_location) {
          const nextStop = selectedBus.bus_stops.find(
            (stop) => stop.is_next_stop,
          );
          const busMarker = L.marker(
            [
              selectedBus.current_location.latitude,
              selectedBus.current_location.longitude,
            ],
            {
              icon: busIcon,
            },
          )
            .bindPopup(
              `
            <div class="p-2">
              <h3 class="font-semibold">${selectedBus.name}</h3>
              <p class="text-sm text-gray-600">Status: ${selectedBus.status}</p>
              <p class="text-sm text-gray-600">Capacity: ${
                selectedBus.passengers.utilization_percentage
              }%</p>
              <p class="text-sm text-gray-600">Next Stop: ${
                nextStop?.name || "N/A"
              }</p>
              <p class="text-xs text-gray-500">Route: ${
                selectedBus.route_number
              }</p>
            </div>
          `,
            )
            .addTo(map);

          markersRef.current.push(busMarker);
        }

        // Draw route for the selected bus
        if (selectedBus.bus_stops.length > 1) {
          const routePoints: L.LatLngTuple[] = selectedBus.bus_stops.map(
            (stop) => [stop.latitude, stop.longitude],
          );

          const routeLine = L.polyline(routePoints, {
            color: "#2563eb",
            weight: 4,
            opacity: 0.8,
          }).addTo(map);

          routeLinesRef.current.push(routeLine);

          // Fit map to show the selected route
          const bounds = L.latLngBounds(routePoints);
          map.fitBounds(bounds, { padding: [20, 20] });
        }
      }
    } else {
      // If no bus is selected, show default view centered on KL
      map.setView([3.139, 101.6869], 12);
    }

    return () => {
      // Cleanup function
      if (mapInstanceRef.current) {
        markersRef.current.forEach((marker) =>
          mapInstanceRef.current!.removeLayer(marker),
        );
        routeLinesRef.current.forEach((line) =>
          mapInstanceRef.current!.removeLayer(line),
        );
      }
    };
  }, [busLines, selectedBusId]);

  return <div ref={mapRef} className="h-full w-full" />;
}
