import { getDictionary } from "@/locales";
import Link from "next/link";
import { useParams } from "next/navigation";

type Props = {
	params: {
		locale: string;
	};
};

export default async function Page({ params }: Props) {
	const locale = params.locale;
	const dict = await getDictionary(locale);
	console.log(params);
	console.log("Locale in page.tsx:", locale);
	return (
		<div className="border border-blue-300 border-2 p-2 h-1/2 text-center">
			<div className="text-blue-300 flex gap-2 justify-center">
				<Link href={`/${locale}`} lang={locale}>
					Home
				</Link>
				<Link href={`/${locale}/about`}>About</Link>
			</div>
			<p>{dict.welcome}</p>
		</div>
	);
}
