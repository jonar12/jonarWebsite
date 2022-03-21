// import me from './me.jpg';
import './components/About.js';
import './App.css';
import Navbar from './components/Navbar.js';
import Todo from './Todo';

function App() {
	return (
		<div className="App">
			<Navbar name="Jonathan Arredondo"></Navbar>
			<div className="background">
				<nav>
					<div></div>
				</nav>
				<header className="App-header">
					<img src={me} className="App-logo" alt="me" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Jonathan Arredondo
					</a>
				</header>
				<div className="todo-section">{Todo}</div>
			</div>
		</div>
	);
}

export default App;
