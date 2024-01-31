export function getMember(id: string) {
	return fetch(`https://api.github.com/users/${id}`);
}
