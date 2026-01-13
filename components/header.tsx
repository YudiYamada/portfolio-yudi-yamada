import Link from "next/link";

import Navbar from "./navbar";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div>
        <Link
          href="/"
          className="hover:text-primary text-3xl font-bold transition duration-700 hover:cursor-pointer lg:text-5xl"
        >
          &lt;Yudi /&gt;
        </Link>
      </div>

      <div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
