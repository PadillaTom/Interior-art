import React from 'react';
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
  return (
    <React.Fragment>
      <section className='section banner-sect'>
        <AiOutlineLeft className='single-arrow left-arrow'></AiOutlineLeft>
        <AiOutlineRight className='single-arrow right-arrow'></AiOutlineRight>
        <div className='slider-img-container'>
          {slideImgs.map(({ id, imageUrl }) => {
            return (
              <img
                src={imageUrl}
                alt='slider'
                className='slide-img'
                key={id}
              ></img>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Banner;
