import './friends.css'
import LiFriendList from './LiFriendList.jsx'

function FriendList({ friends }) {
	return (
		<ul className="friendlist">
			{/* <LiFriendList friends={friends} /> */}
			{friends.map(elem => {
				const isOnline = elem.isOnline === true ? 'on_line' : 'off_line'
				return (
					<LiFriendList
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
