console.log('test')

const inputBootcamp = document.getElementById('input-new-bootcamp')
const btnNewBootcamp = document.getElementById('btn-new-bootcamp')

const bootcampList = document.getElementById('bootcamp-list')

const BASE_URL = 'http://localhost:3000'

let bootcamps = []

btnNewBootcamp.addEventListener('click', () => {
	fetchNewBootcamps({ title: inputBootcamp.value })
})

function fetchBootcamps() {
	fetch(BASE_URL + '/bootcamps')
		.then((res) => res.json())
		.then((data) => {
			bootcamps = data

			render()
		})
}

function fetchNewBootcamps(bootcamp) {
	fetch(BASE_URL + '/bootcamps', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(bootcamp),
	})
		.then((res) => res.json())
		.then((data) => {
			bootcamps.push(data)

			render()
		})
}

fetchBootcamps()

function render() {
	console.log({ bootcamps })

	bootcampList.innerHTML = bootcamps
		.map(
			(bootcamp) =>
				`<li class="list-group-item">${bootcamp.Title}</li>`
		)
		.join('')
}
