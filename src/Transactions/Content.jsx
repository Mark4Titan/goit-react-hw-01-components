import Block from './Block.jsx'
function LetId(n = 0) {
	let lostId = n
	return function nameId() {
		return 'missing_id_:(_()_=>_custom_id=z0' + lostId++
	}
}

let CastomId = LetId()

function gap() {
	let in_turn = false
	return () => (in_turn ? (in_turn = false) : (in_turn = true))
}

let InTurn = gap()

function Content({ tranHistory }) {
	return tranHistory.map(obj => {
		const DopClass = InTurn() ? 'in_turn' : 'clasic'

		return (
			<tr key={obj.id} className={DopClass}>
				<Block props={obj.type} />
				<Block props={obj.amount} />
				<Block props={obj.currency} />
			</tr>
		)
	})
}

export default Content
