import React, { useState } from "react";
import {Grid } from "@material-ui/core";
import "./App.css";
import Login from "./components/login.js";
import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Feed from "./components/Feed";


function App() {
	const [isloogedIn, setIsLoggedIn] = useState(true);
	const [isMenuToggled,setIsMenuToggled]  =useState(true);
 
  
	
	return (
		<div className='App'>
			{isloogedIn ? (
				<>
          
					<Navbar setIsLoggedIn={setIsLoggedIn} isMenuToggled={isMenuToggled} setIsMenuToggled={setIsMenuToggled} />
					<Grid container>
						{isMenuToggled && <Grid item sm={2} xs={2}>
							<Leftbar  />
						</Grid>}
						
						<Grid item sm={8} xs={10}>
							<Feed />
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
