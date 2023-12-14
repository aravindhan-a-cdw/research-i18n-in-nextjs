"use client";

import { languages } from "@/i18n/settings";
import { useTranslation } from "@/i18n/client";
import LocaleSwitcherSelect from "./LanguageSwitcher";

type Props = {
	locale: string;
};

export default function LocaleSwitcher({ locale }: Props) {
	const { t } = useTranslation(locale, "translation");

	return (
		<LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
			{languages.map((cur) => (
				<option key={cur} value={cur}>
					{cur}
				</option>
			))}
		</LocaleSwitcherSelect>
	);
}
