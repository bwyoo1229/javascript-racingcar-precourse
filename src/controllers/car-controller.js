import RacingCarGameInput from '../views/input.js';
import RacingCarGameOutput from '../views/output.js';
import RacingCarGameModel from '../models/car-model.js';

export default class RacingCarGameController {
	constructor() {
		this.racingCarGameInput = new RacingCarGameInput();
		this.racingCarGameOutput = new RacingCarGameOutput();
		this.racingCarGameModel = new RacingCarGameModel();

		this.handleCarNamesSubmit();
		this.onRacingCarInput();
		this.onRacingCountInput();
		this.onRacingGameEnd();
	}

	handleCarNamesSubmit = () => {
		this.racingCarGameInput.bindCarNamesSubmit(this.submitCarNames);
	}

	submitCarNames = carNamesInput => {
		this.racingCarGameModel.addRacingCars(carNamesInput);
	}

	onRacingCarInput = () => {
		this.racingCarGameModel.bindRenderRacingCarInput(this.renderRacingCarInput)
	}

	renderRacingCarInput = () => {
		this.racingCarGameOutput.disableSubmit();
		this.racingCarGameOutput.renderRacingCarInput();
		this.handleRacingCountSubmit();
	}

	handleRacingCountSubmit = () => {
		this.racingCarGameInput.bindRacingCountSubmit(this.submitRacingCount);
	}

	submitRacingCount = racingCountInput => {
		this.racingCarGameModel.addRacingCount(racingCountInput);
	}

	onRacingCountInput = () => {
		this.racingCarGameModel.bindRenderRaceResult(this.renderRaceResult);
	}

	renderRaceResult = cars => {
		this.racingCarGameOutput.renderRaceResult(cars);
	}

	onRacingGameEnd = () => {
		this.racingCarGameModel.bindRenderWinners(this.renderWinners);
	}

	renderWinners = winners => {
		this.racingCarGameOutput.renderWinners(winners);
	}
}