import React from "react";
import "./FooterStyle.css";
import { Linkedin } from "../IconRedes/Linkedin/Linkedin";
import { Feedback } from "../Feedback/Feedback";
import { Instagram } from "../IconRedes/Instagram/Instagram";

export function Footer() {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
     <div id="ContainerMainFooter">
    
     </div>
     

      <p>&copy;2024 NityNews tech | All Rights Reserved</p>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </footer>
  );
}
