import { RegisterOptions } from "react-hook-form";

type Rules = {
  [key in "email" | "password" | "confirm_password"]?: RegisterOptions;
};

export const rules: Rules = {
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
      message: "Mật khẩu dài nhất là 160 kí tư!",
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
      message: "Mật khẩu dài nhất là 160 kí tư!",
    },
  },
};
