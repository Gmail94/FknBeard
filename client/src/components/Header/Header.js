import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png"

const Header = () => {

return (
    <Wrapper>
        <NavBar>
            <Link to="/">
                <Logo src={logo} alt="Fkn Beard Logo" />
            </Link>
            <Link to="/about">About Us</Link>
            <Link to="/products">Products</Link>
            <Link to="/locations">Locations</Link>
            <Link to="/contact">Contact</Link>
        </NavBar>
    </Wrapper>
);
};


const Wrapper = styled.div`
width:100%;
position:sticky;
top:0;
background-color: black;
z-index:1000;
font-family: 'Teko', sans-serif;
`
const NavBar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
border: 1px solid #d6d6d6;
border-radius: 0 0 10px 10px;
padding: 15px 15px 0px 15px;
z-index: 10;
`
const Link = styled(NavLink)`
font-size: 26px;
color:white;
text-decoration: none;
font-weight: 500;
transition: all 0.2s;
margin: 0 ;
&.active {
color: rgba(250,215,107,255);
text-decoration: underline;
}
&:hover {
    color: white;
    text-decoration: underline;
}
`
const Logo = styled.img`
height:5em;
`

export default Header;