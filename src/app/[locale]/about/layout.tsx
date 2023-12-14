export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="border border-slate-700 h-1/2 border-4 p-2">
			<h1 className="mb-4">About Us</h1>
			{children}
		</div>
	);
}
