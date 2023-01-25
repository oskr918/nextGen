import { Container, Row, Col } from "react-bootstrap";
import future from "../assets/img/future.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bienveidos!</span>
                <h1>Hola! Somos NexGen <span><span className="wrap"></span></span></h1>
                  <p>Una comunidad de desarrolladores comprometidos con el futuro. Nuestro objetivo es llevar el desarrollo de software a otro nivel.</p>
                  <button onClick={() => console.log('connect')}>Contactar<ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={future} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
