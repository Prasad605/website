import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:shivprasadingale24@gmail.com">
        <Button>Contact: shivprasadingale24@gmail.com</Button>
        <Button>contact no.8767354388</Button>
    
      </a>
    </div>
  );
};

export default Contact;