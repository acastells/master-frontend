import React from "react";
import { Link } from "react-router-dom";
import { getUsers } from "./api";

interface MemberEntity {
	id: string;
	login: string;
	avatar_url: string;
}

export const ListPage: React.FC = () => {
	const [members, setMembers] = React.useState<MemberEntity[]>([]);

	React.useEffect(() => {
		getUsers()
			.then((response) => response.json())
			.then((json) => setMembers(json));
	}, []);

	return (
		<>
			<h2>Lemoncode users</h2>
			<div className="list-user-list-container">
				<span className="list-header">Avatar</span>
				<span className="list-header">Id</span>
				<span className="list-header">Name</span>
				{members.map((member) => (
					<React.Fragment key={member.id}>
						<img src={member.avatar_url} />
						<span>{member.id}</span>
						<Link to={`/detail/${member.login}`}>
							{member.login}
						</Link>
					</React.Fragment>
				))}
			</div>
			<Link to="/detail">Navigate to detail page</Link>
		</>
	);
};
