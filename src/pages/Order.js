import React from "react";
function Order(){
    return (
        <body>
        <nav className="nav-bar">
            <h1>Food Delivery</h1>
            <div className="nav1">
                <a href="signup.html">Sign Up</a>
                <a href="index.html">home</a>
            </div>
        </nav>
        <h1>Order Summary</h1>
        <div style={{display: "flex",flexDirection:"column",gap: "20px",paddingTop: "20px",alignItems: "center"}} id="ordersumm">
       
        <div style={{display: "flex",flexDirection: "column",gap: "30px"}}>
        <label for="Address">Enter your Location</label>
        <textarea name="Address" id="Address"></textarea>
        <label for="no" >Enter your Mobile number</label>
        <input type="number" placeholder="9999988888"/>
        <label for="payment">Payment Method</label>
        <label for="cod"><input type="radio" id="cod"value="cod"/> Cash On Delivery</label>
        <label for="cod"><input type="radio" id="cod"value="upi"/> UPI</label>

        <button className="buy ">Proceed to buy</button>
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
    </body>
    );
}
export default Order;