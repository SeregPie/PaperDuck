import require from '@seregpie/native-require';

export default function() {
	try {
		let {Canvas} = require('canvas');
		return new Canvas();
	} catch {
		// pass
	}
	throw new Error('Canvas is not supported.');
}
