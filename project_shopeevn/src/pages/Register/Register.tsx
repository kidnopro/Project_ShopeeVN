import { Link } from "react-router-dom";
import Background from "../../assets/img/bg_login_register.jpg";
import { useForm } from "react-hook-form";
import { rules } from "../../utils/rules";

interface FormData {
  email: string;
  password: string;
  confirm_password: string;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  console.log("Lỗi ở đây này cụ", errors);

  return (
    <div
      className="bg-fit bg-center h-screen"
      style={{ backgroundImage: `url(${Background})`, height: "700px" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10">
          <div className="lg:col-span-2 lg:col-start-4">
            <form
              className="p-10 rounded bg-white shadow-sm"
              onSubmit={onSubmit}
            >
              <div className="text-2xl">Đăng Ký</div>
              <div className="mt-8">
                <input
                  type="email"
                  className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
                  placeholder="Email"
                  {...register("email", rules.email)}
                />
              </div>
              <div className="mt-2 text-red-600 min-h-[1.25rem].text0-sm">
                {errors.email?.message}
              </div>
              {/* Kết thúc input */}
              <div className="mt-4">
                <input
                  type="password"
                  className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
                  placeholder="Mật Khẩu"
                  {...register("password", rules.password)}
                />
              </div>
              <div className="mt-2 text-red-600 min-h-[1.25rem].text0-sm">
                {errors.password?.message}
              </div>
              {/* Kết thúc input */}
              <div className="mt-4">
                <input
                  type="password"
                  className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
                  placeholder="Nhập Lại Mật Khẩu"
                  {...register("confirm_password", rules.confirm_password)}
                />
              </div>
              <div className="mt-2 text-red-600 min-h-[1.25rem].text0-sm">
                {errors.confirm_password?.message}
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
