import { removeComponent } from './session';
import { ROLE } from '../constants';

export const createSession = (roleId) => {
	const session = {
		logout() {
			Object.keys(session).forEach((key) => {
				delete session[key];
			});
		},
	};

	switch (roleId) {
		case ROLE.ADMIN: {
			session.removeComponent = removeComponent;
			break;
		}
		case ROLE.MODERATOR: {
			session.removeComponent = removeComponent;
			break;
		}
		case ROLE.READER: {
			break;
		}
		default:
	}
	return session;
};
