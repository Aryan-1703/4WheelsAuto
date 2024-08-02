import "../../styles/AppointmentRequest/contact.css";

const Contact = () => {
	return (
		<div>
			<div className="container-head">Proudly Serving Brampton’s Automotive Needs!</div>
			<div className="contact-info">
				<div className="info-block">
					<i className="icon-location"></i>
					<p>42 Stafford Dr, Brampton, ON L6W 1L4</p>
					<a
						href={`https://maps.google.com/maps/dir//${encodeURIComponent(
							"42 Stafford Dr, Brampton, ON L6W 1L4"
						)}`}
						target="_blank"
					>
						Get directions on the map →
					</a>
				</div>
				<div className="info-block">
					<i className="icon-phone"></i>
					<p>
						Tel: <a href="tel:+19054578813">+(905) 457-8813</a>
					</p>
					<p>
						Call Now: <a href="tel:+19054578813"> (905) 457-8813</a>
					</p>
				</div>
				<div className="info-block">
					<i className="icon-clock"></i>
					<p>WEEK DAYS: 9:00am – 5:00pm</p>
					<p>SATURDAY: CLOSED</p>
					<p>SUNDAY: CLOSED</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
