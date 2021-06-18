import React, {createContext, useReducer, useContext} from 'react';
import {
	UseContextDispatch,
	UseContextState,
	UserContextActionNames,
	UserContextValues,
} from './types/user.interface';

const UserContext = createContext<UserContextValues>(null);

const INITIAL_VALUE: UseContextState = {
	username: null,
};

function userReducer(state: UseContextState, action) {
	switch (action.type) {
		case UserContextActionNames.SET_USERNAME:
			return {...state, username: action.payload};
		default:
			return state;
	}
}

export const UserProvider: React.FC = (props) => {
	const [state, dispatch] = useReducer(userReducer, INITIAL_VALUE);

	return (
		<UserContext.Provider
			value={[state, (type, payload) => dispatch({type, payload})]}
		>
			{props.children}
		</UserContext.Provider>
	);
};

export const useUserContext = (): UseContextState & {
	dispatch: UseContextDispatch;
} => {
	const [state, dispatch] = useContext(UserContext);
	return {...state, dispatch};
};
