import '../DearImage.flexX';
import '../DearImage.flexY';
import DearImage from '../DearImage';

DearImage.lineLayout = function(direction, ...args) {
	switch (direction) {
		case 'x':
			return this.flexX(...args);
		case 'y':
			return this.flexY(...args);
	}
};
