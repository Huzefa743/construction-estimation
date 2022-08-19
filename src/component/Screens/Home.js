import React, { useEffect, useState, useRef } from "react";

import logo7 from "../../images/logo7.svg";
import {
  DropdownButton,
  Dropdown,
  Button,
  Popover,
  OverlayTrigger,
  ButtonGroup,
  Overlay,
  Tooltip, Image
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AccordionTag from "./Accordion";


function Home() {
  return (
    <>
      <Header/>
      <div style={{padding:20}}>
     
        <AccordionTag/>
      </div>
     
      <Footer/>
    </>
  );
}

export default Home;
// added whitespace to content to fix alignment
