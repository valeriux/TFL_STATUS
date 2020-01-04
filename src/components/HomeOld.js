import React from 'react'
import axios from 'axios'


class Home extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			lines: []
		}
	}

	componentDidMount() {
		fetch('https://api.tfl.gov.uk/line/mode/tube/status')
			.then(results => {
				return results.json();
			}).then(data => {
				let lines = data.map((li) => {
					return (
						<div key={li.results}>
							<h4>{li.id}</h4>
							<h4>{li.modeName}</h4>
							<h4>{li.name}</h4>
							<h5>{li.lineStatuses[0].statusSeverityDescription}</h5>
						</div>
					)
				})
				this.setState({ lines: lines })
				console.log("state", this.state.lines)
			})
	}

	render() {

		return (
			<section>
				<div>
					<div className="container">
						<h1>TFL Transport</h1>
						<h1 >Welcome</h1>
						<div >
							{this.state.lines}
						</div>

					</div>
				</div>
			</section>
		)
	}
}

export default Home


// SECOND HOME WORKING //

import React from 'react'
import axios from 'axios'


class Home extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			lines: []
		}
	}


	componentDidMount() {
		axios.get('https://api.tfl.gov.uk/line/mode/tube/status')
			.then(res => {
				const lines = res.data
				this.setState({ lines })

				console.log('aqui', this.state.lines)
			})
	}

	// mapData = () => {
	// 	return this.state.line.map()
	// }

	render() {
		return (
			<section>
				<div>
					<div className="tube">
						<h1>TFL Transport</h1>
						<h1 >Welcome</h1>
						<div class="container">
							{/* {this.mapData()} */}
							{this.state.lines.map(line =>
								<React.Fragment>
									<div class="column">
										<div class={`column ${line.id}`} />
										<h2> {line.name} </h2>
										<h3> {line.lineStatuses[0].statusSeverityDescription} </h3>
									</div>
								</React.Fragment>
							)}
						</div>

					</div>
				</div>
			</section >


		)
	}
}

export default Home







