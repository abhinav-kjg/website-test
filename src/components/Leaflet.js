"use client";
import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import pinIcon from "@/public/location-pin.png";
import officeIcon from "@/public/office.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOn";
import { Button } from "@mui/material";
import Image from "next/image";

const OpenStreetMap = () => {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);
    const [isMapLoaded, setIsMapLoaded] = useState(false);

    useEffect(() => {
        // Check if mapInstance is already initialized
        if (mapInstance.current) return;

        // Create the map instance
        mapInstance.current = L.map(mapRef.current, {
            // center: [23.590811867980975, 77.9446505549212], // Latitude and Longitude
            center: [26.83397123501565, -12.020944487652127],
            zoom: 2,
        });

        // Add OpenStreetMap tile layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
            mapInstance.current
        );

        const customIcon = L.icon({
            iconUrl: pinIcon.src,
            iconSize: [32, 32],
            iconAnchor: [22, 30],
            popupAnchor: [0, -40],
        });

        const headquaterIcon = L.icon({
            iconUrl: officeIcon.src,
            iconSize: [32, 36],
            iconAnchor: [12, 36],
            popupAnchor: [0, -40],
        });

        L.marker([24.64710614748685, 73.71778994066496], {
            icon: headquaterIcon,
        })
            .addTo(mapInstance.current)
            .bindPopup("KJGS Headquater");

        L.marker([51.960379584432694, 4.501677325335793], {
            icon: customIcon,
        })
            .addTo(mapInstance.current)
            .bindPopup("Netherland Office");

        L.marker([30.503953642154137, -97.72764998090375], {
            icon: customIcon,
        })
            .addTo(mapInstance.current)
            .bindPopup("USA Office");

        // Clean up the map when the component is unmounted
        setIsMapLoaded(true);
        return () => {
            if (mapInstance.current) {
                mapInstance.current.remove();
                mapInstance.current = null;
            }
        };
    }, []);

    const flyToLocation = (coordinates) => {
        if (mapInstance.current) {
            mapInstance.current.flyTo(coordinates, 8);
        }
    };

    return (
        <div className="relative ">
            <div
                ref={mapRef}
                style={{ width: "100%", height: "570px" }}
                className="z-0"
            />
            {isMapLoaded && (
                <div className="absolute left-0 bottom-1 flex flex-col items-start z-20 -space-y-1">
                    <Button
                        className=" "
                        onClick={() =>
                            flyToLocation([
                                24.64710614748685, 73.71778994066496,
                            ])
                        }
                        sx={{
                            color: "#000000",
                            borderRadius: "0.25rem",
                            marginLeft: "-0.25rem",
                            "&:hover": {
                                color: "#1868DB",
                                background: "transparent",
                            },
                        }}
                    >
                        <Image
                            src={officeIcon}
                            alt="office"
                            width={28}
                            height={40}
                        />
                        {/* <LocationOnOutlinedIcon className="text-primary-blue h-10" /> */}
                        <span className="text-sm font-semibold capitalize">
                            HQ (Udaipur)
                        </span>
                    </Button>
                    <Button
                        className=""
                        onClick={() =>
                            flyToLocation([
                                51.960379584432694, 4.501677325335793,
                            ])
                        }
                        sx={{
                            color: "#000000",
                            borderRadius: "0.25rem",
                            marginLeft: "-0.25rem",
                            "&:hover": {
                                color: "#1868DB",
                                background: "transparent",
                            },
                        }}
                    >
                        <LocationOnOutlinedIcon className="text-black h-10" />
                        <span className="text-sm font-semibold capitalize">
                            Netherland
                        </span>
                    </Button>
                    <Button
                        className=" "
                        onClick={() =>
                            flyToLocation([
                                30.503953642154137, -97.72764998090375,
                            ])
                        }
                        sx={{
                            color: "#000000",
                            borderRadius: "0.25rem",
                            marginLeft: "-0.25rem",
                            "&:hover": {
                                color: "#1868DB",
                                background: "transparent",
                            },
                        }}
                    >
                        <LocationOnOutlinedIcon className="text-primary-blue h-10" />
                        <span className="text-sm font-semibold capitalize">
                            USA
                        </span>
                    </Button>
                </div>
            )}
        </div>
    );
};

export default OpenStreetMap;
