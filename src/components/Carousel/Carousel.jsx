import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css';  

import image1 from '../../../public/CarouselPicture/caverne.webp';
import image2 from '../../../public/CarouselPicture/PhotoCave.webp';
import image3 from '../../../public/CarouselPicture/PhotoNeige.webp';
import image4 from '../../../public/CarouselPicture/GuideVille.webp';
import image5 from '../../../public/CarouselPicture/GuideVille2.webp';
import image6 from '../../../public/CarouselPicture/GuideNocturne.webp';
import image7 from '../../../public/CarouselPicture/Patisserie 3.webp';
import image8 from '../../../public/CarouselPicture/MurjtmParis.webp';
import image9 from '../../../public/CarouselPicture/guidePanier.webp';
import image10 from '../../../public/CarouselPicture/conteur.webp';

const CarouselComponent = () => {
  const settings = {
    infiniteLoop: true,
    centerMode: true,         
    centerSlidePercentage: 40, 
    showArrows: true,         
    showThumbs: false,        
    useKeyboardArrows: true,  
    dynamicHeight: false,      
    swipeable: true,          
    autoPlay: true,           
    interval: 3000,           
  };

  const images = [image2, image1, image3, image4, image5,image6, image7, image8, image9, image10];

  return (
    <div className="carousel-container">
      <Carousel {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-image-container">
            <img src={image} alt={`Image ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
