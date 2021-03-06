import React, { useState, useEffect } from "react";
import { api } from "../assets/conf";
import {
  Img,
  ContainerLogoCaroussel,
  Title,
  Margin,
  ContainerCaroussel,
} from "../styled-components/LogoStyle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function Logo() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    api
      .get(`/logos`)
      .then(function (response) {
        setLogos(response.data);
      })
      .catch(function (error) {});
  }, []);

  return (
    <ContainerCaroussel>
      <Title>Nos partenaires :</Title>
      <Margin>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={2000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          slidesToSlide="4"
        >
          {logos.map((logo) => {
            return (
              <ContainerLogoCaroussel>
                <Img src={logo.lien_url} />
              </ContainerLogoCaroussel>
            );
          })}
        </Carousel>
      </Margin>
    </ContainerCaroussel>
  );
}
