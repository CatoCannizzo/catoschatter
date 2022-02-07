export default function Message(props) {
	return (
		<div>
			<div className="name">{props.msgUser}</div>
			<div className="message">{props.msgText}</div>
		</div>
	);
}
