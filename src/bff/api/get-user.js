import { transformUser } from '../transformers';

export const getUser = async (loginToFond) =>
	fetch(`http://localhost:3005/users/?login=${loginToFond}`)
		.then((loadedUser) => loadedUser.json())
		.then(([loadedUser]) => loadedUser && transformUser(loadedUser));
