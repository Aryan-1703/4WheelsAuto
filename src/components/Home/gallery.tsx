import React, { useState, useRef } from "react";
import "../../styles/Home/gallery.css";

const Gallery: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const images: string[] = [
		"../images/shop/1.jpg",
		"../images/shop/2.jpg",
		"../images/shop/3.jpg",
		"../images/shop/4.jpg",
		"../images/shop/5.jpg",
		"../images/shop/6.jpg",
		"../images/shop/7.jpg",
		"../images/shop/8.jpg",
	];

	const touchStartRef = useRef<number>(0);

	const handleDotClick = (index: number): void => {
		setCurrentIndex(index);
	};

	const handleArrowClick = (direction: "left" | "right"): void => {
		setCurrentIndex(prevIndex => {
			if (direction === "left") {
				return Math.max(prevIndex - 1, 0);
			} else {
				return Math.min(prevIndex + 1, images.length - 1);
			}
		});
	};

	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
		touchStartRef.current = e.touches[0].clientX;
	};

	const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>): void => {
		const touchEndX = e.changedTouches[0].clientX;
		const swipeThreshold = 50; // Minimum distance for swipe to be recognized

		if (touchStartRef.current - touchEndX > swipeThreshold) {
			handleArrowClick("right"); // Swipe left
		} else if (touchEndX - touchStartRef.current > swipeThreshold) {
			handleArrowClick("left"); // Swipe right
		}
	};

	return (
		<div className="gallery-container">
			<h2>Working Gallery</h2>
			<h4>Snapshots of our working gallery</h4>
			<div className="image-wrapper">
				<div
					className="image-grid"
					onTouchStart={handleTouchStart}
					onTouchEnd={handleTouchEnd}
				>
					<img src={images[currentIndex]} alt={`Gallery Image ${currentIndex + 1}`} />
				</div>
				<button className="arrow arrow-left" onClick={() => handleArrowClick("left")}>
					&lsaquo;
				</button>
				<button className="arrow arrow-right" onClick={() => handleArrowClick("right")}>
					&rsaquo;
				</button>
			</div>
			<div className="dots-container">
				{images.map((_, index: number) => (
					<span
						key={index}
						className={`dot ${index === currentIndex ? "active" : ""}`}
						onClick={() => handleDotClick(index)}
					></span>
				))}
			</div>
			<div className="swipe-hint">Swipe to see more</div>
		</div>
	);
};

export default Gallery;
