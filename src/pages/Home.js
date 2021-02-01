import React from "react";
import Links from '../Components/Links'
import portrait from '../images/BradGaynor.jpg'
import Page from "../Components/Page";

function Home() {
  return (
    <Page>
      <div className="portrait-container">
        <img className="portrait" src={portrait} alt="Brad Gaynor" />
      </div>
      <h1>Bradley Gaynor</h1>
      <h3>Senior Software Engineer</h3>
      <Links />
    </Page>
  );
}

export default Home;
