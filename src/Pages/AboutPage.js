import React, { useRef, useEffect } from 'react';
import useHorizontal from '@oberon-amsterdam/horizontal/hook';
// Animations:
import { TimelineMax, Back, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  useHorizontal();
  let letters = useRef(null);

  let tl = new TimelineMax();

  useEffect(() => {
    // :::::::::::: DESIGN Letters ::::::::::::::::::::
    tl.from(letters.firstElementChild, 0.8, {
      y: -300,
      opacity: 0,
      ease: Back.easeOut,
    })
      .from(
        letters.firstElementChild.nextElementSibling,
        0.8,
        {
          y: -300,
          opacity: 0,
          ease: Back.easeOut,
        },
        0.2
      )
      .from(
        letters.firstElementChild.nextElementSibling.nextElementSibling,
        0.8,
        {
          y: -300,
          opacity: 0,
          ease: Back.easeOut,
        },
        0.4
      )
      .from(
        letters.firstElementChild.nextElementSibling.nextElementSibling
          .nextElementSibling,
        0.8,
        {
          y: -300,
          opacity: 0,
          ease: Back.easeOut,
        },
        0.6
      )
      .from(
        letters.firstElementChild.nextElementSibling.nextElementSibling
          .nextElementSibling.nextElementSibling,
        0.8,
        {
          y: -300,
          opacity: 0,
          ease: Back.easeOut,
        },
        0.8
      )
      .from(
        letters.firstElementChild.nextElementSibling.nextElementSibling
          .nextElementSibling.nextElementSibling.nextElementSibling,
        0.8,
        {
          y: -300,
          opacity: 0,
          ease: Back.easeOut,
        },
        1
      );
    //:::::::: Scroll Image ::::::::::::::::::
    gsap.to('.about-img', {
      y: -1200,
      scrollTrigger: {
        trigger: '.about-img',
        horizontal: true,
        start: 'left-=400 left',
        scrub: 4,
      },
    });
  }, []);

  return (
    <React.Fragment>
      <section className='section about-sect'>
        <div className='block'>
          <div className='about-title'>About Us</div>
          {/* Animated Text = LOGO */}
          <div className='about-logo'>
            <h1
              ref={(el) => {
                letters = el;
              }}
            >
              <span className='letter1'>D</span>
              <span className='letter2'>e</span>
              <span className='letter3'>s</span>
              <span className='letter4'>i</span>
              <span className='letter5'>g</span>
              <span className='letter6'>n</span>
            </h1>
          </div>
          {/* Image */}
          <div className='about-img-container'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/interior-art.appspot.com/o/img11.jpg?alt=media&token=de56e776-d588-4f1e-b7de-8ee6aa2b2ad0'
              alt='About'
              className='about-img'
            />
          </div>
          {/* About Description */}
          <h4 className='about-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            accusantium fugiat ex quia laudantium iste iure, vero optio veniam,
            ullam, accusamus sit? Nisi nam illum quo eius quasi perspiciatis
            facere veniam natus minus mollitia, commodi distinctio atque dolor
            at corporis. Nobis consectetur architecto provident et!
            Perspiciatis, iste consequuntur!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            repellat natus voluptatum sapiente adipisci ex provident voluptates
            ad vel alias corporis odio doloremque, facilis fugit magni neque
            maiores quibusdam magnam.
          </h4>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutPage;
