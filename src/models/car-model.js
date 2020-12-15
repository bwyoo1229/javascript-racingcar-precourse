import Car from './car.js';

export default class RacingCarGameModel {
	constructor() {
		this.racingCars = [];
	}

	bindRenderRacingCarInput = callback => {
		this.renderRacingCarInput = callback;
	}

	addRacingCars = rawCarNames => {
		this.racingCars = this.getCars(rawCarNames);

		if (this.racingCars === '') {
			this.racingCars = [];
			alert("빈칸");
			return;
		}

		this.renderRacingCarInput();
	}

	getCars = rawCarNames => {
		const carNames = this.parseCarNames(rawCarNames);
		const cars = this.createCars(carNames);

		return cars;
	}

	parseCarNames = rawCarNames => {
		return rawCarNames.split(",");
	}

	createCars = carNames => {
		const cars = []

		for (let carName of carNames) {
			cars.push(new Car(carName));
		}

		return cars;
	}

	addRacingCount = racingCountInput => {
		const cars = this.racingCars;

		for (let raceCount = 0; raceCount < racingCountInput; raceCount++) {
			cars.forEach(car => car.move());
		}
	}
}