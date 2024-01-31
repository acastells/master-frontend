import React from "react";
import { useNavigate } from "react-router-dom";
import { authenticate } from "./login.api";
import { LoginComponent } from "./login.component";
import { AuthInfo } from "./login.vm";

export const LoginContainer = () => {
	const navigate = useNavigate();
	const [authInfo, setAuthInfo] = React.useState<AuthInfo>({
		username: "",
		password: "",
	});

	const attempAuthTo = (path: string) => {
		if (authenticate(authInfo)) {
			navigate(path);
		} else {
			alert("User or password not valid. Try with: admin / test");
		}
	};

	return (
		<LoginComponent authInfo={authInfo} setAuthInfo={setAuthInfo} attempAuthTo={attempAuthTo} />
	);
};
