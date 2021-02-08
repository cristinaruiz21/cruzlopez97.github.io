import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import AboutPic from "../components/AboutPic";

function About() {
  return (
    <div className="page">
        <Container>
        <h1>About Me</h1>
            <Row>
                <Col size="md-4 offset-md-2">
                    <AboutPic/>
                </Col>
                <Col size="md-6">
                    <p className="about">
                    Welcome! My name is Cruz Lopez. I was born and raised in Austin, Texas and I am 23 years old. I am currently pursuing a Bachelor of Science in Computer Information Systems at the University of Houston. I founded an engineering consulting company in 2020 with my four brothers called Bluebonnet Engineering, where I am the lead Data Analyst. I am also the IT Manager for Special Trucks and Auto Salvage where I analyze sales reports and inventory data to generate efficient and effective improvements on our business model. In my free time I like to create leather goods, ride motorcycles around Austin, go on walks with my dog, Harley, and hang out with my family. On the portfolio page you will find some of the projects that I have completed thus far. I will be periodically updating that page with new programs that I have worked on. Please feel free to reach out to me and connect with me via my links on my contact page. 
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default About;
