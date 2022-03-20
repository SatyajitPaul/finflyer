import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import "./App.css";
import Login from "./components/login.js";
import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Feed from "./components/Feed";
import { Routes, Route } from "react-router-dom";

import WorkEntry from "./pages/WorkEntry";
import WorkList from "./pages/WorkList";
import Finance from "./pages/Finance";
import Product from "./pages/Product";
import Home from "./pages/Home";

function App() {
	const [isloogedIn, setIsLoggedIn] = useState(true);
	const [isMenuToggled, setIsMenuToggled] = useState(true);

	return (
		<div className='App'>
			{isloogedIn ? (
				<>
					<Navbar
						setIsLoggedIn={setIsLoggedIn}
						isMenuToggled={isMenuToggled}
						setIsMenuToggled={setIsMenuToggled}
					/>
					<Grid container>
						{isMenuToggled && (
							<Grid item sm={2} xs={2}>
								<Leftbar />
							</Grid>
						)}

						<Grid item sm={10} xs={10}>
							<Routes>
								<Route path='/' exact element={<Home />} />
								<Route path='/work-entry' element={<WorkEntry />} />
								<Route path='/work-list' element={<WorkList />} />
								<Route path='/affiliate-finance' element={<Finance />} />
								<Route path='/affiliate-product' element={<Product />} />
							</Routes>
						</Grid>
					</Grid>
				</>
			) : (
				<Login setIsLoggedIn={setIsLoggedIn} />
			)}
		</div>
	);
}

export default App;
