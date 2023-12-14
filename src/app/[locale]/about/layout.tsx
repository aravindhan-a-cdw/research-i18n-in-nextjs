"use client";
import { useTranslation } from "@/i18n/client";

type Props = {
	children: React.ReactNode;
	params: {
		locale: string;
	};
};

export default function Layout({ children, params: { locale } }: Props) {
	const { t } = useTranslation(locale, "about");
	return (
		<div className="border border-slate-700 h-1/2 border-4 p-2">
			<h1 className="mb-4">{t("title")}</h1>
			{children}
		</div>
	);
}
