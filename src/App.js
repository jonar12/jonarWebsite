import './components/About.js';
import './App.css';
import { Navigation } from './components/Navigation';

function App() {
	return (
		<div className="App">
			<Navigation
				links={[
					{
						title: 'About me',
						href: ' ',
					},
					{
						title: 'Contact',
						href: ' ',
					},
					{
						title: 'Projects',
						href: ' ',
					},
					{
						title: 'Skills',
						href: ' ',
					},
				]}
			/>
		</div>
	);
}

export default App;
