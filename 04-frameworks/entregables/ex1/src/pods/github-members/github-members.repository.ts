import { getUsers } from "./api/api";
import { mapMemberListToVM } from "./github-members.mappers";
import { MemberEntity } from "./github-members.vm";

export const getMembers = (orgName, perPage, page): Promise<MemberEntity[]> => {
  return getUsers(orgName, perPage, page).then(mapMemberListToVM);
};