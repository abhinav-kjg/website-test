"use client";

import dynamic from "next/dynamic";

const OpenStreetMap = dynamic(() => import("./Leaflet"), {
    ssr: false,
});

export default function OpenStreetMapComponent() {
    return (
        <div>
            <OpenStreetMap />
        </div>
    );
}
