import React from "react";
import "../../styles/Home/process.css";

const process = () => {
	return (
		<div className="process-container">
			<h3>Process</h3>
			<h1>Repair Process</h1>
			<div className="process-steps">
				<div className="step">
					<div className="step-circle">1</div>
					<div className="step-text">Free Estimate</div>
					<p>
						Receive a detailed estimate of the repair costs and timeline, ensuring
						transparency and no surprises.
					</p>
				</div>
				<div className="step">
					<div className="step-circle">2</div>
					<div className="step-text">Disassembly</div>
					<p>
						Carefully disassemble the vehicle to access and assess all areas that need
						repair, ensuring a thorough job.
					</p>
				</div>
				<div className="step">
					<div className="step-circle">3</div>
					<div className="step-text">Repair & Paint</div>
					<p>
						Conduct all necessary repairs and apply a fresh coat of paint to restore your
						vehicle to its original condition.
					</p>
				</div>
				<div className="step">
					<div className="step-circle">4</div>
					<div className="step-text">Refinishing</div>
					<p>
						Refinish and polish the vehicle to enhance its appearance and ensure a
						high-quality finish.
					</p>
				</div>
				<div className="step">
					<div className="step-circle">5</div>
					<div className="step-text">Quality Control</div>
					<p>
						Perform a rigorous quality check to ensure that all repairs meet our high
						standards before finalizing the process.
					</p>
				</div>
				<div className="step">
					<div className="step-circle">6</div>
					<div className="step-text">Delivery</div>
					<p>
						Return the fully repaired vehicle to you, ensuring you’re satisfied with the
						final results.
					</p>
				</div>
			</div>
		</div>
	);
};

export default process;
