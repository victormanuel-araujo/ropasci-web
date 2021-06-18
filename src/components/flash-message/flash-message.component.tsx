import React, {useState, useEffect} from 'react';
import {FlashMessage} from './flash-message-queue';
import {
	FlashMessageOptions,
	ShowMessageCallback,
} from './flash-message.interface';
import './flash-message.css';

const FlashMessageComponent: React.FC = () => {
	const [currentMessage, setCurrentMessage] =
		useState<FlashMessageOptions>(null);

	const [showMessage, setShowMessage] = useState<boolean>(false);

	const onCloseMessage = async () => {
		return new Promise<void>((resolve) => setTimeout(() => resolve(), 500));
	};

	const onShowMessage: ShowMessageCallback = (value) => {
		return new Promise(async (resolve) => {
			setCurrentMessage(value);
			setShowMessage(true);

			setTimeout(async () => {
				setShowMessage(false);
				await onCloseMessage();
				setCurrentMessage(null);
				resolve();
			}, 3_000);
		});
	};

	useEffect(() => {
		FlashMessage.onShowMessage = onShowMessage;
	});

	return (
		<div className='flash-message-wrapper'>
			<div
				className={`${currentMessage?.type || 'default'} ${
					!!showMessage ? 'showing' : ''
				}`}
			>
				<span>{currentMessage?.message}</span>
			</div>
		</div>
	);
};

export default FlashMessageComponent;
