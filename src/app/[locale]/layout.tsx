import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="border border-emerald-700 h-screen border-4 p-2">
			<Link href="/en/">
				<h1 className="mb-4 text-amber-300 text-xl">CDW</h1>
			</Link>
			{children}
		</div>
	);
}
