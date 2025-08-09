import { Link } from "react-router-dom";
import { useState } from "react";
function Signup(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [errors,setError]=useState("")
    const handle= async (e)=>{
        e.preventDefault()
        const nerrors={}
        if(!email.includes("@") || !email){
            nerrors.email="Invalid email"
        }
        if(password.length<6 || !password){
            nerrors.password="Password must contain 6 characters"
        }
        setError(nerrors)
        if(Object.keys(nerrors).length===0){
            const res=await fetch("http://localhost:5000/signup",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({name,email,password})
        })
        
            alert("forms submitted successfull");
        }

    }
    return(
        <div>
        <nav className="nav-bar">
            <h1>Food Delivery</h1>
            <div class="nav1">
                <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
            </div>
        </nav>
        <div className="container" style={{paddingTop:"10%", paddingBottom: "10%"}}>
            <div className="container1">
                <h1>SIGN UP</h1>
                <form onSubmit={handle} style={{display: "flex",flexDirection: "column", gap: "20px"}}>
                    <div>
                        <label htmlFor="username">Enter your Name</label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="mail">Enter your email</label>
                        <input type="text" id="mail" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="password">Enter your password</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                        {errors.password &&<p>{errors.password}</p>}
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
    </div>
    );
}
export default Signup;