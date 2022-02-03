import "./TextInput.css";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { FiCamera } from "react-snap-pic";

function TextInput(props) {
	const [text, setText] = useState(""); //initalizes variable (text) and function (setText) variable = whats in useState
	//useState automatically updates everything through react magic

	function send() {
		props.sendMessage(text);
		setText("");
	}
	function onKeyPress(e) {
		console.log(e);
		if (e.key === "Enter") {
			send();
		}
	}

	return (
		<footer className="footer">
			<input // notice this is ALL in the input <>
				className="text-input"
				value={text} // sets value to a variable =>text
				onChange={(e) => setText(e.target.value)} //in curly is function calls setText, e.target.value is what user inputs
				onKeyPress={onKeyPress}
			/>
			<button className="send" onClick={send}>
				<FiSend />
			</button>
		</footer>
	);
}

export default TextInput;
