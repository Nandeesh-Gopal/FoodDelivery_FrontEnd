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
        <a onClick={handle}>logout</a>
    )
}
export default Logout;