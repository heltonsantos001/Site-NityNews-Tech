import { CardEmail } from "../CardEmail/CardEmail"
import AOS from "aos";
import "aos/dist/aos.css";
import "./MainStyle.css"
import { Letter } from "../Letter/Letter"
import { CardText } from "../CardText/CardText"
import { CardNews } from "../CardNews/CardNews"
import { useEffect, useState } from "react";
import { MenuBar } from "../Menu/MenuBar";
import { WidthFunction } from "../../Function/WidthFunction";

export function Main(){

    const [MenuView, setMenuView] = useState(false);
    const width = WidthFunction();

    function seeMenu(){
        if(width < 945) return setMenuView(true)
            setMenuView(false)
    }

    useEffect(() => {
        AOS.init(); 
      }, []);

      useEffect(() => {
        seeMenu()

      }, [width]);


    return(   
        <main>   
            {MenuView && <MenuBar /> }
            <div id="ContainerTop">
            <div data-aos-duration="1500" data-aos="fade-up" id="ContainerLetter">
                    <Letter className="text-xl font-bold text-gray-500" />
                </div>
                <div data-aos-duration="1500" data-aos="fade-up" className="ContainerText">
                    <CardText className="text-xl font-bold text-gray-500" title={"Fique Conectado ao Futuro!"} text={"Todos os dias, ás 7 horas e ponto enviamos para o seu e-mail as principais novidades do universo tecnológico lançamentos de produtos, ferramentas inovadoras, tendências de mercado, novas tecnologias, frameworks, IDEs e mais."} />
                </div>
            </div> 

            <div id="ContainerCard">
                <div data-aos-duration="1500" data-aos="fade-up">
                <CardEmail className="text-xl font-bold text-gray-50" />   
            </div> 

            
            <div data-aos-duration="1500" data-aos="fade-up" id="ContainerCardText">
                <h1 className="text-xl font-bold text-gray-500">Seja perseguido, por boas notícias, claro!</h1>
                <p className="text-xl font-bold text-gray-500">
                   {width} Já pensou estar sempre atualizado sobre o mundo da tecnologia sem precisar procurar? A gente tem a solução perfeita, inscreva-se e deixe que as informações corram atrás de você. Pode relaxar, a gente garante que é uma perseguição saudável e cheia de novidades incríveis!
                </p>    
            </div>
                
            </div>
            <div id="ContainerCardNoticias">
                <CardNews />
                <CardNews />
                <CardNews />
                <CardNews />
                <CardNews />
                <CardNews />          
            </div>
        </main>
    )
}