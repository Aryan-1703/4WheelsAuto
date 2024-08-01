import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/ServicesPage";
// import AppointmentRequest from "./pages/AppointmentRequest";
import "./styles/App.css";
import LocateUs from "./pages/LocateUs";

const App: React.FC = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/services" element={<Services />} />
				<Route path="/contact" element={<LocateUs />} />
				{/* <Route path="/appointment-request" element={<AppointmentRequest />} /> */}
			</Routes>
		</Router>
	);
};

export default App;
