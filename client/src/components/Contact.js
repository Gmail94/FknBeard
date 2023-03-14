import styled from "styled-components";
import {FiPhoneCall, FiMail} from "react-icons/fi";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Wrapper>
      <Title>Contact Us</Title>
      <Memo>
          <p>You can complete the contact form below, and we will get back to you as soon as possible.</p>
      </Memo>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" required />
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" required />
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows="5" required />
        <Button type="submit">Send</Button>
      </Form>
      <ContactInfo>
        <p><FiMail /> fknbeard@gmail.com</p>
        <p><FiPhoneCall /> (514)750-0631</p>
        <SocialLinks>
          <a href="https://www.facebook.com/profile.php?id=100076285512948">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/fknbeard/">
            <InstagramIcon />
          </a>
        </SocialLinks>
      </ContactInfo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem;
  background-color: #f8f8f8;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
  font-family: 'Teko', sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: left;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  resize:none;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  width:5em;
  text-align:center;
  border-radius: 5px;
  border: none;
  background-color: #333;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #666;
  }
`;

const ContactInfo = styled.div`
font-family: 'Teko', sans-serif;
  margin-top: 2rem;

  p {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  font-family: 'Teko', sans-serif;
`;

const FacebookIcon = styled.i`
    font-size: 2rem;
    color: #4267b2;
    transition: color 0.3s;

    &:hover {
    color: #29487d;
    }
`
const InstagramIcon = styled.i`
    font-size: 2rem;
    color: #4267b2;
    transition: color 0.3s;

    &:hover {
    color: #29487d;
    }
`    
const Memo = styled.div`
font-family: 'Teko', sans-serif;
`

export default Contact;
