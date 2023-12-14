"use client";

import { ChangeEvent, ReactNode, useTransition } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

type Props = {
	children: ReactNode;
	defaultValue: string;
	label: string;
};

export default function LocaleSwitcherSelect({
	children,
	defaultValue,
	label,
}: Props) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const pathname = usePathname();

	function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
		const nextLocale = event.target.value;
		startTransition(() => {
			// TODO: fix change of locale with cookie
			document.cookie = `next-i18n-local=${nextLocale}; path=/;`;
			const newName = pathname.replace(
				pathname.slice(0, 3),
				`/${nextLocale}`
			);
			// router.replace(newName);
			router.refresh();
			// document.location.replace(`/${nextLocale}`);
		});
	}

	return (
		<label
			className={`relative text-gray-400 ${
				isPending ? "transition-opacity [&:disabled]:opacity-30}" : ""
			}`}
		>
			<p className="sr-only">{label}</p>
			<select
				className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
				defaultValue={defaultValue}
				disabled={isPending}
				onChange={onSelectChange}
			>
				{children}
			</select>
			<span className="pointer-events-none absolute right-2 top-[8px]">
				⌄
			</span>
		</label>
	);
}
