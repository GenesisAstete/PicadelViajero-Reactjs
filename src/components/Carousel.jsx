import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import fotoUno from '../img/torresEscritorio.png';
import fotoDos from '../img/cascadaEscritorio.png';
import fotoTres from '../img/iglesiaEscritorio.png';
import foto4 from '../img/moais.jpg';

import '../sass/carousel.scss' 

const Carousel = () => {
    return (
        <MDBContainer>
            <MDBCarousel
                activeItem={1}
                length={4}
                showControls={false}
                showIndicators={false}
                className="z-depth-1"
                slide
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img
                                className="fotos"
                                alt="Primary slide"
                                src={fotoUno}
                            />
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img
                                className="fotos"
                                src={fotoDos}
                                alt="Second slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                                className="fotos"
                                src={fotoTres}
                                alt="Third slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="4">
                        <MDBView>
                            <img
                                className="fotos"
                                src={foto4}
                                alt="4 slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
}

export default Carousel;