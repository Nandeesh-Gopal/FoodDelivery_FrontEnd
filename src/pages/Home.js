import './Home.css';
import { Link } from "react-router-dom";
import Logout from './Logout';
function Home() {
  return (
    <div>
      <nav className="nav-bar">
        <h1>Food Delivery</h1>
        <div className="nav1">
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
          <Logout/> 
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
        <div className="sub-cont">
          <img src="assets/hotel1.webp" alt="Basha Biriyani" />
          <p>Basha Biriyani</p>
          <center><Link to="/items"><button>Order now</button></Link></center>
        </div>
        <div className="sub-cont">
          <img src="assets/hotel6.avif" alt="Annapoorna" />
          <p>Annapoorna</p>
          <center><Link to="/items"><button>Order now</button></Link></center>
        </div>
        <div className="sub-cont">
          <img src="assets/hotel7.avif" alt="Anandhaas" />
          <p>Anandhaas</p>
          <center><Link to="/items"><button>Order now</button></Link></center>
        </div>
        <div className="sub-cont">
          <img src="assets/hotel4.jpg" alt="A2B" />
          <p>A2B</p>
          <center><Link to="/items"><button>Order now</button></Link></center>
        </div>
        <div className="sub-cont">
          <img src="assets/hotel5.jpg" alt="KFC" />
          <p>KFC</p>
          <center><Link to="/items"><button>Order now</button></Link></center>
        </div>
        <div className="sub-cont">
          <img src="assets/hotel2.webp" alt="Chai Kings" />
          <p>Chai Kings</p>
          <center><Link to="/items"><button>Order now</button></Link></center>
        </div>
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
