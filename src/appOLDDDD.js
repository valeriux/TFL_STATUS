import './style.scss'

const url = 'https://api.tfl.gov.uk/line/mode/tube/status'
const tube = document.querySelector('.tube')

function tubeStatus() {
	fetch(url)
		.then(res => res.json())
		.then(data => {
			// container.innerHTML = ''
			data.forEach(tubeLine => {
				tube.innerHTML += `<div class="column ${tubeLine.id}">
        <h2>${tubeLine.name}</h2>
        <h3>${tubeLine.lineStatuses[0].statusSeverityDescription}</h3>
        </div>`
			})
		})
}

tubeStatus()

setInterval(tubeStatus(), 300000)



