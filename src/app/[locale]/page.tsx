import { locales } from "@/i18n";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";

type Props = {
	params: {
		locale: string;
	};
};

export default function Page({ params: { locale } }: Props) {
	if (!locales.includes(locale as any)) notFound();
	const t = useTranslations("HOME");
	return (
		<div className="border border-blue-300 border-2 p-2 h-1/2 text-center">
			<div className="text-blue-300 flex gap-2 justify-center">
				<Link href="/">Home</Link>
				<Link href={`/${locale}/about`}>About</Link>
			</div>
			<p>{t("welcome")}</p>
		</div>
	);
}
