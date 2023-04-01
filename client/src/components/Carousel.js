import { useState, useEffect } from 'react';
import styled from 'styled-components';

const images = [
  { src: './images/ad1.jpg', alt: 'Image 1' },
  { src: './images/ad2.jpg', alt: 'Image 2' },
  { src: './images/ad3.jpg', alt: 'Image 3' },
  { src: './images/ad4.jpg', alt: 'Image 4' },
  { src: './images/ad5.jpg', alt: 'Image 5' },
  // Add more images as needed
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <Image
        src={images[currentImageIndex].src}
        alt={images[currentImageIndex].alt}
      />
    </Container>
  );
};

const Container = styled.div`
  /* Carousel container styles */
`;

const Image = styled.img`
  /* Carousel image styles */
`;

export default Carousel;