import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Home/whyus.css";
import bitown from "/images/bitown.jpg";

const Whyus = () => {
	return (
		<div className="whyus-div">
			<div className="img-box">
				<img src={bitown} alt="Bitown" className="bitown-img" />
			</div>
			<div className="whyus-desc">
				<h1>Why Choose Us?</h1>
				<h3>Auto Repair Software for all your Needs</h3>
				<p>
					4Wheels Auto Collision provides premium automotive repair software for
					professional auto care shops. We started almost 25 years ago with the technical
					information about auto repairs, and branched out to offer complete solutions to
					help you.
				</p>
				<ul className="checklist">
					<li>
						<FontAwesomeIcon icon={faCheckCircle} className="check-icon" /> We provide
						quality work
					</li>
					<li>
						<FontAwesomeIcon icon={faCheckCircle} className="check-icon" /> A quick
						support team
					</li>
					<li>
						<FontAwesomeIcon icon={faCheckCircle} className="check-icon" /> Satisfaction
						guaranteed
					</li>
					<li>
						<FontAwesomeIcon icon={faCheckCircle} className="check-icon" /> Quick support
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Whyus;
