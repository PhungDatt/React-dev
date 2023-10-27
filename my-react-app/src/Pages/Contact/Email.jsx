import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/send-email', { name, email, message });
      alert('Email đã được gửi thành công!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
      alert('Có lỗi xảy ra khi gửi email.');
    }
  };

  return (

    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label><b>Họ và tên</b></Form.Label>
        <Form.Control
          type="text"
          placeholder="Nhập họ và tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label><b>Email</b></Form.Label>
        <Form.Control
          type="email"
          placeholder="Nhập địa chỉ email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label><b>Nội dung </b></Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Nhập nội dung"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group>
      <br />
      <Button variant="dark" type="submit">
        Gửi
      </Button>
    </Form>
  );
};

export default ContactForm;
