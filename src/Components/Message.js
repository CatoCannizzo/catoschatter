export default function Message(props) {
	return (
		<div>
			<div className="userTag">{props.name}</div>
			<div className="message">{props.text}</div>
		</div>
	);
}
