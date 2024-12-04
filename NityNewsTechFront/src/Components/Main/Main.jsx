import { CardEmail } from "../CardEmail/CardEmail"
import "./MainStyle.css"
import { Letter } from "../Letter/Letter"
import { CardText } from "../CardText/CardText"
import { CardNews } from "../CardNews/CardNews"

export function Main(){

    return(   
        <main>   
            <div id="ContainerTop">
                
                <div className="ContainerText">
                    <CardText title={"Fique Conectado ao Futuro!"} text={"Todos os dias, ás 7 horas e ponto enviamos para o seu e-mail as principais novidades do universo tecnológico lançamentos de produtos, ferramentas inovadoras, tendências de mercado, novas tecnologias, frameworks, IDEs e mais."} />
                </div>
                <div id="ContainerLetter">
                    <Letter />
                </div>
            </div> 

            <div id="ContainerCard">
            <CardEmail />
            </div>
        
        </main>
    )
}