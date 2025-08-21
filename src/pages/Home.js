import './Home.css';
import { Link } from "react-router-dom";
import Logout from './Logout';
import React,{useEffect,useState} from 'react';
function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      fetch("http://localhost:5000/api/auth/check-session", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })
        .then(res => res.json())
        .then(data => {
          setIsLoggedIn(data.active);
        })
        .catch(err => console.error(err));
    } else {
      setIsLoggedIn(false);
    }
    fetch("http://localhost:5000/api/hotels")
      .then(res => res.json())
      .then(data => setHotels(data))
      .catch(err => console.error(err));
  }, []);
  return (
    <div>
      <nav className="nav-bar">
        <h1>Food Delivery</h1>
        <div className="nav1">
          {!isLoggedIn ? (
            <>
              <Link to="/signup">sign Up</Link>
              <Link to="/login">Login</Link>
            </>
          ) : (
            <Logout />
          )}
        </div>
      </nav>

      <div id="message" style={{ fontSize: "2rem", color: "rgb(255, 77, 0)" }}></div>

      <center>
        <h1 style={{ color: "rgb(255, 77, 0)", padding: "10px" }}>
          Fast. Fresh. At Your Door.
        </h1>
      </center>
      <div className="dish">
        <div className="sub-dish">
          <img src="assets/indian.jpg" alt="Indian" />
          <p>Indian</p>
        </div>
        <div className="sub-dish">
          <img src="assets/chineese.jpg" alt="Chinese" />
          <p>Chinese</p>
        </div>
        <div className="sub-dish">
          <img src="assets/italian.jpg" alt="Italian" />
          <p>Italian</p>
        </div>
        <div className="sub-dish">
          <img src="assets/dessert.jpg" alt="Dessert" />
          <p>Dessert</p>
        </div>
        <div className="sub-dish">
          <img src="assets/fresh juice.jpg" alt="Fresh Juice" />
          <p>Fresh Juice</p>
        </div>
      </div>

      <center>
        <h1 style={{ color: "rgb(255, 77, 0)", paddingTop: "30px", paddingBottom: "50px" }}>
          Explore Nearby Restaurants!
        </h1>
      </center>

      <div className="cont">
        {hotels.map(hotel => (
          <div className="sub-cont" key={hotel._id}>
            <img src={hotel.image} alt={hotel.name} />
            <p>{hotel.name}</p>
            <center><Link to={`/items/${hotel._id}`}><button>Order now</button></Link></center>
          </div>
        ))}
      </div>

      <footer className="footer">
        <div className="social">
          <p style={{ color: "white", paddingLeft: "20px" }}>Follow Us On</p>
          <img src="assets/icons/facebook.png" alt="Facebook" />
          <img src="assets/icons/linkedin.png" alt="LinkedIn" />
          <img src="assets/icons/social(1).png" alt="Social 1" />
          <img src="assets/icons/social.png" alt="Social 2" />
        </div>
      </footer>
    </div>
  );
}

export default Home;
