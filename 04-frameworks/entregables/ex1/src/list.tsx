import React from "react";
import { Link } from "react-router-dom";
import { getUsers } from "./api";
import { FilterContext } from "./contexts";

interface MemberEntity {
	id: string;
	login: string;
	avatar_url: string;
}

export const ListPage: React.FC = () => {
	const [members, setMembers] = React.useState<MemberEntity[]>([]);
	const { orgName, setOrgName } = React.useContext(FilterContext);
	const { perPage, setPerPage } = React.useContext(FilterContext);
	const { page, setPage } = React.useContext(FilterContext);

	React.useEffect(() => {
		handleFilter();
	}, []);

	const handleButtonClick = (event) => {
		event.preventDefault();
		handleFilter();
	};

	const handleFilter = () => {
		getUsers(orgName, perPage, page)
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
			<form onSubmit={handleButtonClick}>
				<span>Organization Name</span>
				<input
					onChange={(event) => setOrgName(event.target.value)}
					value={orgName}
				/>
				<br></br>
				<span>Per Page</span>
				<input
					onChange={(event) => setPerPage(Number(event.target.value))}
					value={perPage}
				/>
				<br></br>
				<span>Page</span>
				<input
					onChange={(event) => setPage(Number(event.target.value))}
					value={page}
				/>
				<br></br>
				<button onClick={handleButtonClick}>Filtrar</button>
			</form>

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
