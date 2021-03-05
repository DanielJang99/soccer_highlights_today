import React from "react";
import { Carousel } from "react-bootstrap";

export default function CarouselFunction({ list }) {
    return (
        <div style={{ width: "500px", paddingTop: 10 }}>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={list[0].thumbnail}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{list[0].title}</h3>
                        <p>{list[0].competition.name}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={list[1].thumbnail}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>{list[1].title}</h3>
                        <p>{list[1].competition.name}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={list[2].thumbnail}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>{list[2].title}</h3>
                        <p>{list[2].competition.name}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
