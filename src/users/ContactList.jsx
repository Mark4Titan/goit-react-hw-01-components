import ContactItem from './ContactItem.jsx'

function ContactList({ followers, views, likes }) {
	return (
		<ul className="stats">
			<ContactItem label="Followers" quantity={followers} />
			<ContactItem label="Views" quantity={views} />
			<ContactItem label="likes" quantity={likes} />
		</ul>
	)
}

ContactList.defaultProps = {
	followers: 1000,
	views: 2000,
	likes: 3000,
}

export default ContactList
