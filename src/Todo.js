import { useState } from 'react';

let todo = ['one', 'two', 'three'];

export default function Todo() {
	let [text, setText] = useState('');
	// console.log();
	return (
		<div className="div">
			<span>{todo.content}</span>
		</div>
	);
}
