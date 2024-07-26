import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../styles/service.css"; // Adjust path as needed

const ServiceOverview: React.FC = () => {
	return (
		<div className="service-container">
			<section className="additional-section">
				<h1 className="headingwhy">
					Why <span className="tagcolor">Choose Us?</span>
				</h1>
				<p>We go beyond what is merely required to do what is right.</p>
				<Row className="service-cards">
					<Col xs={12} sm={6} md={3}>
						<Card className="service-card">
							<Card.Body>
								<Card.Title>Insurance Claim Assistance</Card.Title>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={12} sm={6} md={3}>
						<Card className="service-card">
							<Card.Body>
								<Card.Title>Accident Repairs</Card.Title>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={12} sm={6} md={3}>
						<Card className="service-card">
							<Card.Body>
								<Card.Title>Towing Services</Card.Title>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={12} sm={6} md={3}>
						<Card className="service-card">
							<Card.Body>
								<Card.Title>Vehicle Maintenance</Card.Title>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<p>Contact us for more information!</p>
			</section>
		</div>
	);
};

export default ServiceOverview;
