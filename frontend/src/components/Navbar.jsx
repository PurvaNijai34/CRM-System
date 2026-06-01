import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between">
      <Link to="/" className="font-bold text-xl">
        Support CRM
      </Link>

      <Link
        to="/create-ticket"
        className="bg-blue-600 px-4 py-2 rounded"
      >
        Create Ticket
      </Link>
    </nav>
  );
};

export default Navbar;