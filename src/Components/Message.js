export default function Message(props) {
	if (props.noName) {
		return (
			<div className="messageRow">
				<div>
					<div className="name">null</div>
					<div className="message">{props.text}</div>
				</div>
			</div>
		);
	} else {
		let formDay = new Date(props.time);
		console.log(formDay.toLocaleDateString());
		return (
			<div
				className="messageRow"
				style={{ flexDirection: props.fromMe ? "row-reverse" : "row" }}>
				<div>
					<div className="name">{props.user}</div>
					<div className="message">{props.text}</div>
					<div className="time">{formDay.toLocaleDateString()}</div>
				</div>
			</div>
		);
	}
}
