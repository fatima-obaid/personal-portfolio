import {Col, Container, Row} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import bgSkills from "../img/bgskills.png"
import meter1 from '../img/meter1.svg';
import meter2 from '../img/meter2.svg';
import meter3 from '../img/meter2.svg';

export const Skills = () => {
 
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

return (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>Simple skills can be just as valuable as more complex ones. Sometimes,<br></br>  it's the basic skills that form the foundation for everything else. ,<br></br>Whether it's basic photography techniques, design principles, or any other skills  </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                               <img src={meter1} alt="not founf img"/>
                                <h5>FrontEnd Development</h5>
                            </div>
                            <div className="item">
                            <img src={meter2} alt="not founf img"/>
                                <h5>Photography</h5>
                            </div>
                            <div className="item">
                            <img src={meter3} alt="not founf img"/>
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                            <img src={meter1} alt="not founf img"/>
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className='background-image-left' src={bgSkills} alt="not founf img"/>
    </section>
  )
}