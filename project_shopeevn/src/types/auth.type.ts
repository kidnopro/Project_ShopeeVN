import { User } from "./user.type";
import { SuccessReponse } from "./utils.type";

export type AuthReponse = SuccessReponse<{
  access_token: string;
  expires: string;
  user: User;
}>;
