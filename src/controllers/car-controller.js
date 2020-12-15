import RacingCarGameInput from '../views/input.js';
import RacingCarGameModel from '../models/car-model.js';
import RacingCarGameOutput from '../views/output.js';

export default class RacingCarGameController {
	constructor() {
		this.racingCarGameInput = new RacingCarGameInput();
		this.racingCarGameOutput = new RacingCarGameOutput();
		this.racingCarGameModel = new RacingCarGameModel();

		this.handleCarNamesSubmit();
		this.displayRacingCarInput();
	}

	handleCarNamesSubmit = () => {
		this.racingCarGameInput.bindCarNamesSubmit(this.submitCarNames);
	}

	submitCarNames = carNamesInput => {
		this.racingCarGameModel.addRacingCars(carNamesInput);
	}

	displayRacingCarInput = () => {
		this.racingCarGameModel.bindRenderRacingCarInput(this.renderRacingCarInput)
	}

	renderRacingCarInput = () => {
		this.racingCarGameOutput.renderRacingCarInput();
		this.handleRacingCountSubmit();
	}

	handleRacingCountSubmit = () => {
		this.racingCarGameInput.bindRacingCountSubmit(this.submitRacingCount);
	}

	submitRacingCount = racingCountInput => {
		this.racingCarGameModel.addRacingCount(racingCountInput);
	}
}