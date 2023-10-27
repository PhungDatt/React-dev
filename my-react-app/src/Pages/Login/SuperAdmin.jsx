import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  { useState } from 'react';
import usersData from '../Data/Cood.json';


                                                                                /*==========================
                                                                                Super-Admin
                                                                                ============================ */
const  SuperAdmin = () =>{
            
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
  
    const handleLogin = (e) => {

      e.preventDefault();
  
      const user = usersData.users.find((user) => user.username === username && user.password === password);
  
      if (user) {

        // Đăng nhập thành công
        setLoginError(false);
        window.alert('Đăng nhập thành công!');
        window.location.href = './TrafficEvents';
      } 
      else {
        // Đăng nhập thất bạis  
        setLoginError(true);
        window.alert('Đăng nhập thất bại!');

      }
    };
    return(
            <Box   sx={{
                    width: 300,
                    height: 300,
              
            }} onSubmit={handleLogin}>
                <br/>
                <h5> Mời bạn đăng nhập</h5>
                <br/>
            <TextField
                    required
                    id="outlined-username-input"
                    label="username"
                    type="username"
                    defaultValue=""
                    onChange={(e) => setUsername(e.target.value)}
            />
                <br/>
                <br/>
            <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            {loginError && <p style={{ color: '#003664' }}>Tên đăng nhập hoặc mật khẩu không chính xác!</p>}

            <br/>
        <Button variant="contained" type="submit" >
                Đăng nhập
        </Button>
        
             
    
        </Box>
            
   
    );
}
export default SuperAdmin;