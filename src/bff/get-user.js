import { getUsers } from './get-users';
export const getUser = async (loginToFond) => {
	const users = await getUsers();
	return users.find(({ login }) => login === loginToFond);
};
