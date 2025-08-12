import './items.css';
import { useNavigate,Link} from 'react-router-dom';
import Logout from './Logout';
function Items(){
    const nav=useNavigate();
    const handle =()=>{
        const inputs = document.querySelectorAll("input")
        const arr=[];
        inputs.forEach(item=>{
            const name =item.getAttribute("data-name")
            const quantity =parseInt(item.value)
            const price =parseInt(item.getAttribute("data-price"))
            if(quantity>0){
                arr.push({
                    name,
                    quantity,
                    price,
                    total: quantity*price
                })
            }
        }
        )
        localStorage.setItem("arr",JSON.stringify(arr))
        nav("/order")
    
    }
    return(
        <div>
    <nav className="nav-bar">
            <h1>Food Delivery</h1>
            <div className="nav1">
          <Link to="/">Home</Link>
                <Logout/>
            </div>
    </nav>
    <h1 style={{color: "orangered",padding: "50px"}}>Select items</h1>
    <div className="container-items">
        <div className="sub-cont-items">
            <div style={{display:"flex",alignItems:"center",gap:"30px"}}>
            <img src="assets/rotti.avif" alt=""/>
            <div>
            <h1>Roti</h1>
            <h6>Indian recipe</h6></div></div>
            <div style={{display:"flex",alignItems:"center",gap:"30px"}}>
            <p>30₹</p>
            <input type="number" min="0" defaultValue="0" data-name="Roti"data-price="30"/></div>
        </div>
        <div className="sub-cont-items">
            <div style={{display:"flex",alignItems:"center",gap:"30px"}}>
            <img src="assets/hotel6.avif" alt="i"/>
            <div>
            <h1>Idli</h1>
            <h6>Indian recipe</h6></div></div>
            <div style={{display:"flex",alignItems:"center",gap:"30px"}}>
            <p>20₹</p>
            <input type="number" min="0" defaultValue="0" data-name="Idli"data-price="20"/></div>
        </div>
        <div className="sub-cont-items">
            <div style={{display:"flex",alignItems:"center",gap:"30px"}}>
            <img src="assets/hotel7.avif" alt="i"/>
            <div>
            <h1>Dosa</h1>
            <h6>Indian recipe</h6></div></div>
            <div style={{display:"flex",alignItems:"center",gap:"30px"}}>
            <p>30₹</p>
            <input type="number" min="0" defaultValue="0" data-name="Dosa" data-price="30"/></div>
        </div>
        <div className="sub-cont-items">
            <div style={{display:"flex",alignItems:"center",gap:"30px"}}>
            <img src="assets/mutton-gravy.avif" alt="i"/>
            <div>
            <h1>Mutton-gravy</h1>
            <h6>Indian recipe</h6></div></div>
            <div style={{display:"flex",alignItems:"center",gap:"30px"}}>
            <p>240₹</p>
            <input type="number" min="0" defaultValue="0" data-name="Mutton-gravy"data-price="240"/></div>
        </div>
        <div className="sub-cont-items">
            <div style={{display:"flex",alignItems:"center",gap:"30px"}}>
            <img src="assets/parotta.avif" alt="i"/>
            <div>
            <h1>Parrotta</h1>
            <h6>Indian recipe</h6></div></div>
            <div style={{display:"flex",alignItems:"center",gap:"30px"}}>
            <p>40₹</p>
            <input type="number" min="3" defaultValue="0" data-name="parotta" data-price="40"/></div>
        </div>
    </div>
    <br/>
    <center><button className="buy_button" onClick={handle}>Proceed to Buy</button></center>
    
    <footer className="footer">
            <div className="social">
            <p style={{color:"white",paddingLeft:"20px"}}>Follow Us On</p>
            <img src="assets/icons/facebook.png" alt="i"/>
            <img src="assets/icons/linkedin.png" alt="i"/>
            <img src="assets/icons/social(1).png" alt="i"/>
            <img src="assets/icons/social.png" alt="i"/>
            </div>
        </footer>
    </div>
    );
}
export default Items;