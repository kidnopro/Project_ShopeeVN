import { User } from "./user.type";
import { ReponseApi } from "./utils.type";

export type AuthReponse = ReponseApi<{
     access_token: string
     expires: string
     user: User
}>

const auth = AuthResponse = {
     
}