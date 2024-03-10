import { getUsers } from './get-users';
export const user = async (loginToFond) => {
	const users = await getUsers();
	return users.find(({ login }) => login === loginToFond);
};
