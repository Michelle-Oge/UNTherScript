import { CalendarIcon, ClockIcon, LocateIcon } from 'lucide-react';
import Link from 'next/link';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter
} from '@/components/ui/card';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Page = async () => {
	const jonze_api_key = process.env.JONZE_API_KEY ?? '';
	const options = { method: 'GET', headers: { 'x-api-key': process.env.JONZE_API_KEY ?? '' } };

	const callbackUrl = process.env.NEXT_PUBLIC_URL;
	const response = await fetch(
		`https://${jonze_api_key.includes('prod') ? 'api' : 'dev-api'}.jonze.co/events`,
		options
	);
	if (!response.ok) {
		console.log(await response.text());
		return <>ERROR</>;
	}
	const result: any[] = await response.json();
	console.log(result.map((element) => element));

	return (
		<div className="flex flex-col justify-center text-center items-center">
			<div className="p-5  ">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl "> Events</h2>
				<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
					Check out our events and workshops throughout the semester.
				</p>
			</div>

			<div className="mx-auto sm:grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-7xl lg:grid-cols-3 py-5 ">
				{result.map((element: any, idx) => (
					<Card key={idx} className="m-3">
						<CardHeader>
							<img
								src={element.image ?? '/placeholder.svg'}
								className="aspect-square object-cover rounded-md"
								alt="Event Picture"
							/>
							<CardTitle>{element.name}</CardTitle>
							<CardDescription>{element.description}</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="flex items-center gap-2 mb-2">
								{element.tags &&
									element.tags.names.map((tag: any, idx: any) => (
										<Badge key={idx} variant={'secondary'}>
											{tag}
										</Badge>
									))}
							</div>
							<div className="flex items-center gap-2 text-sm">
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
		</div>
	);
};

export default Page;
