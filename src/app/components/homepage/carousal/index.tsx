// components/Carousel.tsx
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './carousal.scss'
const CarouselComponent: React.FC = () => {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
      <div className="d-flex justify-content-center align-items-center">
      <img
          className="d-block w-50"
          src="/images/client11.jpg"
          alt="First slide"
        />
  
         <div className='caption'>
          <h3>Anil Mehta</h3>
          <p>"My efforts in Application testing have changed massively thanks to Techo Ninja. They have tremendously sophisticated about their work and promises towards delivery. I've had great growth and success in my business strategy because to their professional resources and assistance. highly advisable."	</p>
          </div>
        </div>
        
      </Carousel.Item>
      <Carousel.Item>
      <div className="d-flex justify-content-center align-items-center">
        <img
          className="d-block w-72"
          src="/images/client2.jpg"
          alt="Second slide"
        />
         <div className='caption'>
          <h3>Vinod Ahuja</h3>
          <p>"Working with Techo Ninja has been one of my best experiences. This has to be the best mobile and website testing company. Their services are phenomenal, consisting of the latest technology hacks. Also, I have found their services cost-effective, and also, on my business's they have given a high return on investment.."</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="d-flex justify-content-center align-items-center">
        <img
          className="d-block w-72"
          src="/images/client3.jpg"
          alt="Third slide"
        />
        <div className='caption'>
          <h3>Maria Deo</h3>
          <p>"I am glad to choose Techo Ninja to expand my business. They provide excellent services along with total transparency. One of the best things about them is that our data/information stays in safe hands and is protected. Hence, this has helped me to move ahead with them in a carefree manner.."</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
