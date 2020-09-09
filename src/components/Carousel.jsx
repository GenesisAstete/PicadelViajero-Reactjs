import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import fotoUno from '../img/torresEscritorio.png';
import fotoDos from '../img/cascadaEscritorio.png';
import fotoTres from '../img/iglesiaEscritorio.png';
import foto4 from '../img/moais.jpg';

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
                            <p className="textSlider">Texto¿Te gusta viajar por chile?</p>
                            <img
                                className="fotos"
                                alt="Primary slide"
                                src={fotoUno}
                            />
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <p className="textSlider">publica tus mejores picadas</p>
                            <img
                                className="fotos"
                                src={fotoDos}
                                alt="Second slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <p className="textSlider">conoce a otros viajeros</p>
                            <img
                                className="fotos"
                                src={fotoTres}
                                alt="Third slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="4">
                        <MDBView>
                            <p className="textSlider">recorrer chile ya no es una excusa</p>
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