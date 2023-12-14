import { locales } from "@/i18n";
import LocaleSwitcherSelect from "./LocaleSwitcher";
import { useTranslations } from "next-intl";

type Props = {
	locale: string;
};

export default function LocaleSwitcher({ locale }: Props) {
	const t = useTranslations("NAV");

	return (
		<LocaleSwitcherSelect
			defaultValue={locale}
			label={t("language_switcher")}
		>
			{locales.map((cur) => (
				<option key={cur} value={cur}>
					{cur}
				</option>
			))}
		</LocaleSwitcherSelect>
	);
}
