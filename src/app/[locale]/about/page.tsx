import { getDictionary } from "@/locales";

type Props = {
	params: {
		locale: string;
	};
};

export default async function Page({ params: { locale } }: Props) {
	const dict = await getDictionary(locale);
	return (
		<div className="border border-yellow-300 border-4 h-1/2">
			<p>{dict.About.description}</p>
		</div>
	);
}
