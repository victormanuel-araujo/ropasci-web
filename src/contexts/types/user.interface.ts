export enum UserContextActionNames {
	SET_USERNAME = 'SET_USERNAME',
}

interface UserContextActionPayload {
	[UserContextActionNames.SET_USERNAME]: string;
}

export interface UseContextAction {
	type: UserContextActionNames;
	payload: UserContextActionPayload[UserContextActionNames];
}

export interface UseContextState {
	username: string;
}

export type UseContextDispatch<T extends UserContextActionNames = any> = (
	type: T,
	payload: UserContextActionPayload[T]
) => void;

export type UserContextValues = [UseContextState, UseContextDispatch];
