import React from "react";
import logo from "./logo.svg";
import "./styles/index.scss";
import Card from "./components/card";
import CardImage from "./components/card/card-image";
import CardBody from "./components/card/card-body";
import Container from "./components/container";
import Header from "./components/header";
import Tab from "./components/tab";

function App() {
  return (
    <div className="product-page">
      <Tab />
      <Container>
        <Header>
        <div className="body--small product-page--subtitle">Catalog</div>
        <h4>Korean Products</h4>
        </Header>
        <Card>
          <CardImage/>
          <CardBody title="Product 1" info={[]}/>
        </Card>
      </Container>
    </div>
  );
}

export default App;
