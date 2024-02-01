import * as am from "./api/api.model";
import { MemberEntity } from "./github-members.vm";

export const mapMemberListToVM = (data: am.Member[]): MemberEntity[] =>
	data.map((item) => mapMemberToVM(item));

const mapMemberToVM = (data: am.Member): MemberEntity => ({
	id: data.id.toString(),
	login: data.login,
	avatar_url: data.avatar_url,
});
