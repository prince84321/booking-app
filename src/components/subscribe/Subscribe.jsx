import "./subscribe.css"

function Subscribe() {
  return (
    <div className="subscribe">
        <div className="subscribe-container">
            <div className="subscribe-item">
                <h2 className="subscribe-title">Save time, save money!</h2>
                <span>Sign up and we'll send the best deals to you</span>
                <div className="subscribe-input-btn">
                    <input type="email" placeholder="Your Email Address" className="subscribe-input"  required/>
                    <button className="subscribe-btn">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe;