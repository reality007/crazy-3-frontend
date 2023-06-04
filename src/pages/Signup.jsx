import { Box, Button, TextField, Typography } from '@mui/material'
import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        name : "",
        email : "",
        password : ""
    });
    const handlechange = (e) =>{
        setInputs(prev =>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    };
    const sendRequest = async () =>{
        const res = await axios.post('http://localhost:2000/api/signup', {
            name : inputs.name,
            email : inputs.email,
            password : inputs.password
        }).catch(err => console.log(err));
        const data = await res.data;
        // console.log(data,"dadadadadad");
        return data;
    }
    const handleSummit = (e) =>{
        e.preventDefault();
        // console.log(inputs);
        sendRequest().then(()=>history("/login"))
    };
  return (
    <div>
       <form onSubmit={handleSummit}>
        <Box marginRight = "auto" marginLeft = "auto" width = {300} display='flex' flexDirection={'column'} justifyContent="center"alignItems="center"
        >
        <Typography variant='h2'>Signup</Typography>
            <TextField name='name' onChange={handlechange} value = {inputs.name} variant='outlined' placeholder='Name' margin='normal'/>
            <TextField name='email' onChange={handlechange} type='email' value={inputs.email} variant='outlined' placeholder='Email' margin='normal'/>
            <TextField name='password' onChange={handlechange} type='password' value = {inputs.password} variant='outlined' placeholder='Password' smargin='normal'/>
            <Button variant='contained' type = "submit">SignUp</Button>
        </Box>
        </form> 
    </div>
  )
}

export default Signup