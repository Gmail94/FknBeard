import styled from "styled-components";
import banner from "./images/banner.png";
import Reviews from "./Reviews";
import backgroundImage from "./images/background.jpg";

const Home = () => {
    return(
        <Wrapper>
            <>
                <Banner src={banner} alt="beard oil banner"/>
                <h1>Premium Beard Products</h1>
                <h2>Made in Kingston, Ontario, Canada</h2>
                <p>Our products are crafted using premium carrier oils, butters, and essential oils of the highest quality. 
                    We steer clear of any substandard fillers or fragrance oils to guarantee that you receive optimal 
                    protection for your beard and skin.
                </p>
                <h4>View our collection:</h4>
                <h3>Let our customers speak for us</h3>
                <Reviews />
            </>
        </Wrapper>
    )
}



const Wrapper = styled.div`
/* background-image: url(${backgroundImage}); */
background-size: cover;
background-position: center;
height:100vh;
display:flex;
flex-direction: column;
align-items: center;
font-family: 'Teko', sans-serif;
margin-bottom:200px;
`

const Banner = styled.img`
width:100vw;
height:25em;
`

export default Home; 