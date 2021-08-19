import './friends.css'
import FriendListItem from './FriendListItem.jsx'

function FriendList({ friends }) {
	return (
		<ul className="friendlist">
			{/* <FriendListItem friends={friends} /> */}
			{friends.map(elem => {
				const isOnline = elem.isOnline === true ? 'on_line' : 'off_line'
				return (
					<FriendListItem
						avatar={elem.avatar}
						name={elem.name}
						isOnline={isOnline}
						id={elem.id}
					/>
				)
			})}
		</ul>
	)
}

export default FriendList
