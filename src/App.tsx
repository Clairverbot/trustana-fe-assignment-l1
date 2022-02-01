import React, { useState } from "react";
import "./styles/index.scss";
import logo from "./assets/images/logo/color-dark.svg";

import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import HeaderSubtitle from "./components/Header/HeaderSubtitle";
import Tab from "./components/Tab/Tab";
import TabLink from "./components/Tab/TabLink";
import TabLogo from "./components/Tab/TabLogo";
import Grid from "./components/Grid/Grid";
import SpaceX, { LAUNCH_SITES } from "./data/launch/SpaceX";

function App() {
  const [activeTab, setActiveTab] = useState(LAUNCH_SITES[0]);
  const onTabChange = (site: string) => {
    setActiveTab(site);
  };

  return (
    <div>
      <Tab>
        {LAUNCH_SITES.map((site, i) => (
          <TabLink
            key={i}
            active={activeTab === site}
            onClick={() => onTabChange(site)}
          >
            {site}
          </TabLink>
        ))}
        <TabLogo>
          <img src={logo} alt="Trustana" />
        </TabLogo>
      </Tab>
      <Container>
        <Header>
          <HeaderSubtitle>Catalog</HeaderSubtitle>
          <h4>{activeTab}</h4>
        </Header>
        <Grid>
          <SpaceX site={activeTab} />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
