function LetId(n = 0) {
	let lostId = n
	return function nameId() {
		return 'missing_id_:(_()_=>_custom_id=v0' + lostId++
	}
}

let CastomId = LetId()

function StatList({ percentage, label, id, colorNext }) {
	let ids = id ? id : 'id_x' + CastomId()
	return (
		<>
			<li
				// id={ids}
				key={ids.toString()}
				className="item"
				style={{ backgroundColor: colorNext }}>
				<span className="label">{label}</span>
				<span className="percentage">{percentage}%</span>
			</li>
		</>
	)
}

StatList.defaultProps = {
	label: 'missing',
	percentage: 0,
	colorNext: 'cccccc',
}

export default StatList
