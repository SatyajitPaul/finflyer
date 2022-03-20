import React from "react";
import { useState,useEffect } from "react";
import { makeStyles, Container, Typography } from "@material-ui/core";
import Home from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

import RssFeedTwoToneIcon from "@material-ui/icons/RssFeedTwoTone";
import CardMembershipRoundedIcon from "@material-ui/icons/CardMembershipRounded";
import CellWifiIcon from "@material-ui/icons/CellWifi";
import GavelIcon from "@material-ui/icons/Gavel";
import ReportIcon from "@material-ui/icons/Report";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(10),
		backgroundColor: theme.palette.primary.main,
		height: "100vh",
		color: "white",
		[theme.breakpoints.up("sm")]: {
			backgroundColor: "white",
			color: "#555",
			border: "1px solid #ece7e7",
		},
	},

	item: {
		display: "flex",
		alignItems: "center",
		marginBottom: theme.spacing(4),
		[theme.breakpoints.up("sm")]: {
			marginBottom: theme.spacing(3),
			cursor: "pointer",
		},
	},
	icon: {
		marginRight: theme.spacing(1),
		[theme.breakpoints.up("sm")]: {
			fontSize: "20px",
		},
	},
	text: {
		fontWeight: "500",
		color: "black",

		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
}));



function Leftbar() {
	const classes = useStyle();
	const [istoggled, setIsToggled] = useState(false);
	const [istoggledBm, setIsToggledBm] = useState(false);
	const [istoggledAff, setIsToggledAff] = useState(false);

	return (

		<Container className={classes.container}>
			

			<div className={classes.item}>
				<Home color='primary' className={classes.icon} />
				<Typography className={classes.text}>
					
					<Link to="/" style={{color:'green'}}>Home</Link>
					
					</Typography>
			</div>


			<div className={classes.item}>
				<WorkIcon color='primary' className={classes.icon} />

				<Typography
					onClick={() => {
						setIsToggled(!istoggled);
					}}
					className={classes.text}>
					Work
				</Typography>
				{istoggled && (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							marginLeft: "10px",
							gap: "10px",
							paddingTop: "10px",
						}}>
						<div>Add work</div>
						<Link  to="/work-list">List of Work</Link>
					</div>
				)}
			</div>
			<div className={classes.item}>
				<AccountBalanceIcon color='secondary' className={classes.icon} />
				<Typography
					onClick={() => {
						setIsToggledBm(!istoggledBm);
					}}
					className={classes.text}>
					Balalnce Management
				</Typography>
				{istoggledBm && (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							marginLeft: "10px",
							gap: "10px",
							paddingTop: "10px",
						}}>
						<div>Request Balance</div>
						<div>List of Request</div>
					</div>
				)}
			</div>
			<div className={classes.item}>
				<PeopleAltIcon color='inherit' className={classes.icon} />
				<Typography
					onClick={() => {
						setIsToggledAff(!istoggledAff);
					}}
					className={classes.text}>
					Affiliate
				</Typography>
				{istoggledAff && (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							marginLeft: "10px",
							gap: "10px",
							paddingTop: "10px",
						}}>
						<div>Finance</div>
						<Link to="/affiliate-product">Products</Link>
					</div>
				)}
			</div>
			<div className={classes.item}>
				<MonetizationOnIcon className={classes.icon} />
				<Typography className={classes.text}>Loan</Typography>
			</div>
			<div className={classes.item}>
				<RssFeedTwoToneIcon className={classes.icon} />
				<Typography className={classes.text}>Other services</Typography>
			</div>
			<div className={classes.item}>
				<CardMembershipRoundedIcon className={classes.icon} />
				<Typography className={classes.text}>Prepaid card</Typography>
			</div>
			<div className={classes.item}>
				<CellWifiIcon className={classes.icon} />
				<Typography className={classes.text}>CSC service</Typography>
			</div>
			<div className={classes.item}>
				<GavelIcon color='secondary' className={classes.icon} />
				<Typography className={classes.text}>Govt. service</Typography>
			</div>
			<div className={classes.item}>
				<ReportIcon color='primary' className={classes.icon} />
				<Typography className={classes.text}>Reports</Typography>
			</div>
		</Container>
	);
}

export default Leftbar;
