"use client"

import { useEffect, useRef } from "react"

interface InteractiveMapProps {
  latitude: number
  longitude: number
  destinationName: string
  zoom?: number
}

export default function InteractiveMap({ latitude, longitude, destinationName, zoom = 13 }: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  useEffect(() => {
    if (!mapRef.current) return

    // Dynamically import Leaflet to avoid SSR issues
    const initMap = async () => {
      const L = (await import("leaflet")).default

      // Add Leaflet CSS
      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        link.crossOrigin = ""
        document.head.appendChild(link)
      }

      // Initialize map
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
      }

      const map = L.map(mapRef.current).setView([latitude, longitude], zoom)

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      // Custom marker icon
      const customIcon = L.divIcon({
        html: `
          <div style="
            background-color: #4aa4e9;
            width: 30px;
            height: 30px;
            border-radius: 50% 50% 50% 0;
            border: 3px solid white;
            transform: rotate(-45deg);
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <div style="
              color: white;
              font-size: 12px;
              transform: rotate(45deg);
              font-weight: bold;
            ">📍</div>
          </div>
        `,
        className: "custom-marker",
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
      })

      // Add marker
      const marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(map)

      // Add popup
      marker
        .bindPopup(`
        <div style="text-align: center; padding: 8px;">
          <strong style="color: #050d21; font-size: 14px;">${destinationName}</strong><br>
          <span style="color: #666; font-size: 12px;">
            ${latitude.toFixed(4)}, ${longitude.toFixed(4)}
          </span>
        </div>
      `)
        .openPopup()

      mapInstanceRef.current = map
    }

    initMap()

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [latitude, longitude, destinationName, zoom])

  return (
    <div
      ref={mapRef}
      className="w-full h-64 rounded-lg border-2 border-gray-200 shadow-sm relative z-0"
      style={{ minHeight: "256px" }}
    />
  )
}
