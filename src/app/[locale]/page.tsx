import Link from "next/link";

export default function Page() {
	return (
		<div className="border border-blue-300 border-2 p-2 h-1/2 text-center">
			<div className="text-blue-300 flex gap-2 justify-center">
				<Link href="/">Home</Link>
				<Link href="/[locale]/about" as="/en/about">
					About
				</Link>
			</div>
			<p>Welcome to CDW</p>
		</div>
	);
}
