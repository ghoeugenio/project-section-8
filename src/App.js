import React, {useState} from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (userName, userAge) => {
		setUsersList((prevUsersList) => {
			return [
				...prevUsersList,
				{
					id: Math.random().toString(),
					name: userName,
					age: userAge,
				},
			];
		});
		console.log(usersList);
	};

	return (
		<div>
			<AddUser onAddUsers={addUserHandler} />
			<UsersList users={usersList} />
		</div>
	);
}

export default App;
