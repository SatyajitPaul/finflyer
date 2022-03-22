import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles, Container } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
//mui input import
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
//button import

import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";

const useStyle = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(10),
	},
}));

function WorkEntry({ userData }) {
	const [success, setSuccess] = useState(false);
	const [workName, setWorkName] = useState("");
	const [workType, setWorkType] = useState("");
  const[error,setError]=  useState(false);
	const userDetails = {
		username: userData,
		name: "",
		type: "",
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (workName === "" || workType === "") {
			return;
		}
	
		userDetails.name = workName;
		userDetails.type = workType;
		console.log(workName, workType, userData);
		axios
			.post(
				"https://finflyer.herokuapp.com/api/v1/private/workentry",
				userDetails,
			)
			.then((response) => {
				console.log(response);
				setSuccess(true);
			})
			.catch((err) => {
				console.log(err);
        setError(true)
			});
		setWorkName("");
		setWorkType("");
	};

	useEffect(() => {
	 setTimeout(() => {
			setSuccess(false);
      setError(false);
		}, 2000);
	
	}, [success,error]);

	const classes = useStyle();
	return (
		<Container className={classes.container}>
			<div style={{ backgroundColor: "lightgreen", height: "100vh" }}>
				<h1 style={{ display: "flex", justifyContent: "center" }}>
					Add Work Here
				</h1>
				<Box
					style={{ display: "flex", justifyContent: "center" }}
					sx={{ "& > :not(style)": { m: 1 } }}>
					<FormControl variant='standard'>
						<InputLabel  htmlFor='input-with-icon-adornment'>
							Work Name
						</InputLabel>
						<Input
							id='input-with-icon-adornment'
							value={workName}
      
							onChange={(e) => setWorkName(e.target.value)}
							startAdornment={
								<InputAdornment position='start'>
									<AccountCircle />
								</InputAdornment>
							}
						/>
					</FormControl>
					<TextField
						id='input-with-icon-textfield'
						label='Work Type'
						value={workType}
						onChange={(e) => setWorkType(e.target.value)}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<AccountCircle />
								</InputAdornment>
							),
						}}
						variant='standard'
					/>

					<Stack direction='row' spacing={1}>
						<IconButton
							onClick={handleSubmit}
							aria-label='fingerprint'
							color='success'>
							<Fingerprint />
						</IconButton>
					</Stack>
				</Box>

				{success && (
					<Stack sx={{ width: "100%", paddingTop: "100px" }} spacing={2}>
						<Alert
							severity='success'
							style={{ display: "flex", justifyContent: "center" }}>
							Work added successfully...
						</Alert>
					</Stack>
				)}
        {
          error &&
          <Stack sx={{ width: "100%", paddingTop: "100px" }} spacing={2}>
            <Alert style={{ display: "flex", justifyContent: "center"}} severity="warning">Something Went Wrong!!</Alert>
          </Stack>
          
        }
			</div>
		</Container>
	);
}

export default WorkEntry;
