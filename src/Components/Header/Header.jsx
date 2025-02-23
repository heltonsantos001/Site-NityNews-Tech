import { MenuBar } from "../Menu/MenuBar";
import logo from "./../../Img/Logo.png"
import "./HeaderStyle.css"
import { WidthFunction } from "../../Function/WidthFunction";
import { useState, useEffect } from "react";



export function Header(){

    const [MenuView, setMenuView] = useState(true);
    const width = WidthFunction();

    function seeMenu(){
        if(width < 945) return setMenuView(false)
            setMenuView(true)
    }
      useEffect(() => {

        seeMenu()

      }, [width]);

    return(
        <header>
            <img src={logo} alt="" />
            {MenuView && <MenuBar />}
            <button>
                Sign up
                <div class="arrow-wrapper">
                <div class="arrow"></div>
                </div>
            </button>
        </header>
    );
}
