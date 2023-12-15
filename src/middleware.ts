import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n";

export default createMiddleware({
	// A list of all locales that are supported
	locales: locales,

	// Used when no locale matches
	defaultLocale: defaultLocale,
});
// locales.join("|");
console.log(locales.join("|"));
export const config = {
	// Match only internationalized pathnames
	matcher: ["/", "/(ta|en|hi)/:path*"], // only this works
	// matcher: ["/", "/(" + locales.join("|") + ")/:path*"],
	// matcher: ["/", `/(${locales.join("|")})/:path*`],
};
