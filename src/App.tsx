import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./styles/Main.css";
import  "./styles/App.css"

const App: React.FC = () => {
	return (
		<Router>
			<Header/>
			<main className="main-content">
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</main>
			{/* <footer className="home-footer">
				<p>&copy; 2024 4Wheels Auto Collision Center. All rights reserved.</p>
			</footer> */}
		</Router>
	);
};

export default App;
