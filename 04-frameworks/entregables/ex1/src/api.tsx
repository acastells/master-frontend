export function getUsers(orgName: string) {
	return fetch(`https://api.github.com/orgs/${orgName}/members`);
}

export function getUsersLocal() {
	return fetch("./mockup.json"); // to return a local mockup json of lemoncode users
}
