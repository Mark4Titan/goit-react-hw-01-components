function Block({ props }) {
	return <td>{props}</td>
}

Block.defaultProps = {
	props: 'missing props',
}

export default Block
