import './App.css'

import user from './users/user.json'
import statisticalData from './statistics/statistical-data.json'
import friends from './FriendList/friends.json'
import tranHistory from './Transactions/transactions.json'

import CreateUserCard from './users/CreateUserCard.jsx'
import Statistics from './statistics/CreateStatistics.jsx'
import FriendList from './FriendList/CreateFriendList.jsx'
import TransactionHistory from './Transactions/TransactionHistory.jsx'

function App() {
	return (
		<>
			<CreateUserCard
				name={user.name}
				tag={user.tag}
				avatar={user.avatar}
				location={user.location}
				stats={user.stats}
			/>
			<Statistics title="Upload stats" stats={statisticalData} />
			<FriendList friends={friends} />
			<TransactionHistory items={tranHistory} />
		</>
	)
}

export default App
