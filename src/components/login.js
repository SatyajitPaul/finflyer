import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useState } from 'react';

const Login=()=>{
    const [username,setUsername]  =useState('');
    const [password,setPassword]  =useState('');
   const [userInfo,setUserInfo]  =useState({
       name:'',
       pass:'',
   })
   

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(username,password);
        setUserInfo({
            name:username,
            pass:password
        })
        console.log(userInfo)
        

    }
    
    return(
        
        <Grid >
            <Paper  elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form onSubmit={handleSubmit}>
                <TextField label='Username' autoComplete='true' placeholder='Enter username' value={username} onChange={(e)=>{setUsername(e.target.value)}} fullWidth required/>
                <TextField label='Password'  autoComplete='false' placeholder='Enter password' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                </form>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
              
            </Paper>
        </Grid>
       
    )
}

export default Login