//  imported required modules
import React, { useEffect } from "react";
import axios from "axios";
import {
	Grid,
	Paper,
	Avatar,
	TextField,
	Button,
	Typography,
	Link,
	makeStyles
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { pink } from "@material-ui/core/colors";
import { useState } from "react";



//  loading spinner style
const useStyle = makeStyles(theme=>({
	fabProgress:{
		color: pink[500],
    	position: "absolute",
    	top: '43%',
    	left: '45%',
    	zIndex: 1
	}

}))
// applied styles on from elements..
const paperStyle = {
	padding: 20,
	height: "70vh",
	width: 280,
	margin: "20px auto",
};
const avatarStyle = { backgroundColor: "#1bbd7e" };
const btnstyle = { margin: "8px 0" };

// Login component starts..

const Login = ({ setIsLoggedIn }) => {
	const classes= useStyle();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [isChecked, setIsChecked] = useState(false);
	const [showError, setShowError] = useState(false);
	const [loading, setLoading] = useState(false);

	const userInfo = {
		username: "",
		password: "",
	};
	

	
// handleSubmit functions runs when click on signin button and post the data  to api
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setPassword("");
		setUsername("");
		console.log(userInfo);
		console.log(isChecked);
		userInfo.username = username;
		userInfo.password = password;

		axios
			.post("https://finflyer.herokuapp.com/api/v1/auth/login", userInfo)
			.then((response) => {
				console.log(response);

				setIsLoggedIn(true);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setError("Invalid username and password");
				setShowError(true);
				setLoading(false);
			});
	};

	// using timer methods for showError massage to disappear after 4000miliseconds...
	useEffect(() => {
		let timerId = setTimeout(() => {
			setShowError(false);
		}, 4000);
		return () => {
			clearTimeout(timerId);
		};
	}, [error]);


	//  returning jsx...
	return (
		
		<>
		
			{loading ? (
				<Backdrop open>
					<CircularProgress size={50} className={classes.fabProgress} />
				</Backdrop>
			) : (
				<Grid>
					<Paper elevation={10} style={paperStyle}>
						<Grid align='center'>
							<Avatar style={avatarStyle}>
								<LockOutlinedIcon />
							</Avatar>

							<h2>Sign In</h2>
						</Grid>
						<form onSubmit={handleSubmit}>
							<TextField
								label='Username'
								autoComplete='true'
								value={username}
								onChange={(e) => {
									setUsername(e.target.value);
									setError("");
								}}
								placeholder='Enter username'
								fullWidth
								required
							/>
							<TextField
								label='Password'
								autoComplete='false'
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
									setError("");
								}}
								placeholder='Enter password'
								type='password'
								fullWidth
								required
							/>
							<FormControlLabel
								control={
									<Checkbox
										value={isChecked}
										onChange={(e) => {
											setIsChecked(!isChecked);
										}}
										name='checkedB'
										color='primary'
									/>
								}
								label='Remember me'
							/>
							<Button
								type='submit'
								color='primary'
								variant='contained'
								style={btnstyle}
								fullWidth>
								Sign in
							</Button>
						</form>
						<Typography>
							<Link
								style={{ display: "flex", justifyContent: "flex-end" }}
								href='#'>
								Forgot password ?
							</Link>
						</Typography>
						{showError && (
							<h3
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									color: "Red",
								}}>
								{error}
							</h3>
						)}
					</Paper>
				</Grid>
			)}
		</>
	);
};

export default Login;
