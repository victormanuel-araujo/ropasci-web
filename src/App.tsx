import React from 'react';
import FlashMessageComponent from './components/flash-message/flash-message.component';
import HomeScreen from './pages/home/home.screen';
import {UserProvider} from './contexts/user.context';
import './App.css';

function App() {
	return (
		<UserProvider>
			<main>
				<HomeScreen />

				<FlashMessageComponent />
			</main>
		</UserProvider>
	);
}

export default App;
