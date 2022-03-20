import React from "react";
import {
	AppBar,
	Toolbar,
	makeStyles,
	Typography,
	Badge,
	alpha,
	InputBase,
} from "@material-ui/core";
import Search from "@material-ui/icons/Search";

import NotificationsIcon from "@material-ui/icons/Notifications";
import Exit from "@material-ui/icons/ExitToApp";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import MenuIcon from '@material-ui/icons/Menu';

const useStyle = makeStyles((theme) => ({
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
	},
	search: {
		display: "flex",
		alignItems: "center",
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		borderRadius: theme.shape.borderRadius,
		width: "50%",
	},
	input: {
		color: "white",
		marginLeft: theme.spacing(1),
	},
	icons: {
		display: "flex",
		alignItems: "center",
	},
	badge: {
		marginRight: theme.spacing(1),
	},
	badgeNotificatios: {
		marginRight: theme.spacing(1),
	},
	logout: {
		cursor: "pointer",
	},
}));

function Navbar({ setIsLoggedIn,isMenuToggled,setIsMenuToggled }) {
    
	const classes = useStyle();

    const toggelSidebar =()=>{
        setIsMenuToggled(!isMenuToggled);
    }
	return (
		<AppBar>
			<Toolbar className={classes.toolbar}>
                <div style={{display:'flex',flexDirection:'row', justifyContent:'space-evenly' ,gap:'10px'}}>
                    <div onClick={toggelSidebar}><MenuIcon/></div>
                <Typography variant='h6' >Finflyer</Typography>
                </div>
				
				<div className={classes.search}>
					<Search />
					<InputBase placeholder='search...' className={classes.input} />

				</div>
				<div className={classes.icons}>
					<Badge badgeContent={0} color='secondary' className={classes.badge}>
						<AccountBalanceWalletIcon />
					</Badge>
					<Badge
						badgeContent={0}
						color='secondary'
						className={classes.badgeNotificatios}>
						<NotificationsIcon />
					</Badge>
					<Badge badgeContent={0} color='secondary'>
						<Exit
							className={classes.logout}
							onClick={() => {
								setIsLoggedIn(false);
							}}
						/>
					</Badge>
				</div>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
