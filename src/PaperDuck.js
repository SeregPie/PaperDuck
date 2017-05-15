(function() {

	var PaperDuck = function(canvas) {
		this.canvas = canvas
	};

	PaperDuck.blankContext = function(sizeX, sizeY) {
		sizeX = parseInt(sizeX);
		sizeY = parseInt(sizeY);
		if (isNaN(sizeX)) {
			sizeX = 0;
		} else {
			sizeX = Math.abs(sizeX);
		}
		if (isNaN(sizeY)) {
			sizeY = 0;
		} else {
			sizeY = Math.abs(sizeY);
		}
		var ctx = document.createElement('canvas').getContext('2d');
		ctx.canvas.width = sizeX;
		ctx.canvas.height = sizeY;
		return ctx;
	};

	PaperDuck.from = (function() {
		var fromCanvasImageSource = function(source) {
			var sizeX = source.naturalWidth || source.width;
			var sizeY = source.naturalHeight || source.height;
			var ctx =  this.blankContext(sizeX, sizeY);
			ctx.drawImage(source, 0, 0);
			var canvas = ctx.canvas;
			return new this(canvas);
		};

		return function(value) {
			if (value instanceof this) {
				return value;
			}
			try {
				if (value.canvas instanceof HTMLCanvasElement) {
					return fromCanvasImageSource.call(this, value.canvas);
				}
				return fromCanvasImageSource.call(this, value);
			} catch (e) {
				return this.blank();
			}
		};
	})();

	PaperDuck.blank = function(sizeX, sizeY) {
		var canvas = this.blankContext(sizeX, sizeY).canvas;
		return new this(canvas);
	};

	PaperDuck.fn = PaperDuck.prototype = {
		constructor: PaperDuck,

		getWidth: function() {
			return this.canvas.width;
		},

		getHeight: function() {
			return this.canvas.height;
		},

		toImage: function() {
			var image = new Image();
			image.src = this.toDataURL.apply(this, arguments);
			return image;
		},

		toImageData: function() {
			// todo
		},

		toCanvas: function() {
			return this.toContext().canvas;
		},

		toContext: function() {
			var ctx = this.constructor.blankContext(this.canvas.width, this.canvas.height);
			ctx.drawImage(this.canvas, 0, 0);
			return ctx;
		},

		toDataURL: function() {
			return this.canvas.toDataURL.apply(this.canvas, arguments);
		},
	};

	this.PaperDuck = PaperDuck;

}).call(this);