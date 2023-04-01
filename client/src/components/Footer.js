import styled from 'styled-components';
import logo from "./images/logo.png"
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


const Footer = () => (
  <Container>
    <Content>
      <Logo src={logo} alt="Beard Oil Company Logo"/>
      <Links>
        <Link><a href="/home">Home</a></Link>
        <Link><a href="/about">About</a></Link>
        <Link><a href="/products">Products</a></Link>
        <Link><a href="/contact">Contact</a></Link>
        <Link>
          <a href="https://www.facebook.com/profile.php?id=100076285512948" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
        </Link>
        <Link>
          <a href="https://www.instagram.com/fknbeard/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
        </Link>
      </Links>
      <p>&copy; 2023 Beard Oil Company. All rights reserved.</p>
    </Content>
  </Container>
);
const Container = styled.footer`
    background-color: black;
    color: white;
    padding: 20px;
    position: relative;
    bottom: 0%;
    width: 100vw;
    opacity: 1;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
`;

const Logo = styled.img`
    height: 50px;
    margin-bottom: 20px;
`;

const Links = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    color:white;
`;

const Link = styled.li`
    margin: 0 10px;
    a {
    color: white;
    text-decoration: none;
    }
    &:hover{
        text-decoration: underline;
    }
`;

const FacebookIcon = styled(FaFacebook)`
    color: #3b5998;
    font-size: 1.5rem;
`;
const InstagramIcon = styled(FaInstagram)`
    color: #c13584;
    font-size: 1.5rem;
`;

export default Footer;