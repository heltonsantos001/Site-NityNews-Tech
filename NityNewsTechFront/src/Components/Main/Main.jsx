import { CardEmail } from "../CardEmail/CardEmail"
import "./MainStyle.css"
import { Letter } from "../Letter/Letter"
export function Main(){

    return(
        <>
        
        <main>   
            <div id="ContainerTop">
            <div className="ContainerText">
                <h1>Fique Conectado ao Futuro!</h1>
                <p>
                    Todos os dias, ás 7 horas e ponto enviamos para o seu e-mail as principais novidades do universo tecnológico lançamentos de produtos, ferramentas inovadoras, tendências de mercado, novas tecnologias, frameworks, IDEs e mais.
                </p>
            </div>
            <div>
               <Letter />
            </div>
            </div> 
            <div id="ContainerBottom">
                <CardEmail />
            </div>
            <div id="ContainerEnd">

            </div>
        </main>
        </>
    )
}