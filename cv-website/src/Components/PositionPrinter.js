function PositionPrinter(params) {
	return <div>
		<h2>{params.institution_name}</h2>
		<p>{params.position_title}</p>
		<p>{params.time_period}</p>
		<p>{params.link}</p>
		<p>{params.description}</p>
	</div>
}

export default PositionPrinter
