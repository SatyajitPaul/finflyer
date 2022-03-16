import React from 'react'
import {AppBar,Toolbar, makeStyles,Typography,Badge,alpha,InputBase} from "@material-ui/core";
import Search from '@material-ui/icons/Search';
import Mail from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Exit from "@material-ui/icons/ExitToApp"


const useStyle = makeStyles(theme=>({
    toolbar:{
        display:'flex',
        justifyContent:'space-between'
    },
    search:{
        display:'flex',
        alignItems:'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius:theme.shape.borderRadius,
        width:"50%",

    },
    input:{
        color:'white',
        marginLeft:theme.spacing(1),

    },
    icons:{
        display:'flex',
        alignItems:'center'

    },
    badge:{
        marginRight:theme.spacing(1),
        
    },
    badgeNotificatios:{
        marginRight:theme.spacing(1),
        
    },
    logout:{

        cursor: "pointer",

    }

 
}))

function Navbar({setIsLoggedIn}) {
    const classes= useStyle();
  return (
    <AppBar>
        <Toolbar className={classes.toolbar}>
        <Typography variant="h6">
            Logo
        </Typography>
        <div className={classes.search}>
            <Search/>
            <InputBase placeholder='search...' className={classes.input} />

        </div>
        <div className={classes.icons}>
        <Badge badgeContent={0} color="secondary" className={classes.badge}>
            <Mail  />
        </Badge>
        <Badge badgeContent={0} color="secondary" className={classes.badgeNotificatios}>
            <NotificationsIcon />
        </Badge>
        <Badge badgeContent={0} color="secondary">
        <Exit  className={classes.logout} onClick={()=>{setIsLoggedIn(false)}} />
        </Badge>
        
      
        

        </div>
        

        </Toolbar>
    </AppBar>
  )
}

export default Navbar