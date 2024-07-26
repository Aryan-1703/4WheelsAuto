import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// Import other components if needed
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* Uncomment and add other routes as needed */}
				{/* <Route path="/login" element={<Login />} /> */}
				{/* <Route path="/register" element={<Register />} /> */}
				{/* <Route path="/dashboard" element={<Dashboard />} /> */}
			</Routes>
		</Router>
	);
};

export default App;
