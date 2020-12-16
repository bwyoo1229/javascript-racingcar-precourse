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

		if (this.racingCars.some(car => car.name === '')) {
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

	bindRenderRaceResult = callback => {
		this.renderRaceResult = callback;
	}

	addRacingCount = racingCountInput => {
		const cars = this.racingCars;

		for (let raceCount = 0; raceCount < racingCountInput; raceCount++) {
			cars.forEach(car => car.move());

			this.renderRaceResult(cars);
		}

		this.getWinners(cars);
	}

	bindRenderWinners = callback => {
		this.renderWinners = callback;
	}

	getWinners = cars => {
		const winners = cars.filter(car => car.distance === this.getMaxdistance(cars))
		const winnerNames = [];

		for (let winner of winners) {
			winnerNames.push(winner.name);
		}

		this.renderWinners(winnerNames);
	}

	getMaxdistance = cars => {
		let maxDistance = 0;
		
		for (let car of cars) {
			if (car.distance > maxDistance) {
				maxDistance = car.distance;
			}
		}
		
		return maxDistance;
	}
}