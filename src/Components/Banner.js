import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

// Images:
const slideImgs = [
  {
    id: 1,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/interior-art.appspot.com/o/img13.jpg?alt=media&token=7a905e49-8d2e-45b4-b372-064353f79fdd',
  },
  {
    id: 2,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/interior-art.appspot.com/o/img14.jpg?alt=media&token=b8358b35-b8b4-429e-bc08-deaf28d7f72b',
  },
  {
    id: 3,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/interior-art.appspot.com/o/img8.jpg?alt=media&token=876af10b-83d3-4b6a-b2af-ccaba37320b0',
  },
  {
    id: 4,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/interior-art.appspot.com/o/img15.jpg?alt=media&token=90588b76-d739-4649-bd9d-37613f09c107',
  },
];

// Main:
const Banner = () => {
  // State for Slider:
  const [slides, setSlides] = useState(slideImgs);
  const [index, setIndex] = useState(0);

  return (
    <React.Fragment>
      <section className='section banner-sect'>
        <div className='slider-text'>
          <h1>Art</h1>
        </div>
        <div className='slider-img-center'>
          {slides.map((image, imageIndex) => {
            const { id, imageUrl } = image;
            //Functionality Slider:
            let position = 'nextSlide';
            // Active:
            if (imageIndex === index) {
              position = 'activeSlide';
            }
            // Last:
            if (imageIndex === index - 1) {
              position = 'lastSlide';
            }
            return (
              <article className={position} key={id}>
                <img src={imageUrl} alt='slider' className='slide-img'></img>
              </article>
            );
          })}
        </div>
        <AiOutlineLeft className='single-arrow left-arrow'></AiOutlineLeft>
        <AiOutlineRight className='single-arrow right-arrow'></AiOutlineRight>
      </section>
    </React.Fragment>
  );
};

export default Banner;
