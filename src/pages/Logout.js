import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");  
    navigate("/login");
  };

  return (
    <p onClick={handleLogout}>
      Logout
    </p>
  );
}

export default Logout;
