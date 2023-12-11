export function getUsers() {
	if (process.env.NODE_ENV === "development") {
		return fetch("/mockup.json");
	} else {
		return fetch(`https://api.github.com/orgs/lemoncode/members`);
	}
}
