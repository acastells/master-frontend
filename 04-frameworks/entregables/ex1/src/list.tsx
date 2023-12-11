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
	const [orgFilter, setOrgFilter] = React.useState<string>("lemoncode");

	React.useEffect(() => {
		handleFilter();
	}, []);

	const handleButtonClick = () => {
		handleFilter();
	};

	const handleFilter = () => {
		getUsers(orgFilter)
			.then((response) =>
				response.status === 200 ? response.json() : []
			)
			.then((json) => setMembers(json))
			.catch((e) => {
				console.error(e);
				setMembers([]);
			});
	};

	return (
		<>
			<h2>Lemoncode users</h2>
			<input
				onChange={(event) => setOrgFilter(event.target.value)}
				value={orgFilter}
			/>
			<button onClick={handleButtonClick}>Filtrar</button>
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
