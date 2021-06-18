import React from 'react';
import {useState} from 'react';
import {FlashMessage} from '../../../../components/flash-message/flash-message-queue';
import {FlashMessageTypes} from '../../../../components/flash-message/flash-message.interface';
import {UserContextActionNames} from '../../../../contexts/types/user.interface';
import {useUserContext} from '../../../../contexts/user.context';

// import { Container } from './styles';

const UpdateUser: React.FC = () => {
	const [username, setUsername] = useState<string>('');
	const {dispatch} = useUserContext();

	const changeUsername = () => {
		FlashMessage.showMessage(`Seu nome agora é ${username}`, {
			type: FlashMessageTypes.SUCCESS,
		});
	};

	const onSubmitUsername = (e) => {
		e.preventDefault();
		dispatch(UserContextActionNames.SET_USERNAME, {username});
	};

	return (
		<form className='username-input' onSubmit={onSubmitUsername}>
			<input
				type='text'
				name='username'
				value={username}
				autoComplete='none'
				onChange={({target}) => setUsername(target.value)}
			/>
			<button onClick={changeUsername}>Alterar</button>
		</form>
	);
};

export default UpdateUser;
