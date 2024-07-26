import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import logo from "./images/logo.jpg";
import "./styles/Header.css";
import "./styles/Main.css";

// import Services from './Services';
// import Contact from './Contact';

const App: React.FC = () => {
	return (
		<Router>
			<Header
				logo={<img src={logo} alt="4Wheels Auto Collision Logo" className="logo" />}
			/>
			<main className="main-content">
				<Routes>
					<Route path="/" element={<Home />} />
					{/* <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> */}
					{/* Add more routes as needed */}
				</Routes>
			</main>
			<footer className="home-footer">
				<p>&copy; 2024 4Wheels Auto Collision Center. All rights reserved.</p>
			</footer>
		</Router>
	);
};

export default App;
