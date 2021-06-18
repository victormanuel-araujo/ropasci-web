import React, {useState} from 'react';
import {FlashMessage} from '../../../../components/flash-message/flash-message-queue';
import {FlashMessageTypes} from '../../../../components/flash-message/flash-message.interface';
import {useUserContext} from '../../../../contexts/user.context';

const MessageInput: React.FC = () => {
	const [message, setMessage] = useState<string>('');
	const {username} = useUserContext();

	const onSendMessage = () => {
		if (!username) {
			FlashMessage.showMessage(
				'Defina seu nome de usuário antes de enviar uma mensagem',
				{type: FlashMessageTypes.ERROR}
			);
			return;
		}
	};

	const onSubmitMessage = (e) => {
		e.preventDefault();
	};

	return (
		<form className='chat-input' onSubmit={onSubmitMessage}>
			<input
				type='text'
				value={message}
				name='message-text'
				onChange={({target}) => setMessage(target.value)}
			/>
			<button onClick={onSendMessage}>Enviar</button>
		</form>
	);
};

export default MessageInput;
