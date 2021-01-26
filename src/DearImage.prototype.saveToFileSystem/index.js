import DearImage from '../@core/DearImage';

import '../DearImage.prototype.toBuffer';

DearImage.prototype.saveToFileSystem = function(target, ...args) {
	return new Promise((resolve, reject) => {
		let fs = require('fs');
		let path = require('path');
		let buffer = this.toBuffer(...args);
		fs.mkdir(path.dirname(target), {recursive: true}, error => {
			if (error) {
				reject(error);
			} else {
				fs.writeFile(target, buffer, error => {
					if (error) {
						reject(error);
					} else {
						resolve();
					}
				});
			}
		});
	});
};
