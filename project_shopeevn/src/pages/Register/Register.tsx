import { ErrorResponse, Link } from "react-router-dom";
import Background from "../../assets/img/bg_login_register.jpg";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { schema } from "../../utils/rules";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { registerAccount } from "../../apis/auth.api";
import { Schema } from "yup";
import { omit } from "lodash";
import { isAxiosUnprocessableEntityError } from "../../utils/utils";


type FormData = Schema

export default function Register() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => registerAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    const body = omit(data,['confirm_password'])
    registerAccountMutation.mutate(body,{
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ResponseApi<Omit<FormData, 'confirm_password'>>>(error)) {
         const formError = error.response?.data.data
        if(formError) {
          Object.keys(formError).forEach(key => {
            setError(key as  keyof Omit<FormData,'confirm_password'>, {
              message: formError[key as keyof Omit<FormData,'confirm_password'>],
              type: 'Server'
            })
          })
        }
        }
      }
    })
  })

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
                name = 'email'
                register={register}
                type = 'email'
                className="mt-8"
                errorMessage= {errors.email?.message}
                placeholder="Email"
               
                />
              {/* Kết thúc input */}
              <Input
                name = 'password'
                register={register}
                type = 'password'
                className="mt-4"
                errorMessage= {errors.password?.message}
                placeholder="Mật khẩu"
                
                />
              {/* Kết thúc input */}
              <Input
                name = 'confirm_password'
                register={register}
                type = 'password'
                className="mt-4"
                errorMessage= {errors.confirm_password?.message}
                placeholder="Nhập lại mật khẩu"
               
                />
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
