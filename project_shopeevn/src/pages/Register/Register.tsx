import { Link, useNavigate } from "react-router-dom";
import Background from "../../assets/img/bg_login_register.jpg";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { schema } from "../../utils/rules";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import authApi from "../../apis/auth.api";
import { Schema } from "yup";
import { omit } from "lodash";
import { isAxiosUnprocessableEntityError } from "../../utils/utils";
import { ErrorResponse } from "../../types/utils.type";
import { useContext } from "react";
import { AppContext } from "../../contexts/app.context";
import Button from "../../components/Button";
type FormData = Schema;

export default function Register() {
  const { setIsAuthenticated, setProfile } = useContext(AppContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, "confirm_password">) =>
      authApi.registerAccount(body),
  });

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ["confirm_password"]);
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        setIsAuthenticated(true);
        setProfile(data.data.data.user);
        navigate("/");
      },
      onError: (error) => {
        if (
          isAxiosUnprocessableEntityError<
            ErrorResponse<Omit<FormData, "confirm_password">>
          >(error)
        ) {
          const formError = error.response?.data.data;
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<FormData, "confirm_password">, {
                message:
                  formError[key as keyof Omit<FormData, "confirm_password">],
                type: "Server",
              });
            });
          }
        }
      },
    });
  });

  // console.log("Lỗi ở đây này cụ", errors);

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
              noValidate
            >
              <div className="text-2xl">Đăng Ký</div>
              <Input
                name="email"
                register={register}
                type="email"
                className="mt-8"
                errorMessage={errors.email?.message}
                placeholder="Email"
              />
              {/* Kết thúc input */}
              <Input
                name="password"
                register={register}
                type="password"
                className="mt-4"
                errorMessage={errors.password?.message}
                placeholder="Mật khẩu"
              />
              {/* Kết thúc input */}
              <Input
                name="confirm_password"
                register={register}
                type="password"
                className="mt-4"
                errorMessage={errors.confirm_password?.message}
                placeholder="Nhập lại mật khẩu"
              />
              {/* Nút button */}
              <div className="mt-4">
                <Button
                  className="flex w-full items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600"
                  isLoading={registerAccountMutation.isLoading}
                  disabled={registerAccountMutation.isLoading}
                >
                  Đăng ký
                </Button>
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
