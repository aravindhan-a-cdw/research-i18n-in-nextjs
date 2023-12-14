import Link from "next/link";
import { useTranslation } from "@/i18n";

type Props = {
	params: {
		locale: string;
	};
};

export default async function Page({ params: { locale } }: Props) {
	const { t } = await useTranslation(locale, "translation");
	return (
		<div className="border border-blue-300 border-2 p-2 h-1/2 text-center">
			<div className="text-blue-300 flex gap-2 justify-center">
				<Link href={`/${locale}`}>{t("home")}</Link>
				<Link href={`/${locale}/about`}>{t("about")}</Link>
			</div>
			<p>{t("welcome")}</p>
		</div>
	);
}
