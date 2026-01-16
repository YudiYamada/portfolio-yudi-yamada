import { Link } from "@/i18n/navigation";
import Navbar from "./navbar";
import LanguageToggleButton from "./language-toggle-button";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div>
        <Link
          href="/"
          className="hover:text-primary text-5xl font-bold transition duration-700 hover:cursor-pointer lg:text-3xl"
        >
          &lt;Yudi /&gt;
        </Link>
      </div>

      <div>
        <Navbar />
      </div>

      <div className="hidden lg:block">
        <LanguageToggleButton />
      </div>
    </header>
  );
};

export default Header;
