import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navClass =
    "px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition";

  return (
    <nav className="flex justify-between items-center bg-white border-b px-6 py-3 shadow-md">
      <Link to="/" className="text-xl font-bold text-blue-600">
        TaskFlow
      </Link>
      <div className="flex gap-4">
        <NavLink to="/" className={navClass}>
          Home
        </NavLink>
        <NavLink to="/tasks" className={navClass}>
          Tasks
        </NavLink>
        <NavLink to="/calendar" className={navClass}>
          Calendar
        </NavLink>
        <NavLink to="/charts" className={navClass}>
          Charts
        </NavLink>
      </div>
      <button className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Sing In
      </button>
    </nav>
  );
};

export default Navbar;
