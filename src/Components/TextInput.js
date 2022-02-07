import "./TextInput.css";
import { useState } from "react";
import { FiSend, FiCamera } from "react-icons/fi";

function TextInput(props) {
	const [text, setText] = useState(""); //initalizes variable (text) and function (setText) variable = whats in useState
	//useState automatically updates everything through react magic

	function send() {
		//creates a new message object
		const newMessage = {
			msgText: text,
			msgTime: Date.now(),
			msgUser: props.name,
		};
		props.sendMessage(newMessage);
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
			<button
				className="camera"
				onClick={props.showCamera}
				style={{ left: 10, right: "auto" }}>
				<FiCamera style={{ height: 15, width: 15 }} />
			</button>
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
