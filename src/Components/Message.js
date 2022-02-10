export default function Message(props) {
	return (
		<div
			className="messageRow"
			style={{ flexDirection: props.fromMe ? "row-reverse" : "row" }}>
			<div>
				<div className="name">{props.user}</div>
				<div className="message">{props.text}</div>
			</div>
		</div>
	);
}
