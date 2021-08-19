import './statistics.css'
import StatList from './StatList.jsx'

const colorArr = ['#0081b7', '#6303af', '#940014', '#007d89']

function ColorN(n = colorArr.length - 1, max = colorArr.length - 1) {
	let count = n
	return function nameColor() {
		if (count < 0) count = max
		return colorArr[count--]
	}
}

let colorNext = ColorN()

function Statistics({ title, stats }) {
	return (
		<div className="statisticsBox">
			<section className="statistics">
				{title && <h2 className="title">{title}</h2>}
				<ul className="stat-list">
					{stats.map(elem => {
						return (
							<StatList
								id={elem.id}
								label={elem.label}
								percentage={elem.percentage}
								colorNext={colorNext()}
							/>
						)
					})}
				</ul>
			</section>
		</div>
	)
}

Statistics.defaultProps = {
	title: '',
}

export default Statistics
