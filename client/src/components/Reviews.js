import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {FiChevronRight, FiChevronLeft}  from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";

const reviewsData = [
  {
    id: 1,
    star:5,
    title: "Great service!",
    text: "Awesome product, great smelling scents",
    name: "Randy Baxter",
    date: "November 8, 2021",
  },
  {
    id: 2,
    star:5,
    title: "Awesome product!",
    text: "Amazing quality! unique scents, very light feeling when applied! best beard oil I've tried!",
    name: "Shawn Holder",
    date: "January 28, 2022",
  },
  {
    id: 3,
    star:5,
    title: "Highly recommend!",
    text: "I would definitely recommend this company to anyone looking for great products and excellent customer service.",
    name: "Pablo Escobar",
    date: "June 23, 2021",
  },
  {
    id: 4,
    star:5,
    title: "Excellent experience",
    text: "Received a bottle for Christmas of Biker’s Brew, smells great, feels great….Awesome product! Thank You!",
    name: "Mike Tousignant",
    date: "January 4, 2022",
  },
  {
    id: 5,
    star:5,
    title: "Dry Skin Remedy",
    text: "I've always had an itchy face and beard but while using this product my skin has been much more soothed. Highly recommend",
    name: "Liam Gilmore",
    date: "March 31, 2023",
  },
  {
    id: 6,
    star:5,
    title: "WooHoo",
    text: "The customer service was excellent. They were very helpful and responsive to my questions.",
    name: "Alex Markov",
    date: "June 23, 2021",
  },
  {
    id: 7,
    star:5,
    title: "Best in Town",
    text: "The customer service was excellent. They were very helpful and responsive to my questions.",
    name: "Cassius Clay",
    date: "June 23, 2021",
  },
];

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const randomReviews = [];
    while (randomReviews.length < 7) {
      const randomIndex = Math.floor(Math.random() * reviewsData.length);
      const randomReview = reviewsData[randomIndex];
      if (!randomReviews.some(review => review.id === randomReview.id)) {
        randomReviews.push(randomReview);
      }
    }
    setReviews(randomReviews);
  }, []);

  const [startIndex, setStartIndex] = useState(0);

  const handlePrevClick = () => {
    setStartIndex(startIndex - 1);
  };

  const handleNextClick = () => {
    setStartIndex(startIndex + 1);
  };

  const visibleReviews = reviews.slice(startIndex, startIndex + 3);

  return (
    <>
      <ReviewsContainer>
        {visibleReviews.map(review => (
          <ReviewCard key={review.id}>
            <Star>
                <AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
            </Star>
            <ReviewTitle>{review.title}</ReviewTitle>
            <ReviewText>{review.text}</ReviewText>
            <ReviewName>- {review.name}</ReviewName>
            <ReviewDate> {review.date}</ReviewDate>
          </ReviewCard>
        ))}
      </ReviewsContainer>
      <div>
        <Button onClick={handlePrevClick} disabled={startIndex === 0}><FiChevronLeft /></Button>
        <Button onClick={handleNextClick} disabled={startIndex + 3 >= reviews.length}><FiChevronRight /></Button>
      </div>
    </>
  );
};


const ReviewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ReviewCard = styled.div`
  width: 20%;
  padding: 18px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0.5em 1em 1em  lightgray;
`;

const ReviewTitle = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const ReviewText = styled.p`
  font-size: 14px;
`;

const ReviewName = styled.h4`

`;

const ReviewDate = styled.p`
font-size: small;
`

const Button = styled.button`
background-color:rgba(250,215,107,255);
color:black;
margin: 10px;
padding: 5px 10px;
font-size: 14px;

:disabled{
    background-color: lightgray;
    color:lightgray;
}
`;

const Star = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
export default Reviews;