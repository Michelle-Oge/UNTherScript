/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Suspense } from 'react';

function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Component({
	searchParams
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	return (
		<>
			<section className="w-full p-12 md:pt-24 lg:pt-32 bg-primary text-primary-foreground relative">
				<div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
					<div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16 items-center">
						<div className="">
							<h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
								Empowering Young Women in Tech
							</h1>
							<p className="mx-auto max-w-[700px] text-primary-foreground md:text-xl">
								HerScript is a campus organization dedicated to supporting and inspiring young women
								to pursue careers in technology. We provide a welcoming community, skill-building
								workshops, and opportunities to connect with industry leaders.
							</p>
							<div className="mt-6 space-x-4 z-30">
								<Link
									href={`https://dev.jonze.co/user/signup/${process.env.NEXT_PUBLIC_JONZE_ORG}?callbackUrl=${process.env.NEXT_PUBLIC_URL}`}
									className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
									prefetch={false}
								>
									Join HerScript
								</Link>
								<Link
									href="#"
									className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background text-foreground px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
									prefetch={false}
								>
									Learn More
								</Link>
							</div>
						</div>
						<div className="z-30 border-4 rounded-2xl">
							<img
								src="/og_poster.jpg"
								alt="HerScript Hero"
								className="mx-auto aspect-square overflow-hidden rounded-xl object-cover "
							/>
						</div>
					</div>
				</div>

				<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0rem] rotate-180">
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
						className="relative block w-[calc(100%+1.3px)] h-40 *:fill-background"
					>
						<path
							d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
							opacity=".25"
						></path>
						<path
							d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
							opacity=".5"
						></path>
						<path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
					</svg>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container space-y-12 px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Upcoming Events</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Check out our upcoming events and workshops to get involved.
							</p>
						</div>
					</div>

					<Suspense fallback={<PlaceholderEvents />}>
						<Cart />
					</Suspense>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container space-y-12 px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Discover the Power of HerScript
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								HerScript offers a range of programs and resources to help young women develop their
								skills, build a strong network, and share their stories.
							</p>
						</div>
					</div>
					<div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
						<div className="grid gap-1">
							<div className="flex items-center gap-2">
								<HandIcon className="h-6 w-6 text-primary" />
								<h3 className="text-lg font-bold">Learn New Skills</h3>
							</div>
							<p className="text-sm text-muted-foreground">
								Attend workshops and seminars to develop in-demand technical skills and boost your
								confidence.
							</p>
						</div>
						<div className="grid gap-1">
							<div className="flex items-center gap-2">
								<NetworkIcon className="h-6 w-6 text-primary" />
								<h3 className="text-lg font-bold">Build a Network</h3>
							</div>
							<p className="text-sm text-muted-foreground">
								Connect with like-minded peers, mentors, and industry professionals to expand your
								opportunities.
							</p>
						</div>
						<div className="grid gap-1">
							<div className="flex items-center gap-2">
								<BookIcon className="h-6 w-6 text-primary" />
								<h3 className="text-lg font-bold">Share Your Story</h3>
							</div>
							<p className="text-sm text-muted-foreground">
								Inspire others by sharing your journey and experiences in the tech industry.
							</p>
						</div>
					</div>
					<div className="flex justify-center flex-col sm:flex-row items-start gap-4">
						<Link
							href={`https://dev.jonze.co/user/signup/${process.env.NEXT_PUBLIC_JONZE_ORG}?callbackUrl=${process.env.NEXT_PUBLIC_URL}`}
							className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
							prefetch={false}
						>
							Join HerScript
						</Link>
						<Link
							href="#"
							className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
							prefetch={false}
						>
							Learn More
						</Link>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container space-y-12 px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Become a Sponsor</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Support our mission to empower young women in tech. Reach out to us at
								herscript@example.com to learn more about sponsorship opportunities.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32 bg-muted bg-gradient-to-b from-background">
				<div className="mx-auto w-full max-w-sm space-y-2">
					<div className="space-y-3">
						<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
							Connect with HerScript
						</h2>
						<p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Follow us on social media to stay up-to-date on our latest events, programs, and
							community updates.
						</p>
					</div>
					<div className="flex gap-5 justify-center">
						<Link
							href="#"
							className="inline-flex items-center justify-center rounded-full bg-primary p-3 text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
							prefetch={false}
						>
							<TwitterIcon className="h-5 w-5" />
							<span className="sr-only">Twitter</span>
						</Link>
						<Link
							href="https://www.instagram.com/untherscript"
							target="_blank"
							className="inline-flex items-center justify-center rounded-full bg-primary p-3 text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
							prefetch={false}
						>
							<InstagramIcon className="h-5 w-5" />
							<span className="sr-only">Instagram</span>
						</Link>
						<Link
							href="https://www.linkedin.com/company/herscript/"
							target="_blank"
							className="inline-flex items-center justify-center rounded-full bg-primary p-3 text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
							prefetch={false}
						>
							<LinkedinIcon className="h-5 w-5" />
							<span className="sr-only">LinkedIn</span>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}

function PlaceholderEvents() {
	return (
		<div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
			<Card className="h-72 animate-pulse"></Card>
			<Card className="h-72 animate-pulse"></Card>
			<Card className="h-72 animate-pulse"></Card>
		</div>
	);
}

async function Cart() {
	const jonze_api_key = process.env.JONZE_API_KEY ?? '';
	const options = { method: 'GET', headers: { 'x-api-key': process.env.JONZE_API_KEY ?? '' } };

	const callbackUrl = process.env.NEXT_PUBLIC_URL;
	const response = await fetch(
		`https://${jonze_api_key.includes('prod') ? 'api' : 'dev-api'}.jonze.co/events?limit=6`,
		options
	);
	if (!response.ok) {
		return <>ERROR</>;
	}
	const result: any[] = await response.json();
	console.log(result.map((element) => element.id));

	return (
		<div className="mx-auto sm:grid items-start gap-8 sm:max-w-4xl md:grid-cols-2  lg:max-w-5xl xl:grid-cols-3">
			{result.map((element: any, idx) => (
				<Card key={idx} className="my-2 max-w-xl w-72 h-64 relative">
					<CardHeader>
						<CardTitle>{element.name}</CardTitle>
						<CardDescription>{element.description}</CardDescription>
					</CardHeader>
					<CardContent className="absolute bottom-0">
						<div className="flex items-center gap-2 text-sm ">
							<CalendarIcon className="h-4 w-4" />
							<span>
								{new Date(element.start).toLocaleDateString('en-US', {
									month: 'long',
									day: 'numeric',
									year: 'numeric'
								})}
							</span>
						</div>
						<div className="flex items-center gap-2 text-sm">
							<ClockIcon className="h-4 w-4" />
							<span>
								{new Date(element.start).toLocaleTimeString('en-US', {
									minute: 'numeric',
									hour: '2-digit',
									hour12: true
								})}{' '}
								-{' '}
								{new Date(element.end).toLocaleTimeString('en-US', {
									minute: 'numeric',
									hour: '2-digit',
									hour12: true
								})}
							</span>
						</div>
						<div className="flex items-center gap-2 text-sm">
							<LocateIcon className="h-4 w-4" />
							<span>Campus Building A</span>
						</div>
					</CardContent>
				</Card>
			))}

			<Button className="text-center col-span-3 mx-auto">
				<Link href="/events">See More</Link>
			</Button>
		</div>
	);
}

function BookIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
		</svg>
	);
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M8 2v4" />
			<path d="M16 2v4" />
			<rect width="18" height="18" x="3" y="4" rx="2" />
			<path d="M3 10h18" />
		</svg>
	);
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<polyline points="12 6 12 12 16 14" />
		</svg>
	);
}

function HandIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
			<path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
			<path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
			<path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
		</svg>
	);
}

function LocateIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="2" x2="5" y1="12" y2="12" />
			<line x1="19" x2="22" y1="12" y2="12" />
			<line x1="12" x2="12" y1="2" y2="5" />
			<line x1="12" x2="12" y1="19" y2="22" />
			<circle cx="12" cy="12" r="7" />
		</svg>
	);
}

function NetworkIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect x="16" y="16" width="6" height="6" rx="1" />
			<rect x="2" y="16" width="6" height="6" rx="1" />
			<rect x="9" y="2" width="6" height="6" rx="1" />
			<path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
			<path d="M12 12V8" />
		</svg>
	);
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
		</svg>
	);
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
			<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
			<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
		</svg>
	);
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
			<rect width="4" height="12" x="2" y="9" />
			<circle cx="4" cy="4" r="2" />
		</svg>
	);
}
