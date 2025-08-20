import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // remove token from localStorage
    localStorage.removeItem("token");  

    // (optional) clear other user data
    // localStorage.removeItem("user");

    // redirect to login page
    navigate("/login");
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
