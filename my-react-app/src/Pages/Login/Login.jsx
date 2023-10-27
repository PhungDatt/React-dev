import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import usersData from '../Data/Cood.json';

export default function () {
    
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
      } else {
        // Đăng nhập thất bạis  
        setLoginError(true);
        window.alert('Đăng nhập thất bại!');

      }
    };
  
    return (
        <>
        (    
              <div>
              <Form   className="Login-from" onSubmit={handleLogin}>
              {/* Input  username*/}
              <img  className="Login-from-img" src="Flexible.jpg" alt="logo"/>
              <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Label><b>Tên đăng nhập</b></Form.Label>
                <Form.Control type="username" placeholder="Nhập vào tên đăng nhập" onChange={(e) => setUsername(e.target.value)} />
                <Form.Text className="text-muted">
                </Form.Text>

              </Form.Group>

              {/*input password*/}
              <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Label><b>Mật khẩu</b></Form.Label>
                <Form.Control type="password" placeholder="Nhập vào mật khẩu"  onChange={(e) => setPassword(e.target.value)} />

              </Form.Group>

              {loginError && <p style={{ color: '#003664' }}>Tên đăng nhập hoặc mật khẩu không chính xác!</p>}


              {/*  check*/}
              <Form.Group className="mb-3" controlId="formBasicCheckbox">

                <Form.Check type="checkbox" label="Nhấn để xác nhận" />

              </Form.Group>
              {/* xác nhận*/}

              <Button variant="contained" type="submit">
                Đăng nhập
              </Button>

              </Form>
              </div>
        </>

    )
}