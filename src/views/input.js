export default class RacingCarGameInput {
	constructor() {
		this.initializeView();
	}

	initializeView = () => {
		const app = document.getElementById('app')
		app.innerHTML = 
		`
		<h1>🏎️ 자동차 경주 게임</h1>
		<p>
			자동차 이름을 <strong>5자 이하로</strong> 콤마로 구분하여 입력해주세요.
			<br />
			올바른 예) east,west,south,north <br />
		</p>
		<div id="car-game-container">
			<div>
				<input id="car-names-input" type="text" />
				<button id="car-names-submit">확인</button>
			</div>
		</div>
		`;
	}

	bindCarNamesSubmit = submitCarNames => {
		const carNamesSubmit = document.getElementById('car-names-submit');
		
		carNamesSubmit.addEventListener('click', () => submitCarNames(this.getCarNamesInput()));
	}

	getCarNamesInput = () => {
		const carNamesInput = document.getElementById('car-names-input');

		return carNamesInput.value;
	}

	bindRacingCountSubmit = submitRacingCount => {
		const racingCountSubmit = document.getElementById('racing-count-submit');

		racingCountSubmit.addEventListener('click', () => submitRacingCount(this.getRacingCountInput()));	
	}

	getRacingCountInput = () => {
		const racingCountInput = document.getElementById('racing-count-input');

		return Number(racingCountInput.value);
	}
}