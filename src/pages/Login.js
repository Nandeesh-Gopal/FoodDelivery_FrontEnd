import { Link,useNavigate} from "react-router-dom";
import { useState } from "react";
import './login.css'
function Login(){
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const [err,setErr]=useState("")
    const navi=useNavigate();
    const handle =async (e)=>{
        e.preventDefault()
const Response = await fetch("http://localhost:5000/api/auth/login", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email,password})
        })
        if(Response.ok){
            const data = await Response.json();
            localStorage.setItem("token", data.token);
            navi("/")
        }
        else{
            const data=await Response.json()
            setErr(data.message)
        }
    }
    return(
         <div className="body">
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
            <form onSubmit={handle} style={{display: "flex",gap: "20px",flexDirection:"column"}}>
            <div>
                <label htmlFor="mail">Enter your email</label>
                <input type="email" id="mail" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Enter your password</label>
                <input type="password" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <center>
            <button type="submit">login</button></center>
            {err && <p>{err}</p>}
            <p id="mess"></p>
        </form>
            </div>
        </div>
        <footer className="footer_login">
            <div className="social">
            <p style={{color:"white",paddingLeft: "20px"}}>Follow Us On</p>
            <img src="assets/icons/facebook.png" alt="i"/>
            <img src="assets/icons/linkedin.png" alt="i"/>
            <img src="assets/icons/social(1).png" alt="i"/>
            <img src="assets/icons/social.png" alt="i"/>
            </div>
        </footer>
    </div>
    );
}
export default Login;