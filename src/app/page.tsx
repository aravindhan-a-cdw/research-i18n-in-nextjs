import Link from "next/link";

export default function Page() {
	return (
		<div className="h-screen flex items-center flex-col justify-center">
			<h1 className="text-2xl justify-self-start">CDW</h1>
			<h1>This page doesn&rsquo;t have i18n support.</h1>
			<p>
				Click{" "}
				<Link className="text-sky-300" href="/en/">
					here
				</Link>{" "}
				to go to the page with i18n support.
			</p>
		</div>
	);
}
