import styled from "styled-components";
import Map from "../images/map.png";
import Phone from "../images/phone.png";
import Send from "../images/send.png";
import { Button } from './Button.js';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Container = styled.div`
  height: 100vh;
  max-height:1100px;
  position:relative;
  overflow:hidden;
  color: #373A36;
  
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  text-align: center;
 
  @media only screen and (max-width: 480px) {
    margin: 20px;
  }
`;

const Form = styled.form`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #E6E2DD;
  border-radius: 15px;
  padding: 20px;

  input{
    width: 300px;
    padding: 10px;
    border: none;
    outline: none;
    margin-bottom: 10px;
  }
  textarea{
     width: 300px;
     height: 60%;
     padding: 10px;
     border: none;
     outline: none;
  }
  #btnSubmit{
    color: #fff;
    background: #D48166;
    &:hover{
    transform: translateY(-2px);
}
    
  }
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Icon = styled.img`
  width: 30px;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    width: 15px;
  }
`;

const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_30dmjud', 'template_ixpjp6n', form.current, 'tuAhI0arBPhXWmwGx')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Contact Us
          </Title>
          <Form ref={form} onSubmit={sendEmail}>

            <input type="text" name="user_name" placeholder="name" />

            <input type="email" name="user_email" placeholder="email" />

            <textarea name="message" placeholder="message" />
            <br />
            <input id="btnSubmit" type="submit" value="Send" />
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>Gokarneshwor-09,Kathmandu,Nepal</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>977-01-4917563</Text>

            <Text>977-9808103846</Text>

          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>gyalporugsandcrafts@gmail.com</Text>

          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default ContactForm;


