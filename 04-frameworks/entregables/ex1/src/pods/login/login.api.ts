import { AuthInfo } from "./login.vm";

export const authenticate = (authInfo: AuthInfo): boolean => {
	return authInfo.username === "admin" && authInfo.password === "test";
};
