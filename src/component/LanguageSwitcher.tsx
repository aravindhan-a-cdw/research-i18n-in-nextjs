"use client";

import { usePathname, useRouter } from "next/navigation";
import { languages } from "@/locales/config";

export default function Page() {
	const router = useRouter();
	const pathname = usePathname();
	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		document.cookie = `NEXT_LOCALE=${e.currentTarget.value};Path=/`;
		router.push(pathname);
		router.refresh();
	};
	return (
		<div className="flex gap-2 justify-center">
			{languages.map((language) => (
				<button
					onClick={onClick}
					className="p-2 px-2 text-blue-300 border border-sky-300 border-2"
					key={language}
					value={language}
				>
					{language}
				</button>
			))}
		</div>
	);
}
