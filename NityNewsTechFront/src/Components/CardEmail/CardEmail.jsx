import "./CardEmailStyle.css"

export function CardEmail(){
    return(
            <div class="subscribe">
                <p>SUBSCRIBE</p>
                <input placeholder="Your e-mail" class="subscribe-input" name="email" type="email" />
                <br/>
                <div class="submit-btn">SUBMIT</div>
            </div>
    )
}