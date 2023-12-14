export const fallbackLng = "en";
export const languages = [fallbackLng, "ta"];
export const cookieName = "next-i18n-locale";
export const defaultNS = "translation";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
	return {
		// debug: true,
		supportedLngs: languages,
		fallbackLng,
		lng,
		fallbackNS: defaultNS,
		defaultNS,
		ns,
	};
}
