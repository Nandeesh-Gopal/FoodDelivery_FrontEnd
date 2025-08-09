import { Link } from "react-router-dom";
function Login(){
    return(
         <body>
        <nav className="nav-bar">
            <h1 style={{color: "white"}}>Food Delivery</h1>
            <div className="nav1">
          <Link to="/signup">Sign Up</Link>
                <Link to="/">Home</Link>
            </div>
        </nav>
        <div className="container">
            <div className="container1" >
            <h1>LOGIN</h1>
            <form action="/login" method="POST" style={{display: "flex",gap: "20px",flexDirection:"column"}}>
            <div>
                <label htmlFor="mail">Enter your email</label>
                <input type="email" id="mail" name="email"/>
            </div>
            <div>
                <label htmlFor="password">Enter your password</label>
                <input type="password" id="password" name="password"/>
            </div>
            <center>
            <button type="submit">login</button></center>
            <p id="mess"></p>
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
export default Login;