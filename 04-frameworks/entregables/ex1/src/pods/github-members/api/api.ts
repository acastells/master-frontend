import { Member } from "./api.model";

export function getUsers(orgName: string, perPage: number, page: number): Promise<Member[]> {
	const url = `https://api.github.com/orgs/${orgName}/members?per_page=${perPage}&page=${page}`;
	return fetch(url).then((response) => (response.status === 200 ? response.json() : []));
}
