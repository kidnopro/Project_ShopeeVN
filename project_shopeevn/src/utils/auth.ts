import { User } from "../types/user.type";

export const setAccesTokenToLS = (access_token: string) => {
  localStorage.setItem("access_token", access_token);
};

export const clearLs = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

export const getAccessTokenFromLS = () =>
  localStorage.getItem("access_token") || "";

export const getProfilefromLS = () => {
  const result = localStorage.getItem("profile");
  return result ? JSON.parse(result) : null;
};

export const setProfileToLs = (profile: User) => {
  localStorage.setItem("profile", JSON.stringify(profile));
};
