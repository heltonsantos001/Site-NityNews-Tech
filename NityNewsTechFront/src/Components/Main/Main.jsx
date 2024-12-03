import  Home  from "../../Img/Home2.jpg"
import { CardEmail } from "../CardEmail/CardEmail"
import "./MainStyle.css"

export function Main(){
    return(
        <>
        <main>    
            <div className="ContainerText">
                <h1>NityNews Tech</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repellat necessitatibus suscipit quod dolorum incidunt est autem doloribus odit, quidem perspiciatis consectetur quae dolor asperiores optio omnis neque amet architecto?</p>
            </div>
            <div>
               <CardEmail />
            </div>
        </main>
        </>
    )
}