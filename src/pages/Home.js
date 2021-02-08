import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ProfPic from "../components/ProfPic";

function Home() {
  return (
    <div className="page home">
        <Container>
        {/* <h1>Welcome!</h1> */}
            <Row>
                <Col size="md-6">
                    <p className="about1">
                    I am
                    </p>
                    <p className="about2">
                    Cruz Lopez
                    </p>
                    <p className="about3">
                    Diligent Data Analyst and Software Developer. 
                    </p>
                </Col>
                <Col size="md-4 offset-md-2">
                    <ProfPic/>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Home;
