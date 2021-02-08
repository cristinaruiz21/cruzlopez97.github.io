import React from "react";
import Row from "../Row";
import Button from "../Button";
import Code from "../../images/code.jpg";


function Card() {
  return (
    <div>
      <Row>
      <div className="card">
        <a href="https://github.com/Primes512/InventoryManagement" target="_blank" className="link-text">Inventory Management</a>
        <img src={Code} className="img-thumbnail2" alt="inventory"/>
        <Button className="btn btn-primary btn-lg app" id="git">
          <a href="https://github.com/Primes512/InventoryManagement" target="_blank">GitHub Repo</a>
        </Button>
      </div>
      </Row>
    </div>
  );
}

export default Card;
