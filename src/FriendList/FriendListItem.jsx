function FriendListItem({ avatar, name, isOnline, id }) {
	return (
		<li key={id} className={'itemFriends ' + isOnline}>
			<span className="status">{isOnline}</span>
			<img className="avatar" src={avatar} alt={name} width="48" />
			<p className="name">{name}</p>
		</li>
	)
}

FriendListItem.defaultProps = {
	avatar: 'https://www.flaticon.com/svg/static/icons/svg/763/763707.svg',
	name: 'name',
	isOnline: 'missing isOnline',
}

export default FriendListItem
