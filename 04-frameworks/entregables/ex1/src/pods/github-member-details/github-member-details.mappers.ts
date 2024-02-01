import { MemberEntity } from "../github-members/github-members.vm";
import * as am from "./api/api.model";

export const mapMemberToVM = (data: am.Member): MemberEntity => {
	return {
		id: data.id.toString(),
		login: data.login,
		avatar_url: data.avatar_url,
	}
}