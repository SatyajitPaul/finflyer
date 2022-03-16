import React, { useEffect } from 'react'
import axios from 'axios';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {useState} from 'react';
const Login=()=>{

    const[username,setUsername]= useState('');
    const[password,setPassword]= useState(''); 
    const[error,setError] =useState('');
    const[isChecked,setIsChecked] =useState(false);
    const[showError,setShowError] =useState(false);
    
    const [userInfo,setUserInfo]= useState({
        name:'',
        pass:'',
        checked:false,
    })
  
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    const handleSubmit =(e) =>{
        e.preventDefault();
        
        setPassword('');
        setUsername('');
        console.log(userInfo);
        console.log(isChecked);
        setUserInfo({
            name:username,
            pass:password,
            checked:!isChecked,
        })
        axios.post('https://finflyer.herokuapp.com/api/v1/auth/login',userInfo)
        .then(response=>{console.log(response)})
        .catch((err)=>{console.log(err); setError("someting went wrong!");setShowError(true)})
    }
    useEffect(()=>{
        let timerId = setTimeout(()=>{
            setShowError(false);
        },4000)
        return () => {
            clearTimeout(timerId)
          }

    },[error])
    
   
   
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form onSubmit={handleSubmit}>
                <TextField label='Username' autoComplete='true' value={username} onChange={(e)=>{setUsername(e.target.value);setError('')}} placeholder='Enter username' fullWidth required/>
                <TextField label='Password' autoComplete='false' value={password} onChange={(e)=>{setPassword(e.target.value);setError('')}} placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        value={isChecked}
                        onChange={(e)=>{setIsChecked(!isChecked)}}
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
                {showError && <h3 style={{display:'flex',justifyContent:'center',alignItems:'center', color:"Red"}}>{error}</h3>}
               
            </Paper>
        </Grid>
    )
}

export default Login