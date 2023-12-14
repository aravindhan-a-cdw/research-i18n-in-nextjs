import { getDictionary } from "@/locales";

type Props = {
	params: {
		locale: string;
	};
	children: React.ReactNode;
};

export default async function Layout({ children, params: { locale } }: Props) {
	const dict = await getDictionary(locale);
	return (
		<div className="border border-slate-700 h-1/2 border-4 p-2">
			<h1 className="mb-4">{dict.About.title}</h1>
			{children}
		</div>
	);
}
