import { useState } from "react";
import { BiNavigation } from "react-icons/bi";
import "../../styles/AppointmentRequest/map.css";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const Mapdiv = () => {
	const position = { lat: 43.68834530923813, lng: -79.7339059811425 };
	const [mapType, setMapType] = useState("roadmap");

	const toggleMapType = () => {
		setMapType(prevType => (prevType === "roadmap" ? "hybrid" : "roadmap"));
	};

	return (
		<div className="map-container">
			<APIProvider apiKey={import.meta.env.VITE_API_KEY_MAP}>
				<Map
					style={{ width: "100vw", height: "400px" }}
					defaultCenter={position}
					defaultZoom={15}
					gestureHandling={"greedy"}
					disableDefaultUI={true}
					mapTypeId={mapType}
				>
					<Marker position={position} title="4Wheels Auto Collision" />
				</Map>
			</APIProvider>
			<div className="map-toggle-images">
				<img
					src="/images/satellitemap.jpg"
					alt="Roadmap View"
					className={`map-toggle-image ${mapType === "roadmap" ? "active" : "hidden"}`}
					onClick={toggleMapType}
				/>
				<img
					src="/images/defaultmap.jpg"
					alt="Satellite View"
					className={`map-toggle-image ${mapType === "hybrid" ? "active" : "hidden"}`}
					onClick={toggleMapType}
				/>
			</div>
			<div className="info-box">
				<div className="info-header">
					<h2>4Wheels Auto Collision</h2>
					<a
						href={`https://maps.google.com/maps/dir//${encodeURIComponent(
							"42 Stafford Dr, Brampton, ON L6W 1L4"
						)}`}
						target="_blank"
						rel="noopener noreferrer"
						className="directions-link"
					>
						<BiNavigation className="direction-icon" />
						<span className="direction-text">Directions</span>
					</a>
				</div>
				<p className="address">42 Stafford Dr, Brampton, ON L6W 1L4</p>
				<div className="rating">
					<span className="rating-text">3.9 </span>
					<span className="star filled">★</span>
					<span className="star filled">★</span>
					<span className="star filled">★</span>
					<span className="star filled">★</span>
					<span className="star empty">★</span>
					<span className="rating-text">(149 reviews)</span>
				</div>
				<div className="view-map">
					<a
						href="https://www.google.com/maps/place/4+Wheels+Auto+Collision/@43.6885044,-79.7368242,17z/data=!3m1!4b1!4m6!3m5!1s0x882b3e395ac5547d:0x801850d28a15286a!8m2!3d43.6885005!4d-79.7342493!16s%2Fg%2F1tf36ljn?hl=en-US&entry=ttu"
						target="_blank"
						rel="noopener noreferrer"
					>
						View Larger Map
					</a>
				</div>
			</div>
		</div>
	);
};

export default Mapdiv;
