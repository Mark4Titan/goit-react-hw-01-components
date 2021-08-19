import Description from './Description.jsx'
import ContactList from './ContactList.jsx'
import './UserCard.css'

function CreateUserCard({ name, tag, avatar, location, stats }) {
	return (
		<div className="profile">
			<Description name={name} tag={tag} avatar={avatar} location={location} />

			<ContactList
				followers={stats.followers}
				views={stats.views}
				likes={stats.likes}
			/>
		</div>
	)
}

CreateUserCard.defaultProps = {
	name: 'Petra Marica',
	tag: '@pmarica',
	location: 'Salvador, Brasil',
	avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
}

export default CreateUserCard
