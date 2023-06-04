import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Person, Lock } from '@mui/icons-material';
import BurgerKingImage from '.././Asset/backgroundimage.png';

const Login = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const sendRequest = async () => {
    try {
      const res = await axios.post('http://localhost:2000/api/login', {
        email: inputs.email,
        password: inputs.password
      });
      const data = res.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSummit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history('/user'));
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div
        style={{
          width: '50%',
          backgroundImage: `url(${BurgerKingImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="50%"
        bgcolor="rgba(255, 255, 255, 0.8)"
      >
        <form onSubmit={handleSummit} style={{ width: '80%' }}>
          <Box display="flex" flexDirection="column" alignItems="center" p={2}>
            <Typography variant="h2">Login</Typography>
            <TextField
              name="email"
              onChange={handleChange}
              type="email"
              value={inputs.email}
              variant="outlined"
              placeholder="Email"
              margin="normal"
              InputProps={{
                startAdornment: <Person />
              }}
            />
            <TextField
              name="password"
              onChange={handleChange}
              type="password"
              value={inputs.password}
              variant="outlined"
              placeholder="Password"
              margin="normal"
              InputProps={{
                startAdornment: <Lock />
              }}
            />
            <Button variant="contained" type="submit">
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default Login;
