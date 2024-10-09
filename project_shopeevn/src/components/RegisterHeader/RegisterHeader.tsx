import { Link } from "react-router-dom";
import logo from "../../assets/img/logoshopee.svg";

export default function RegisterHeader() {
  return (
    <header className="py-5 h-24 bg-white-400">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4">
        <nav className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-8 lg:h-11 mb-4" alt="Logo Shopee" />
          </Link>

          <div className="ml-5 text-xl lg:text-2xl flex items-center h-full">
            {/* cmt tạm */}
          </div>
        </nav>

        <Link to="/login" className="text-orange-500 flex items-center">
          Bạn cần giúp đỡ?
        </Link>
      </div>
    </header>
  );
}
