import { Toaster } from '@/components/ui/sonner';
import './globals.css';

import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from './navbar';
import URLToast from './url-toast';

export const metadata: Metadata = {
	title: 'UNT HerScript',
	description: 'Cultivating a community for young women interested in careers in technology!!'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/logo.jpg" />
			</head>
			<body className={cn('min-h-screen bg-background  antialiased')}>
				<Toaster position="top-center" />
				<URLToast />

				<div className="flex flex-col min-h-dvh">
					<Navbar />
					<main className="flex-1">{children}</main>
				</div>
				<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-primary text-primary-foreground">
					<p className="text-xs">&copy; 2024 HerScript. All rights reserved.</p>
					<nav className="sm:ml-auto flex gap-4 sm:gap-6">
						<Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
							Privacy
						</Link>
						<Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
							Terms of Service
						</Link>
						<Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
							Contact
						</Link>
					</nav>
				</footer>
			</body>
		</html>
	);
}
