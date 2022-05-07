import { Link, Outlet } from "react-router-dom";
import { ReactComponent as BlogLogo } from "../logo.svg";

const Navbar = () => {
  return (
    <>
      <header className="flex items-center justify-between bg-black text-white p-5">
        <div className="logo">
          <Link to="/">
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
              Valentine's Blog
            </h2>
          </Link>
        </div>

        <nav>
          <ul className="flex">
            <li className="mr-5 lg:text-lg">
              <button>
                <Link to="/">Home</Link>
              </button>
            </li>
            <li className="lg:text-lg">
              <button>
                <Link to="/blog">Blog</Link>
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Navbar;
