import React from "react";

import "./Banner.css";

import Carousel from 'react-bootstrap/Carousel';

import Slide01 from "../../assets/images/carousel/slide01.jpg";
import Slide02 from "../../assets/images/carousel/slide02.jpg";
import Slide03 from "../../assets/images/carousel/slide03.jpg";

export default function Banner() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slide01}
                    alt="TV e Audio"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slide02}
                    alt="Básicos para o dia a dia"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slide03}
                    alt="Especial cabelos"
                />
            </Carousel.Item>
        </Carousel>
    )
}