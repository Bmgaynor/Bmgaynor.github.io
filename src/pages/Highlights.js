import React from "react";
import Page from "../Components/Page";
import { ReactTinyLink } from "react-tiny-link";

function Highlight ({ link }) {
  return (
    <li className="Highlight">
      <ReactTinyLink
        cardSize="small"
        showGraphic={true}
        maxLine={2}
        minLine={1}
        url={link}
      />
    </li>
  )
  
}

function Highlights() {
  return (
    <Page>
      <ul className='Highlights'>
        <Highlight link='https://gitlab.com/bmgaynor/create-react-catalog' />
        <Highlight link='https://gitlab.com/bmgaynor/use-scroll-position' />
        <Highlight link='https://github.com/Bmgaynor/mono' />
        <Highlight link='https://gitlab.com/bmgaynor/react-16-presentation' />
        <Highlight link='https://github.com/Bmgaynor/react-google-openid-express' />
      </ul>
    </Page>
  );
}

export default Highlights;
