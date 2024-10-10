import { RegisterOptions, UseFormGetValues } from "react-hook-form";
import * as yup from 'yup'


type Rules = {
  [key in "email" | "password" | "confirm_password"]?: RegisterOptions;
};

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: "Vui lòng nhập email!",
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Email không đúng định dạng!",
    },
    minLength: {
      value: 5,
      message: "Độ dài nhỏ nhất là 5 kí tự!",
    },
    maxLength: {
      value: 160,
      message: "Độ dài lớn nhất là 160 kí tự!",
    },
  },
  // Password
  password: {
    required: {
      value: true,
      message: "Vui lòng nhập mật khẩu!",
    },
    minLength: {
      value: 6,
      message: "Mật khẩu ngắn nhất là 6 kí tự!",
    },
    maxLength: {
      value: 160,
      message: "Mật khẩu dài nhất là 160 kí tự!",
    },
  },
  // Confirm_password
  confirm_password: {
    required: {
      value: true,
      message: "Vui lòng nhập lại mật khẩu!",
    },
    minLength: {
      value: 6,
      message: "Mật khẩu ngắn nhất là 6 kí tự!",
    },
    maxLength: {
      value: 160,
      message: "Mật khẩu dài nhất là 160 kí tự!",
    },
    validate:
      typeof getValues === "function"
        ? (value) => value === getValues("password") || "Mật khẩu không khớp!"
        : undefined,
  },
});

export const schema = yup.object({
      email: yup
      .string()
      .required('Vui lòng nhập email!')
      .email('Email không đúng định dạng!')
      .min(5,'Độ dài nhỏ nhất là 5 kí tự!')
      .max(160,'Độ dài lớn nhất là 5 kí tự!'),
      password: yup
      .string()
      .required('Vui lòng nhập mật khẩu!')
      .min(6,'Mật khẩu ngắn nhất là 6 kí tự!')
      .max(160, 'Mật khẩu dài nhất là 160 kí tự!'),
      confirm_password: yup
      .string()
      .required('Vui lòng nhập lại mật khẩu!')
      .min(6,'Mật khẩu ngắn nhất là 6 kí tự!')
      .max(160, 'Mật khẩu dài nhất là 160 kí tự!')
      .oneOf([yup.ref('password')], 'Mật khẩu không khớp!')
})

export type Schema = yup.InferType<typeof schema>
