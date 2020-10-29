import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
// Images:
import sliderImgs from '../Context/sliderImages';

// Animations:
import { TweenMax, TimelineMax, Quint } from 'gsap';

const Banner = () => {
  // ::::::::::::::::: GSAP :::::::::::::::::::::::

  let wholeContainer = useRef(null);
  let imagesContainer = useRef(null);
  let tl = new TimelineMax();

  useEffect(() => {
    // Prevent Default:
    TweenMax.to(wholeContainer, 0, {
      opacity: 1,
    });
    // Images Container:
    tl.from(
      imagesContainer,
      1.7,
      {
        opacity: 0,
      },
      0.2
    ).from(
      imagesContainer,
      2,
      {
        scale: 1.6,
        ease: Quint.easeInOut,
      },
      1.3
    );
  }, []);

  //  ::::::::::::: SLIDER :::::::::::::::::
  // State for Slider:
  const [slides, setSlides] = useState(sliderImgs);
  const [index, setIndex] = useState(0);
  // Use Effect for Last Slide or -1 Slide--->
  useEffect(() => {
    const lastIndex = slides.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  // ::::::::::::::::::: RENDER :::::::::::::::::::::::::
  return (
    <React.Fragment>
      <section
        className='banner-sect'
        ref={(element) => {
          wholeContainer = element;
        }}
      >
        <div className='deco-text'>
          <h1>Create</h1>
        </div>
        <div
          className='slider-images-container'
          ref={(el) => (imagesContainer = el)}
        >
          {slides.map((image, imageIndex) => {
            const { id, imageUrl } = image;
            // Functionality:
            let position = 'nextSlide';
            // ACTIVE:
            if (imageIndex === index) {
              position = 'activeSlide';
            }
            // LAST:
            if (
              imageIndex === index - 1 ||
              (index === 0 && imageIndex === slides.length - 1)
            ) {
              position = 'lastSlide';
            }

            return (
              <article className={`image-container ${position}`} key={id}>
                <img src={imageUrl} alt='bannerSlide' className='slide-image' />
              </article>
            );
          })}
        </div>
        <div className='single-arrow'>
          <AiOutlineLeft
            className='left-arrow'
            onClick={() => setIndex(index - 1)}
          ></AiOutlineLeft>
          <AiOutlineRight
            className='right-arrow'
            onClick={() => setIndex(index + 1)}
          ></AiOutlineRight>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Banner;
