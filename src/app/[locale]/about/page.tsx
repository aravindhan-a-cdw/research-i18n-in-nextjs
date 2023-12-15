import { useTranslations } from "next-intl";

type Props = {
	params: {
		locale: string;
	};
};

export default function Page({ params: { locale } }: Props) {
	const t = useTranslations("ABOUT");
	return (
		<div className="border border-yellow-300 border-4 h-1/2">
			<p>{t("description")}</p>
		</div>
	);
}
