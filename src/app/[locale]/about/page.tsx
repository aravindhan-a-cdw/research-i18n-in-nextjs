"use client";

import { useTranslation } from "@/i18n/client";

type Props = {
	params: {
		locale: string;
	};
};

export default function Page({ params: { locale } }: Props) {
	const { t } = useTranslation(locale, "about");
	return (
		<div className="border border-yellow-300 border-4 h-1/2">
			<p>{t("description")}</p>
		</div>
	);
}
