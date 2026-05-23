import { Link, NavLink } from 'react-router';
import logo from '/logo/logo.svg'
import './navbar.css'
import { IoLogoGithub } from 'react-icons/io';

const Navbar = () => {
  return (
    <nav className="bg-base-100 border-b border-[#E9E9E9]">
      <div className="navbar max-w-360 mx-auto px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/apps">Apps</NavLink>
              </li>
              <li>
                <NavLink to="/installation">Installation</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8">
            <li>
              <NavLink
                className="px-0 text-base rounded-none py-0.5 bg-base-100"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="px-0 text-base rounded-none py-0.5 bg-base-100"
                to="/apps"
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                className="px-0 text-base rounded-none py-0.5 bg-base-100"
                to="/installed-apps"
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-linear-to-r from-primary to-secondary text-base-100">
            <IoLogoGithub className="w-5 h-5" /> Contribute
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;