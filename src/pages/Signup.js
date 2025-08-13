import { Link } from "react-router-dom";
import { useState } from "react";
import './signup.css'
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handle = async (e) => {
    e.preventDefault();
    const nerrors = {};

    if (!email || !email.includes("@")) {
      nerrors.email = "Invalid email";
    }
    if (!password || password.length < 6) {
      nerrors.password = "Password must contain at least 6 characters";
    }
    setErrors(nerrors);
    
    if (Object.keys(nerrors).length === 0) {
      const res=await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data =await res.json()
    if(!res.ok){
      setErrors({email:data.message})
      return
    }
      alert("Form submitted successfully");
      setName("");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <div className="body">
      <nav className="nav-bar">
        <h1>Food Delivery</h1>
        <div className="nav1">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
      <div className="container_signup">
        <div className="container1_signup">
          <h1>SIGN UP</h1>
          <form onSubmit={handle} style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <div>
              <label htmlFor="username">Enter your Name</label><br/>
              <input
                type="text"
                id="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="mail">Enter your email</label><br/>
              <input
                type="email"
                id="mail"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password">Enter your password</label><br/>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
              <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <footer className="footer_signup">
        <div className="social">
          <p style={{ color: "white", paddingLeft: "20px" }}>Follow Us On</p>
          <img src="assets/icons/facebook.png" alt="facebook" />
          <img src="assets/icons/linkedin.png" alt="linkedin" />
          <img src="assets/icons/social(1).png" alt="social1" />
          <img src="assets/icons/social.png" alt="social" />
        </div>
      </footer>
    </div>
  );
}

export default Signup;
