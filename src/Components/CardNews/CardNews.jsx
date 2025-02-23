import "./CardNewsStyle.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export function CardNews(){

  useEffect(() => {
    AOS.init(); 
  }, []);

    return(
      <div data-aos-duration="1500" data-aos="fade-up" class="card">
 <div class="image"></div>
  <div class="content">
    <a href="#">
      <span class="title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>
    </a>

    <p class="desc">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
      dolores, possimus pariatur animi temporibus nesciunt praesentium 
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
    
