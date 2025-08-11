import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Order(){
    const nav=useNavigate()
    const [order,setorder]=useState([])
    useEffect(()=>{
        const checkAuth=async () => {
            const res= await fetch("http://localhost:5000/checkAuth",{
                credentials:"include"
        })
        const data=await res.json()
        if(!data.loggedIn){
            nav("/login")
        }
        }
        checkAuth();
        const storeditem=localStorage.getItem("arr")
        if(storeditem){
            setorder(JSON.parse(storeditem))
        }
    },[nav])
    const total =order.reduce((sum,item)=>sum+item.total,0)
    return (
        <div>
        <nav className="nav-bar">
            <h1>Food Delivery</h1>
            <div className="nav1">
                <a href="signup.html">Sign Up</a>
                <Link to="/">Home</Link>
            </div>
        </nav>
        <h1>Order Summary</h1>
        { 
            order.length===0 ?
                <p>No items Selected</p>
            
            :
                <table>
                <thead><tr><th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th></tr></thead>
                    <tbody>
                        {
                            order.map((item,index)=>(
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                    <td>{item.total}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                    

                </table>
            }
        {
            order.length > 0 && (<h2>total : {total}</h2>)
        }
        <div style={{display: "flex",flexDirection:"column",gap: "20px",paddingTop: "20px",alignItems: "center"}} id="ordersumm">
       
        <div style={{display: "flex",flexDirection: "column",gap: "30px"}}>
            <form>
        <label htmlFor="Address">Enter your Location</label>
        <textarea name="Address" id="Address"></textarea>
        <label htmlFor="no" >Enter your Mobile number</label>
        <input htmlFor="number" placeholder="9999988888"/>
        <label htmlFor="payment">Payment Method</label>
        <label htmlFor="cod"><input type="radio" id="cod" name="payment"value="cod"/> Cash On Delivery</label>
        <label htmlFor="upi"><input type="radio" id="upi" name="payment"value="upi"/> UPI</label>

        <button className="buy ">Proceed to buy</button></form>
    </div></div>
    {/*
    <script>
        const items = JSON.parse(localStorage.getItem("orderData"));
        const summaryDiv = document.getElementById("ordersumm");
        let total = 0;

        items.forEach(element => {
            const itemTotal = element.price * element.quantity;
            total += itemTotal;

            summaryDiv.innerHTML += `
                <p>${element.name} - ₹${element.price} * ${element.quantity} = ₹${itemTotal}</p>
            `;
        });

        document.getElementById("total").innerText = `Total: ₹${total}`;
    </script>*/}
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
export default Order;