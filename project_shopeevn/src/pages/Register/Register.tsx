import { Link } from "react-router-dom";
import Background from "../../assets/img/bg_login_register.jpg";
export default function Register() {
  return (
    <div
      className="bg-fit bg-center h-screen"
      style={{ backgroundImage: `url(${Background})`, height: "700px" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10">
          <div className="lg:col-span-2 lg:col-start-4">
            <form className="p-10 rounded bg-white shadow-sm">
              <div className="text-2xl">Đăng Ký</div>
              <div className="mt-8">
                <input
                  type="text"
                  name="email"
                  className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
                  placeholder="Email"
                />
              </div>
              <div className="mt-2 text-red-600 min-h-[1rem].text0-sm">
                {/* Lỗi */}
              </div>
              {/* Kết thúc input */}
              <div className="mt-4">
                <input
                  type="password"
                  name="password"
                  className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
                  placeholder="Mật Khẩu"
                />
              </div>
              <div className="mt-2 text-red-600 min-h-[1rem].text0-sm">
                {/* Lỗi */}
              </div>
              {/* Kết thúc input */}
              <div className="mt-4">
                <input
                  type="password"
                  name="confirm_password"
                  className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
                  placeholder="Nhập Lại Mật Khẩu"
                />
              </div>
              <div className="mt-2 text-red-600 min-h-[1rem].text0-sm">
                {/* Lỗi */}
              </div>
              {/* Nút button */}
              <div className="mt-4">
                <button className="w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600">
                  đăng ký
                </button>
              </div>
              <div className="mt-4 flex bg-center justify-center">
                <p className="text-gray-400">Bạn đã có tài khoản?</p>
                <Link
                  to={"/login"}
                  className="ml-2 text-red-500 hover:text-red-600 "
                >
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
