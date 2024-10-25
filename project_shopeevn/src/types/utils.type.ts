import { NonUndefined } from "react-hook-form";

export interface SuccessReponse<Data> {
  message: string;
  data: Data;
}

export interface ErrorResponse<Data> {
  message: string;
  data?: Data;
}

export type NoUnderfinedField<T> = {
  [P in keyof T]-?: NoUnderfinedField<NonUndefined<T[P]>>;
};
// cái -? nó sẽ loại bỏ un đì phai của key optinal
