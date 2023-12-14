import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";

let headers = { "accept-language": "en-US,en;q=0.5" };
let languages = new Negotiator({ headers }).languages();
let locales = ["en", "ta", "hi"];
let defaultLocale = "en";

function getLocale(request: NextRequest) {
	return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
	// Check if there is any supported locale in the pathname
	const { pathname } = request.nextUrl;
	const locale = getLocale(request);
	const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;

	if (pathname === "/favicon.ico") return;
	const pathnameHasLocale = locales.some(
		(locale) =>
			pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	);
	console.log(pathnameHasLocale, "pathnameHasLocale");
	if (!pathnameHasLocale) {
		console.log("inside pathnameHasLocale", pathnameHasLocale);
		// If there is no locale in the pathname, redirect to the default locale
		request.nextUrl.pathname = `/${locale}${pathname}`;
		const response = NextResponse.redirect(request.nextUrl);
		response.cookies.set("NEXT_LOCALE", cookieLocale || locale);
		return response;
		// e.g. incoming request is /products
		// The new URL is now /en-US/products
		return Response.redirect(request.nextUrl);
	}

	const pathLocale = locales.find(
		(locale) =>
			pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	);
	console.log(pathLocale, "pathLocale", cookieLocale, "cookieLocale");
	if (pathLocale && cookieLocale && pathLocale !== cookieLocale) {
		// If there is a locale in the pathname and it is different from the cookie, redirect to the locale in the pathname
		request.nextUrl.pathname = pathname.replace(
			`/${pathLocale}`,
			`/${cookieLocale}`
		);
		return Response.redirect(request.nextUrl);
	}
	// return request;
}

export const config = {
	matcher: [
		// Skip all internal paths (_next)
		"/((?!_next).*)",
		// Optional: only run on root (/) URL
		// '/'
	],
};
