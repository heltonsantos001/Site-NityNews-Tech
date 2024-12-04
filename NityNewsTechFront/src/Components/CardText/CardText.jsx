import "./CardTextStyle.css"

export function CardText({title, text}){
    return(
        <div class="notification">
    <div class="notiglow"></div>
    <div class="notiborderglow"></div>
    <div class="notititle">{title}</div>
    <div class="notibody">{text}</div>
  </div>
    )
}