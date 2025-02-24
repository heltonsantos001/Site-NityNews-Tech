import "./CardNewsStyle.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export function CardNews({title, description, image}){

  useEffect(() => {
    AOS.init(); 
  }, []);

    return(
      <div data-aos-duration="1500" data-aos="fade-up" class="card">
 <div class="image"></div>
  <div class="content">
    <a href={image}>
      <span class="title">
        {title}
      </span>
    </a>

    <p class="desc">
      {description} 
    </p>

    <a class="action" href="#">
      Find out more
      <span aria-hidden="true">
        →
      </span>
    </a>
  </div>
</div>
    )
}
    
