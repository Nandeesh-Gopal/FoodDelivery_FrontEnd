function Logout(){
    const handle= async ()=>{
        try{
            const res =await fetch("http://localhost:5000/logout",{
                method:"POST",
                credentials:"include"
            })
            if(res.ok){
                window.location.href="/login"
            }
        }
        catch(err){
            alert("logout failed")
        }
    }
    return(
        <button onClick={handle}>logout</button>
    )
}
export default Logout;