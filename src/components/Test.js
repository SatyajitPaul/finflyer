import React from "react";
import { makeStyles, Container } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(10),
	},
}));

function Test() {
	const classes = useStyle();
	return <Container className={classes.container}>IT is  A TEST COMPONENET</Container>;
}

export default Test;


<form onSubmit={handleSubmit}>
				<label>Work Name:- </label>
				<input
					value={workName}
					onChange={(e) => {
						setWorkName(e.target.value);
					}}
				/>
				<label>Work Type:- </label>
				<input
					value={workType}
					onChange={(e) => {
						setWorkType(e.target.value);
					}}
				/>
				<button>add work </button>
			</form>
