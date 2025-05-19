import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <span
        onClick={() => navigate('/dashboard')}
        className="text-2xl font-semibold tracking-wide cursor-pointer"
      >
        Project Manager
      </span>
      <button
        onClick={handleLogout}
        className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition duration-200"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
