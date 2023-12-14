import { useTranslations } from "next-intl";

export default function Page() {
	const t = useTranslations("ABOUT");
	return (
		<div className="border border-yellow-300 border-4 h-1/2">
			<p>{t("description")}</p>
		</div>
	);
}
