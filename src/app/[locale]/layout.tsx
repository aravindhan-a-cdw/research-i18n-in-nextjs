import LangSelector from "@/components/LangSelector";
import Link from "next/link";

type Props = {
	children: React.ReactNode;
	params: {
		locale: string;
	};
};

export default function Layout({ children, params: { locale } }: Props) {
	return (
		<div className="border border-emerald-700 h-screen border-4 p-2">
			<div>
				<Link href={`/${locale}`}>
					<h1 className="mb-4 text-amber-300 text-xl">CDW</h1>
				</Link>
				<LangSelector locale={locale}></LangSelector>
			</div>
			{children}
		</div>
	);
}
