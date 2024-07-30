import React from "react";
import "../../styles/Home/gallery.css";

const Gallery = () => {
	const images = [
		"../images/shop/1.jpg",
		"../images/shop/2.jpg",
		"../images/shop/3.jpg",
		"../images/shop/4.jpg",
		"../images/shop/5.jpg",
		"../images/shop/6.jpg",
		"../images/shop/7.jpg",
		"../images/shop/8.jpg",
	];
	return (
		<div className="gallery-container">
			<h2>Working Gallery</h2>
			<h4>Snapshots of our working gallery</h4>
			<div className="image-grid">
				{images.map((src, index) => (
					<img key={index} src={src} alt={`Gallery Image ${index + 1}`} />
				))}
			</div>
		</div>
	);
};

export default Gallery;
