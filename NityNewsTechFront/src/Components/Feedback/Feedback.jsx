import "./FeedbackStyle.css"

export function Feedback(){
    return(
<div class="form-container">
      <form className="form">
        <div className="form-group">
          <label for="email">Company Email</label>
          <input className="inputEmail" type="text" id="email" name="email" required="" />
        </div>
        <div className="form-group">
          <label for="textarea">How Can We Help You?</label>
          <textarea name="textarea" id="textarea" rows="10" cols="50" required="">          </textarea>
        </div>
        <button className="form-submit-btn" type="submit">Submit</button>
      </form>
</div>
    )
}
