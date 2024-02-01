import { Member } from "./api.model";

export function getMember(id: string): Promise<Member> {
	const url = `https://api.github.com/users/${id}`
	return fetch(url).then((response) => (response.status === 200 ? response.json() : null));
}
