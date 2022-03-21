import React, { useState } from "react";
import { makeStyles, Container } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(10),
	},
}));

function WorkEntry({userData}) {
  const[workName,setWorkName] = useState('');
  const[workType,setWorkType]=  useState('');
  const userDetails={
    username:userData,
    name:'',
    type:''
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
      


  }

	const classes = useStyle();
	return <Container className={classes.container}>
    <form onSubmit={handleSubmit}>
    <label>Work Name:- </label>
      <input value={workName} onChange={(e)=>{setWorkName(e.target.value)}}/>
      <label>Work Type:- </label>
      <input value={workType} onChange={(e)=>{setWorkType(e.target.value)}}/>
      <button>add work </button>
    </form>
   
    
    
  </Container>;
}

export default WorkEntry;
