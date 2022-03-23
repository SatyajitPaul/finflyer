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

