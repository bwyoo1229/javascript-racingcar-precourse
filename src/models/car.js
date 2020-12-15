export default class Car {
	constructor(name) {
		this.name = name;
		this.distance = 0;
	}

	move = () => {
		if (Math.floor(Math.random() * 9 + 1) >= 4) {
			this.distance += 1;
		}
	}
}