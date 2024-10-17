"use client";
import React from "react";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

export default function MapLocation() {
	return (
		<APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
			<Map
				style={{ maxWidth: "400px", height: "300px" }}
				defaultCenter={{ lat: -31.8696203, lng: -62.7207151 }}
				defaultZoom={15}
				gestureHandling={"greedy"}
				disableDefaultUI={true}
				mapId={"b90aa121f232b8c0"}
			>
				<AdvancedMarker position={{ lat: -31.8696203, lng: -62.7207151 }} />
			</Map>
		</APIProvider>
	);
}
