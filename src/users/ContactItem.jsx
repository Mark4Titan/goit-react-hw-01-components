function ContactList(props) {
	let label = props.label ? props.label : '-'
	let quantity = props.quantity ? props.quantity : '-'

	if (label && quantity)
		return (
			<li>
				<span className="label">{label}</span>
				<span className="quantity">{quantity}</span>
			</li>
		)
}

export default ContactList
