import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Custom404() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[70vh] bg-background text-foreground p-4">
			<h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
			<p className="text-xl mb-8 text-center">
				Hmm... This page seems to have vanished into thin air.
			</p>
			<div className="mb-8 text-8xl" role="img" aria-label="Face with monocle emoji">
				🧐
			</div>
			<p className="text-lg mb-8 text-center max-w-md">
				We&apos;ve searched high and low, but we can&apos;t seem to find what you&apos;re looking
				for. Let&apos;s get you back to familiar territory!
			</p>
			<Button asChild>
				<Link href="/">Take Me Home</Link>
			</Button>
		</div>
	);
}
