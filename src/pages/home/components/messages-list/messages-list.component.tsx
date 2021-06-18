import React from 'react';
import './messages-list.css';

const MessagesList: React.FC = () => {
	return (
		<div className='messages-list-wrapper'>
			<div className='messages-list-container'>
				{Array.from({length: 80}).map(() => (
					<div className='message-item'>
						<p>samuelo:</p>
						<span>não é uma mensagem</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default MessagesList;
