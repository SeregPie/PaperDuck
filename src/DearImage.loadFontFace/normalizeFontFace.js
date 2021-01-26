import FontFace from '../@core/FontFace';
import Object_is from '../@core/Object/is';
import String_is from '../@core/String/is';

import defaultValue from './defaultFontFace';
import normalizeFamily from './normalizeFontFamily';
import normalizeStyle from './normalizeFontStyle';
import normalizeVariant from './normalizeFontVariant';
import normalizeWeight from './normalizeFontWeight';

export default function(value) {
	if (value != null) {
		if (FontFace.is(value)) {
			return value;
		}
		if (String_is(value)) {
			let family = value;
			family = normalizeFamily(family);
			return new FontFace(family);
		}
		if (Object_is(value)) {
			let {
				family,
				style,
				variant,
				weight,
			} = value;
			family = normalizeFamily(family);
			style = normalizeStyle(style);
			variant = normalizeVariant(variant);
			weight = normalizeWeight(weight);
			return new FontFace(family, {
				style,
				variant,
				weight,
			});
		}
	}
	return defaultValue;
}
