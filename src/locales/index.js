import "server-only";
import { languages } from "./config";
const dictionaries = {
	en: () => import("./dictionaries/en.json").then((module) => module.default),
	ta: () => import("./dictionaries/ta.json").then((module) => module.default),
};

const loadDictionary = (locale) => {
	return () =>
		import(`./dictionaries/${locale}.json`).then(
			(module) => module.default
		);
};

export const getDictionary = async (locale) => {
	if (!languages.includes(locale))
		throw new Error(`Locale ${locale} is not supported`);
	// const dict = dictionaries[locale]();
	const dict = loadDictionary(locale)();
	return dict;
};
