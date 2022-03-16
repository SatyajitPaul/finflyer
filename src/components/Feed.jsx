import React from "react";
import { makeStyles, Container } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(10),
	},
}));

function Feed() {
	const classes = useStyle();
	return <Container className={classes.container}>feed</Container>;
}

export default Feed;
