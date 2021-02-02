import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Contact() {
  return (
    <div className="page">
        <Container>
            <h1>Contact Me</h1>
            <Row>
                <Col size="md-12">
                    <div className="icon LinkedIn">
                        <h3 className="contact">LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/cristina-ruiz-47527a134" rel="noreferrer" target="_blank" className="fab fa-linkedin"></a>
                    </div>
                    <div className="icon github">
                        <h3 className="contact">GitHub</h3>
                        <a href="https://github.com/cristinaruiz21" rel="noreferrer" target="_blank" className="fab fa-github"></a>
                    </div>
                    <div className="icon phone">
                        <h3 className="contact">(512)-826-7879</h3>
                        <i className="fas fa-phone"></i>
                    </div>
                    <div className="icon Resume">
                        <h3 className="contact">Resume</h3>
                        <a href="https://drive.google.com/file/d/17-1yV4E4SKzbmXqKz2vQNW7F29QMNOhw/view?usp=sharing" rel="noreferrer" target="_blank" className="fas fa-file"></a>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Contact;