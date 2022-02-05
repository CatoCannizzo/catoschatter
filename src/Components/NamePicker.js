import { useState } from "react";
import { FiEdit3, FiUserCheck } from "react-icons/fi";
import "./NamePicker.css";

function NamePicker(props) {
	const [editName, setEditName] = useState(true);
	const [name, setName] = useState("");

	function enterName() {
		if (!name.trim()) return;
		setEditName(false);
		setName(name);
	}
	function changeName() {
		setEditName(true);
		setName("");
	}

	if (editName) {
		return (
			<div className="nameholder">
				<input
					className="name-input"
					maxLength={25}
					placeholder="input name"
					value={name} // sets value to current name
					onChange={(e) => setName(e.target.value)} //in curly is function calls setText, e.target.value is what user inputs
				/>
				<button className="editButton" onClick={enterName}>
					<FiUserCheck />
				</button>
			</div>
		);
	} else {
		return (
			<div className="nameholder">
				{"Current User: "}
				{name}
				<button className="submitName" onClick={changeName}>
					<FiEdit3 />
				</button>
			</div>
		);
	}
}
export default NamePicker;
