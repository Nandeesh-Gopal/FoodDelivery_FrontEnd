import './items.css';
import { useNavigate, Link, useParams } from 'react-router-dom';
import Logout from './Logout';
import { useEffect, useState } from 'react';

function Items() {
    const nav = useNavigate();
    const { hotelid } = useParams();
    const [menu, setMenu] = useState([]);

useEffect(() => {
    fetch(`http://localhost:5000/api/hotels/${hotelid}/menu`)
        .then(res => res.json())
        .then(data => {
            console.log("Menu data from backend:", data);
            setMenu(data);
        })
        .catch(err => console.log(err));
}, [hotelid]);


    const handle = () => {
        const inputs = document.querySelectorAll("input");
        const arr = [];
        inputs.forEach(item => {
            const name = item.getAttribute("data-name");
            const quantity = parseInt(item.value);
            const price = parseInt(item.getAttribute("data-price"));
            if (quantity > 0) {
                arr.push({
                    name,
                    quantity,
                    price,
                    total: quantity * price
                });
            }
        });

        localStorage.setItem("arr", JSON.stringify(arr));
        nav("/order");
    };

    return (
        <div>
            <nav className="nav-bar">
                <h1>Food Delivery</h1>
                <div className="nav1">
                    <Link to="/">Home</Link>
                    <Logout />
                </div>
            </nav>

            <h1 style={{ color: "orangered", padding: "50px" }}>Select items</h1>

            <div className="container-items">
                {menu.map(item => (
  <div className="sub-cont-items" key={item.itemname}>
    <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
      <img src={item.image} alt={item.itemname} />
      <div>
        <h1>{item.itemname}</h1>
        <h6>{item.description}</h6>
      </div>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
      <p>{item.price}₹</p>
      <input
        type="number"
        min="0"
        defaultValue="0"
        id={item.itemname}
        data-name={item.itemname} 
        data-price={item.price} 
      />
    </div>
  </div>
))}

            </div>

            <br />
            <center>
                <button className="buy_button" onClick={handle}>Proceed to Buy</button>
            </center>

            <footer className="footer">
                <div className="social">
                    <p style={{ color: "white", paddingLeft: "20px" }}>Follow Us On</p>
                    <img src="/assets/icons/facebook.png" alt="facebook" />
                    <img src="/assets/icons/linkedin.png" alt="linkedin" />
                    <img src="/assets/icons/social(1).png" alt="social1" />
                    <img src="/assets/icons/social.png" alt="social" />
                </div>
            </footer>
        </div>
    );
}

export default Items;
