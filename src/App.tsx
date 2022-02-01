import React, { useState } from "react";
import "./styles/index.scss";
import logo from "./assets/images/logo/color-dark.svg";

import Card from "./components/Card/Card";
import CardImage from "./components/Card/CardImage";
import CardBody from "./components/Card/CardBody";
import CardTitle from "./components/Card/CardTitle";
import CardContent from "./components/Card/CardContent";
import Container from "./components/container/Container";
import Header from "./components/Header/Header";
import HeaderSubtitle from "./components/Header/HeaderSubtitle";
import Tab from "./components/Tab/Tab";
import TabLink from "./components/Tab/TabLink";
import TabLogo from "./components/Tab/TabLogo";
import Grid from "./components/Grid/Grid";
import { Product } from "./data/Product";

var productData = require("./data/products.json");

function App() {
  const [activeTab, setActiveTab] = useState(Object.keys(productData)[0]);
  return (
    <div>
      <Tab>
        {Object.keys(productData).map((key, i) => (
          <TabLink
            key={i}
            active={activeTab === key}
            onClick={() => setActiveTab(key)}
          >
            {key} products
          </TabLink>
        ))}
        <TabLogo>
          <img src={logo} alt="Trustana" />
        </TabLogo>
      </Tab>
      <Container>
        <Header>
          <HeaderSubtitle>Catalog</HeaderSubtitle>
          <h4>{activeTab} Products</h4>
        </Header>
        <Grid>
          {productData[activeTab].length > 0 ? (
            productData[activeTab].map(
              ({ id, name, qty, price, img_name }: Product) => (
                <Card key={id}>
                  <CardImage src={img_name} />
                  <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardContent>{qty}</CardContent>
                    <CardContent>{price}</CardContent>
                  </CardBody>
                </Card>
              )
            )
          ) : (
            <p className="body--small">No products yet</p>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
