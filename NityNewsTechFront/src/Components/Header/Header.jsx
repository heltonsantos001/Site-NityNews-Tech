import logo from "./../../Img/Logo.png"
import "./HeaderStyle.css"
import { Menu } from "../Menu/Menu";


export function Header(){
    return(
        <header>
            <img src={logo} alt="" />
            <Menu/>
            <button>
                Sign up
                <div class="arrow-wrapper">
                <div class="arrow"></div>
                </div>
            </button>
        </header>
    );
}
