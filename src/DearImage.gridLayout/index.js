import DearImage from '../@core/DearImage';

DearImage.gridLayout = function() {
	(value => {
		if (value == null) {
			// pass
		} else
		if (Object_is(value)) {
			(value => {
				if (value == null) {
					// pass
				} else
				if (Object_is(value)) {
					(value => {
						if (value == null) {
							// pass
						} else
						if (Object_is(value)) {
							(value => {
								if (value == null) {
									// pass
								} else {
									sizeXMin = normalizeSizeMin(value);
								}
							})(value.min);
							(value => {
								if (value == null) {
									// pass
								} else {
									sizeXMax = normalizeSizeMax(value);
								}
							})(value.max);
						} else {
							sizeXMin = sizeXMax = normalizeSizeMin(value);
						}
					})(value.x);
					(value => {
						if (value == null) {
							// pass
						} else
						if (Object_is(value)) {
							(value => {
								if (value == null) {
									// pass
								} else {
									sizeYMin = normalizeSizeMin(value);
								}
							})(value.min);
							(value => {
								if (value == null) {
									// pass
								} else {
									sizeYMax = normalizeSizeMax(value);
								}
							})(value.max);
						} else {
							sizeYMin = sizeYMax = normalizeSizeMin(value);
						}
					})(value.y);
				} else {
					sizeXMin = sizeXMax = sizeYMin = sizeYMax = normalizeSizeMin(value);
				}
			})(value.size);
		}
	})(options);
	({
		sizeXMax = defaultSizeMax,
		sizeXMin = defaultSizeMin,
		sizeYMax = defaultSizeMax,
		sizeYMin = defaultSizeMin,
	} = {
		sizeXMax,
		sizeXMin,
		sizeYMax,
		sizeYMin,
	});
	return this.blank();
};
