import {getMember as getMemberApi} from "./api/api"
import { mapMemberToVM } from "./github-member-details.mappers"

export const getMember = (id:string) => {
	return getMemberApi(id).then(mapMemberToVM)
}