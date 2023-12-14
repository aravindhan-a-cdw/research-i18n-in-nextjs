import { useTranslations } from "next-intl";

export default function Layout({ children }: { children: React.ReactNode }) {
	const t = useTranslations("ABOUT");
	return (
		<div className="border border-slate-700 h-1/2 border-4 p-2">
			<h1 className="mb-4">{t("title")}</h1>
			{children}
		</div>
	);
}
