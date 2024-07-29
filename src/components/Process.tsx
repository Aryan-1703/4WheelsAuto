import React from "react";
import "../styles/process.css";

const process = () => {
	return (
		<div className="process-container">
			<h3>Process</h3>
			<h1>Repair Process</h1>
			<div className="process-steps">
				<div className="step-end">
					<div className="step-circle">1</div>
					<div className="step-text">Free Estimate</div>
					<p>Lorem ipsum dolor sit amet consectetur.</p>
				</div>
				<div className="step">
					<div className="step-circle">2</div>
					<div className="step-text">Disassembly</div>
					<p>Lorem ipsum dolor sit amet consectetur.</p>
				</div>
				<div className="step">
					<div className="step-circle">3</div>
					<div className="step-text">Repair & Paint</div>
					<p>Lorem ipsum dolor sit amet consectetur.</p>
				</div>
				<div className="step">
					<div className="step-circle">4</div>
					<div className="step-text">Refinishing</div>
					<p>Lorem ipsum dolor sit amet consectetur.</p>
				</div>
				<div className="step">
					<div className="step-circle">5</div>
					<div className="step-text">Quality Control</div>
					<p>Lorem ipsum dolor sit amet consectetur.</p>
				</div>
				<div className="step-end">
					<div className="step-circle">6</div>
					<div className="step-text">Delivery</div>
					<p>Lorem ipsum dolor sit amet consectetur.</p>
				</div>
			</div>
		</div>
	);
};

export default process;
