export default class {
	constructor(context) {
		this.context = context;
	}
	get canvas() {
		return this.context.canvas;
	}
	get sizeX() {
		return this.canvas.width;
	}
	get sizeY() {
		return this.canvas.height;
	}
}
