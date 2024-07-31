import "../../styles/Home/gallery.css";

const Gallery = () => {
	// const images = [
	// 	"../images/shop/1.jpg",
	// 	"../images/shop/2.jpg",
	// 	"../images/shop/3.jpg",
	// 	"../images/shop/4.jpg",
	// 	"../images/shop/5.jpg",
	// 	"../images/shop/6.jpg",
	// 	"../images/shop/7.jpg",
	// 	"../images/shop/8.jpg",
	// ];
	return (
		<div className="gallery-container">
			<h2>Working Gallery</h2>
			<h4>Snapshots of our working gallery</h4>
			<div className="image-wrapper">
				<div className="image-grid">
					<img src="../images/shop/1.jpg" alt="Gallery Image 1" />
					<img src="../images/shop/2.jpg" alt="Gallery Image 2" />
					<img src="../images/shop/3.jpg" alt="Gallery Image 3" />
					<img src="../images/shop/4.jpg" alt="Gallery Image 4" />
					<img src="../images/shop/5.jpg" alt="Gallery Image 5" />
					<img src="../images/shop/6.jpg" alt="Gallery Image 6" />
					<img src="../images/shop/7.jpg" alt="Gallery Image 7" />
					<img src="../images/shop/8.jpg" alt="Gallery Image 8" />
				</div>
			</div>
		</div>
	);
};

export default Gallery;
