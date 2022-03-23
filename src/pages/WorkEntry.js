import React, { useEffect, useState } from "react";
import axios from "axios";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import WorkIcon from "@mui/icons-material/Work";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const theme = createTheme();

function WorkEntry({ userData }) {
	const [success, setSuccess] = useState(false);
	const [workName, setWorkName] = useState("");
	const [workType, setWorkType] = useState("");
	const [error, setError] = useState(false);
	const [missingField, setMissingField] = useState(false);

	const userDetails = {
		username: userData,
		name: "",
		type: "",
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (workName === "" || workType === "") {
			setMissingField(true);
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
				setError(true);
			});
		setWorkName("");
		setWorkType("");
	};

	useEffect(() => {
		setTimeout(() => {
			setSuccess(false);
			setError(false);
		}, 2000);
		setTimeout(() => {
			setMissingField(false);
		}, 4000);
		
	}, [success, error, missingField]);

	return (
		<div>
			{success && (
				<Stack sx={{ width: "100%", paddingTop: "100px" }} spacing={2}>
					<Alert
						severity='success'
						style={{ display: "flex", justifyContent: "center" }}>
						Work added successfully...
					</Alert>
				</Stack>
			)}
			{error && (
				<Stack sx={{ width: "100%", paddingTop: "100px" }} spacing={2}>
					<Alert
						style={{ display: "flex", justifyContent: "center" }}
						severity='warning'>
						Something Went Wrong!!
					</Alert>
				</Stack>
			)}
			{missingField && (
				<Stack sx={{ width: "100%", paddingTop: "100px" }} spacing={2}>
					<Alert
						style={{ display: "flex", justifyContent: "center" }}
						severity='warning'>
						Fill all the fields!!
					</Alert>
				</Stack>
			)}
			<ThemeProvider theme={theme}>
				<Container component='main' maxWidth='xs'>
					<CssBaseline />
					<Box
						sx={{
							marginTop: 8,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}>
						<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
							<WorkIcon />
						</Avatar>
						<Typography component='h1' variant='h5'>
							Add Work
						</Typography>
						<Box
							component='form'
							noValidate
							onSubmit={handleSubmit}
							sx={{ mt: 3 }}>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<TextField
										autoComplete='given-name'
										name='firstName'
										required
										fullWidth
										id='firstName'
										label='Frist Name'
										autoFocus
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										required
										fullWidth
										id='lastName'
										label='Last Name'
										name='lastName'
										autoComplete='family-name'
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										required
										fullWidth
										id='email'
										value={workName}
										onChange={(e) => {
											setWorkName(e.target.value);
										}}
										label='Work Name'
										name='email'
										autoComplete='email'
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										required
										value={workType}
										onChange={(e) => {
											setWorkType(e.target.value);
										}}
										fullWidth
										name='password'
										label='Work-Tyype'
										type='text'
										id='password'
									/>
								</Grid>
							</Grid>
							<Button
								type='submit'
								fullWidth
								variant='contained'
								sx={{ mt: 3, mb: 2 }}>
								Add
							</Button>
							<Grid container justifyContent='flex-end'></Grid>
						</Box>
					</Box>
				</Container>
			</ThemeProvider>
		</div>
	);
}

export default WorkEntry;
