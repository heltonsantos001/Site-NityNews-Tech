import "./CardEmailStyle.css"

export function CardEmail(){
    return(
            <>
                <div class="card">
    <span class="card__title">Subscribe</span>
    <p class="card__content">Get fresh web design resources delivered straight to your inbox every week.
    </p>
    <div class="card__form">
        <input placeholder="Your Email" type="text" />
        <button class="sign-up"> Sign up</button>
    </div>
</div>
            </>
    )
}