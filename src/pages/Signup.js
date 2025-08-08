import { Link } from "react-router-dom";
function Signup(){
    return(
        <body>
        <nav class="nav-bar">
            <h1>Food Delivery</h1>
            <div class="nav1">
                <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
            </div>
        </nav>
        <div className="container" style={{paddingTop:"10%", paddingBottom: "10%"}}>
            <div className="container1">
                <h1>SIGN UP</h1>
                <form id="signupForm" method="POST" action="/signup" style={{display: "flex",flexDirection: "column", gap: "20px"}}>
                    <div>
                        <label for="username">Enter your Name</label>
                        <input type="text" id="name" name="name" required/>
                    </div>
                    <div>
                        <label for="mail">Enter your email</label>
                        <input type="email" id="mail" name="email" required/>
                    </div>
                    <div>
                        <label for="password">Enter your password</label>
                        <input type="password" id="password" name="password" required/>
                    </div>
                    <center>
                    <button type="submit">Submit</button></center>
                </form>
                </div>

        </div>
        <footer className="footer">
            <div className="social">
            <p style={{color:"white",paddingLeft: "20px"}}>Follow Us On</p>
            <img src="assets/icons/facebook.png" alt="i"/>
            <img src="assets/icons/linkedin.png" alt="i"/>
            <img src="assets/icons/social(1).png" alt="i"/>
            <img src="assets/icons/social.png" alt="i"/>
            </div>
        </footer>
    </body>
    );
}
export default Signup;