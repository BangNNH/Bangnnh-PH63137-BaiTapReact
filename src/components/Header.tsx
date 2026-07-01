import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <nav className="bg-blue-600 text-white shadow">
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="#" className="text-xl font-semibold">
                        <strong>WEB2091 App</strong>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="hover:text-gray-200">
                            Trang chủ
                        </Link>
                        <Link to="/dashboard" className="hover:text-gray-200">
                            Dashboard
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="#" className="hover:text-gray-200">
                            Đăng nhập
                        </Link>
                        <Link to="#" className="hover:text-gray-200">
                            Đăng ký
                        </Link>
                    </div>
                </div>
            </nav>

            <Toaster />
        </>
    );
}

export default Header;
