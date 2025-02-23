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
      <div className="ContainerFooter">

      
      <div className="ContainerTextFooter">
      <h1 className="TitleFooter">
        Megulhe em um mar de novidades e conhecimento sobre a tecnologia
      </h1>
      </div>
      
     <div id="ContainerMainFooter">
        <Feedback />
        <div class="footer-about">
            <h4>Sobre a NityNews Tech</h4>
            <p>TechSphere é o seu portal de notícias sobre tecnologia, trazendo atualizações, inovações e tendências do setor.</p>
        </div>
        <div class="footer-links">
            <h4>Links Rápidos</h4>
            <ul>
                <li><a href="/sobre">Home</a></li>
                <li><a href="/sobre">Sobre nós</a></li>
                <li><a href="/politica-privacidade">Política de Privacidade</a></li>
                <li><a href="/termos-uso">Termos de Uso</a></li>
                <li><a href="/contato">Contato</a></li>
            </ul>
        </div>
     </div>
     <div id="ContainerRedes">
            <Instagram />
            <Linkedin />
        </div>
      <p>&copy;2024 NityNews tech | All Rights Reserved</p>
      </div>
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
