import {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";

function Order(){
    const nav=useNavigate()
    const [order,setorder]=useState([])
    const [formData, setFormData] = useState({
        address: '',
        phoneNo: '',
        payment: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    
    useEffect(()=>{
        const storeditem=localStorage.getItem("arr")
        if(storeditem){
            setorder(JSON.parse(storeditem))
        }
    },[nav])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        if (!formData.address || !formData.phoneNo || !formData.payment) {
            alert('Please fill all fields')
            setIsSubmitting(false)
            return
        }

        if (order.length === 0) {
            alert('No items in cart')
            setIsSubmitting(false)
            return
        }

       try {
    const orderData = {
        location: formData.address,
        phoneNo: formData.phoneNo,
        payment: formData.payment,
        items: order,
        total: total
    }
    const token = localStorage.getItem("token");


    const response = await fetch("http://localhost:5000/api/orders/place-order", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`

        },
        credentials: 'include',
        body: JSON.stringify(orderData)
    })

    const contentType = response.headers.get('content-type');
    console.log('Response status:', response.status, 'Content-Type:', contentType);
    
    let responseData;
    
    if (contentType && contentType.includes('application/json')) {
        responseData = await response.json();
    } else {
        responseData = await response.text();
        console.log('Non-JSON response:', responseData);
    }
    
    if (response.ok) {
        alert('Order placed successfully!');
        localStorage.removeItem('arr');
        setorder([]);
        setFormData({
            address: '',
            phoneNo: '',
            payment: ''
        });
    } else {
        if (typeof responseData === 'object' && responseData.message) {
            alert(responseData.message);
        } else {
            alert(`Server error: ${response.status} ${response.statusText}`);
        }
    }
} catch (error) {
    console.error('Error placing order:', error)
    alert('Error placing order. Please try again.')
} finally {
    setIsSubmitting(false)
}
    }

    const total = order.reduce((sum,item)=>sum+item.total,0)
    
    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"space-between"}}>
            <nav className="nav-bar">
                <h1>Food Delivery</h1>
                <div className="nav1">
                    <Link to="/">Home</Link>
                    <Logout/>
                </div>
            </nav>
            <h1>Order Summary</h1>
            { 
                order.length===0 ?
                    <p>No items Selected</p>
                :
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
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
                order.length > 0 && (<h2>Total: ₹{total}</h2>)
            }
            <div style={{display: "flex",flexDirection:"column",gap: "20px",paddingTop: "20px",alignItems: "center"}} id="ordersumm">
                <div style={{display: "flex",flexDirection: "column",gap: "30px"}}>
                    <form style={{display: "flex",flexDirection: "column",gap: "30px"}} onSubmit={handleSubmit}>
                        <label htmlFor="address">Enter your Location</label>
                        <textarea 
                            name="address" 
                            id="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                        />
                        
                        <label htmlFor="phoneNo">Enter your Mobile number</label>
                        <input 
                            type="tel" 
                            name="phoneNo" 
                            id="phoneNo"
                            placeholder="9999988888"
                            value={formData.phoneNo}
                            onChange={handleInputChange}
                            pattern="[0-9]{10}"
                            required
                        />
                        
                        <label>Payment Method</label>
                        <label htmlFor="cod">
                            <input 
                                type="radio" 
                                id="cod" 
                                name="payment"
                                value="cod"
                                checked={formData.payment === 'cod'}
                                onChange={handleInputChange}
                                required
                            /> 
                            Cash On Delivery
                        </label>
                        <label htmlFor="upi">
                            <input 
                                type="radio" 
                                id="upi" 
                                name="payment"
                                value="upi"
                                checked={formData.payment === 'upi'}
                                onChange={handleInputChange}
                                required
                            /> 
                            UPI
                        </label>

                        <button 
                            type="submit" 
                            className="buy"
                            disabled={isSubmitting || order.length === 0}
                        >
                            {isSubmitting ? 'Processing...' : 'Proceed to buy'}
                        </button>
                    </form>
                </div>
            </div>
            
            <footer className="footer">
                <div className="social">
                    <p style={{color:"white",paddingLeft: "20px"}}>Follow Us On</p>
                    <img src="assets/icons/facebook.png" alt="facebook"/>
                    <img src="assets/icons/linkedin.png" alt="linkedin"/>
                    <img src="assets/icons/social(1).png" alt="social"/>
                    <img src="assets/icons/social.png" alt="social"/>
                </div>
            </footer>
        </div>
    );
}

export default Order;