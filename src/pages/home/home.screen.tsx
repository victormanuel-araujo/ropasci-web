import React from 'react';
import UpdateUser from './components/update-user/update-user.component';
import MessagesList from './components/messages-list/messages-list.component';
import MessageInput from './components/message-input/message-input.component';
import './home.css';

const HomeScreen: React.FC = () => {
	return (
		<div className='home-screen-wrapper'>
			<div>
				<div />
			</div>

			<aside className='chat-wrapper'>
				<UpdateUser />

				<MessagesList />

				<MessageInput />
			</aside>
		</div>
	);
};

export default HomeScreen;
