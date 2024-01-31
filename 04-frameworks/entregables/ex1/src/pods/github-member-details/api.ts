export function getUser(id: string) {
	return fetch(`https://api.github.com/users/${id}`);
}