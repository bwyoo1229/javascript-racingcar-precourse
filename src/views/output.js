export default class RacingCarGameOutput {
	constructor() {
		this.resultContainer = document.createElement('div');
		this.resultContainer.setAttribute('id', 'car-game-result-container');
	}

	renderRacingCarInput = () => {
		const carGameContainer = document.getElementById('car-game-container');
		const div = document.createElement('div');
		const h4 = document.createElement('h4');
		h4.innerText = '시도할 횟수를 입력해주세요.';
		const input = document.createElement('input');
		input.setAttribute('id', 'racing-count-input');
		input.setAttribute('type', 'number');
		const button = document.createElement('button');
		button.setAttribute('id', 'racing-count-submit');
		button.innerText = '확인';

		carGameContainer.appendChild(div);
		div.appendChild(h4);
		div.appendChild(input);
		div.appendChild(button);
	}

	renderRaceResult = cars => {
		const app = document.getElementById('app');
		app.appendChild(this.resultContainer);

		cars.forEach(car => {
			const span = document.createElement('span');
			span.style.display = 'block';
			span.innerText = `${car.name}: ${'-'.repeat(car.distance)}`;
			this.resultContainer.appendChild(span);
		});
		
		this.resultContainer.appendChild(document.createElement('br'));
	}

	renderWinners = winners => {
		const winnerResult = document.createElement('div');
		winnerResult.innerText = `Winners: ${winners.join(",")}`
		this.resultContainer.appendChild(winnerResult);
	}
}