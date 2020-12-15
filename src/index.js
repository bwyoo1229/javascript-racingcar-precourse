import RacingCarGameController from './controllers/car-controller.js';

export default class RacingCarGame {
	constructor() {
		this.racingCarGameController = new RacingCarGameController();
	}
}

new RacingCarGame();
