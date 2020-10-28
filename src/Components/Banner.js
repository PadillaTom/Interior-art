import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Banner = () => {
  return (
    <React.Fragment>
      <section className='section banner-sect'>
        <AiOutlineLeft className='single-arrow left-arrow'></AiOutlineLeft>
        <AiOutlineRight className='single-arrow right-arrow'></AiOutlineRight>
      </section>
    </React.Fragment>
  );
};

export default Banner;
