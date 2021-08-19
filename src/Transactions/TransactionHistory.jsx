import Content from './Content.jsx'
import './transactions.css'

function TransactionHistory({ items }) {
	return (
		<table className="transaction-history">
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<tbody>
				<Content tranHistory={items} />
			</tbody>
		</table>
	)
}

export default TransactionHistory
