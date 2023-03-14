import styled from "styled-components";
import about from "./images/aboutus.jpg";

const About = () => {

    return(
        <>
            <Wrapper>
                <Title>About Our Company</Title>
                    <Text>We are a small, family-owned beard oil company based in Kingston, Ontario. Our mission is to provide high-quality, all-natural beard care products that promote healthy, strong, and soft facial hair. </Text>
                    <Text>At our company, we believe in using only the best ingredients for our products. That's why we use only natural carrier oils and essential oils that are gentle on the skin and safe for the environment. Our oils are free from harmful chemicals and synthetic fragrances, so you can feel good about using them on your beard.</Text>
                    <Text>Our team is passionate about providing exceptional customer service, and we are committed to making sure that our customers are completely satisfied with our products. We take pride in the quality of our products and stand behind them with a 100% satisfaction guarantee.</Text>
                    <Text>Thank you for choosing our beard oil products, and we hope to continue serving you for years to come.</Text>
                    <Img src={about} alt="beard products"/>
            </Wrapper>
        </>
    )
};

const Wrapper = styled.div`
  padding: 2rem;
  background-color: #222;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font-family: 'Teko', sans-serif;
`
const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #fff;
`
const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  color: #bbb;
`
const Img = styled.img`
  width: 100%;
  max-width: 600px;
  margin-bottom: 2rem;
`



export default About; 
