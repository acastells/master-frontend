import { FC, useEffect, useState } from "react";
import config from "./config";

export const HelloComponent: FC = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const id = setInterval(() => {
			setCount((prevCount) => prevCount + 1);
		}, 1_000);
		return () => clearInterval(id);
	}, []);

	return <div>
		<h2>Hello from React {count} </h2>
		<span>aa</span>
		<p>API_BASE: {config.API_BASE}</p>
		<p>ENABLE_FEATURE_A: {config.ENABLE_FEATURE_A.toString()}</p>
	</div>
		;
};