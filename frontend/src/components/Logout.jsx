import { useState } from "react";
import toast from "react-hot-toast";

const Logout = () => {
  const [authUser, setAuthUser] = useState(false);

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout successful");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
