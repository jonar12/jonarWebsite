import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div>
				<div>
					<h1 className="my-name">{this.props.name}</h1>
				</div>
				<div>
					<ul>
						<li>Who am I?</li>
						<li>Contact info.</li>
						<li>Projects</li>
						<li>Skills</li>
						<li>Hobbies</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Navbar;
