'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter
} from '@/components/ui/card';
import { CalendarIcon, ClockIcon, LocateIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Page = () => {
	const posts = [
		{
			id: 'evt_z66Ne28t73BoXTid',
			name: 'Spring Second GBM',
			start: '2023-02-10T01:00:00.000Z',
			end: '2023-02-10T05:59:00.000Z',
			description: 'Find Love o',
			image: 'https://ucarecdn.com/40b774d3-4575-44f4-9c1d-0a0bda8ccc8f/',
			orgId: 'org_01HT9631N7WP6BQDG8S55C1W8V',
			formId: null,
			createdAt: '2023-02-09T08:14:24.000Z',
			updatedAt: '2024-06-24T22:46:19.000Z'
		},
		{
			id: 'evt_n4hBx3gmZCTSaR3W',
			name: 'First Spring GBM',
			start: '2023-01-27T01:00:00.000Z',
			end: '2023-01-27T05:59:00.000Z',
			description: 'Welcome Back',
			image: 'https://ucarecdn.com/b49e5d02-b1fb-4568-9c99-167825512cbd/',
			orgId: 'org_01HT9631N7WP6BQDG8S55C1W8V',
			formId: null,
			createdAt: '2023-01-26T22:24:41.000Z',
			updatedAt: '2024-06-18T06:01:59.000Z'
		},
		{
			id: 'evt_utkeTNmRyi56CgnQ',
			name: 'Final General Meeting',
			start: '2022-12-02T01:00:00.000Z',
			end: '2022-12-02T05:59:00.000Z',
			description: "It's the Final Meeting!",
			image: 'https://ucarecdn.com/061cc4a6-fc96-4339-a8b3-fbd430acd125/',
			orgId: 'org_01HT9631N7WP6BQDG8S55C1W8V',
			formId: null,
			createdAt: '2022-12-01T21:17:18.000Z',
			updatedAt: '2024-06-24T22:46:04.000Z'
		},
		{
			id: 'evt_vu44q8HKak9jQ79W',
			name: 'Seventh General Body Meeting',
			start: '2022-11-18T01:00:00.000Z',
			end: '2022-11-18T05:59:00.000Z',
			description: "Let's Talk",
			image: 'https://ucarecdn.com/73c2a4b3-94b1-43c2-bb4b-7336ef1cd5cf/',
			orgId: 'org_01HT9631N7WP6BQDG8S55C1W8V',
			formId: null,
			createdAt: '2022-11-17T08:04:11.000Z',
			updatedAt: '2024-06-26T02:31:33.000Z'
		},
		{
			id: 'evt_d7iiLA82jrn4pQrX',
			name: 'Fall Ball 2022',
			start: '2022-11-06T00:00:00.000Z',
			end: '2022-11-06T02:00:00.000Z',
			description: 'Fall Ball is Here!',
			image: 'https://ucarecdn.com/76aa0bf4-a7ab-4919-9527-6628588f9055/',
			orgId: 'org_01HT9631N7WP6BQDG8S55C1W8V',
			formId: null,
			createdAt: '2022-10-17T18:38:26.000Z',
			updatedAt: '2024-06-18T03:56:56.000Z'
		},
		{
			id: 'evt_qzqC9VWFXCjk7L7T',
			name: 'Sixth General Body Meeting',
			start: '2022-11-04T00:00:00.000Z',
			end: '2022-11-04T04:59:00.000Z',
			description: 'Come show your moves!',
			image: 'https://ucarecdn.com/4ac3212c-9be2-49fa-862a-4eaa6da10649/',
			orgId: 'org_01HT9631N7WP6BQDG8S55C1W8V',
			formId: null,
			createdAt: '2022-11-03T23:48:54.000Z',
			updatedAt: '2024-06-26T02:31:39.000Z'
		},
		{
			id: 'evt_zHiq8qEGJnbJrSmC',
			name: 'Fifth General Meeting',
			start: '2022-10-21T00:00:00.000Z',
			end: '2022-10-21T04:59:00.000Z',
			description: 'Trick or Treat!',
			image: 'https://ucarecdn.com/c1b4133b-39b4-4cb5-ac00-ff7709149715/',
			orgId: 'org_01HT9631N7WP6BQDG8S55C1W8V',
			formId: null,
			createdAt: '2022-10-12T02:19:43.000Z',
			updatedAt: '2024-06-26T02:31:44.000Z'
		},
		{
			id: 'evt_kqQh77HkLmy7n6Yi',
			name: 'Fourth General Body Meeting',
			start: '2022-10-07T00:00:00.000Z',
			end: '2022-10-07T04:59:00.000Z',
			description: 'Show us your talent',
			image: 'https://ucarecdn.com/599ed0a6-d81d-445b-8067-6586fc114916/',
			orgId: 'org_01HT9631N7WP6BQDG8S55C1W8V',
			formId: null,
			createdAt: '2022-10-06T22:26:20.000Z',
			updatedAt: '2024-06-26T02:31:49.000Z'
		},
		{
			id: 'evt_1j5vUppRdotn1bPG',
			name: 'Third General Body Meeting',
			start: '2022-09-23T00:00:00.000Z',
			end: '2022-09-23T05:00:00.000Z',
			description: 'Volunteering Meeting',
			image: 'https://ucarecdn.com/cab31d54-8b29-45ae-bed1-c4aa58935ffa/',
			orgId: 'org_01HT9631N7WP6BQDG8S55C1W8V',
			formId: null,
			createdAt: '2022-09-22T17:51:46.000Z',
			updatedAt: '2024-06-26T02:32:01.000Z'
		},
		{
			id: 'evt_YJijprvTSg3EQchR',
			name: 'Movie Night',
			start: '2022-09-15T23:30:00.000Z',
			end: '2022-09-16T05:00:00.000Z',
			description: 'Members Only Movie Night',
			image: 'https://ucarecdn.com/f92f5422-99cd-4f8d-9d39-5d115fa93f3f/',
			orgId: 'org_01HT9631N7WP6BQDG8S55C1W8V',
			formId: null,
			createdAt: '2022-09-07T01:15:55.000Z',
			updatedAt: '2024-06-26T02:32:16.000Z'
		},
		{
			id: 'evt_tbVLuMJ6yKWMCG5V',
			name: 'Second General Body Meeting',
			start: '2022-09-09T00:00:00.000Z',
			end: '2022-09-09T05:00:00.000Z',
			description: "Let's Discuss",
			image: 'https://ucarecdn.com/655c8fe3-d606-43a9-8938-a3b1bfa26800/',
			orgId: 'org_01HT9631N7WP6BQDG8S55C1W8V',
			formId: null,
			createdAt: '2022-09-06T05:06:36.000Z',
			updatedAt: '2024-06-18T05:49:11.000Z'
		}
	];
	const firstColumn = posts.filter((_, index) => index % 3 === 0);
	const secondColumn = posts.filter((_, index) => index % 3 === 1);
	const thirdColumn = posts.filter((_, index) => index % 3 === 2);

	return (
		<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-20">
			<div className="grid gap-4">
				{firstColumn.map((post) => (
					<Article key={post.id} post={post} />
				))}
			</div>
			<div className="grid gap-4">
				{secondColumn.map((post) => (
					<Article key={post.id} post={post} />
				))}
			</div>
			<div className="grid gap-4">
				{thirdColumn.map((post) => (
					<Article key={post.id} post={post} />
				))}
			</div>
		</div>
	);
};

function Article({ post }: { post: any }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Tech Workshop</CardTitle>
				<CardDescription>Learn the latest web development skills.</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex items-center gap-2 text-sm">
					<CalendarIcon className="h-4 w-4" />
					<span>June 15, 2024</span>
				</div>
				<div className="flex items-center gap-2 text-sm">
					<ClockIcon className="h-4 w-4" />
					<span>6:00 PM - 8:00 PM</span>
				</div>
				<div className="flex items-center gap-2 text-sm">
					<LocateIcon className="h-4 w-4" />
					<span>Campus Building A</span>
				</div>
			</CardContent>
			<CardFooter>
				<Button variant="secondary">Mark Attendance</Button>
			</CardFooter>
		</Card>
	);
}

export default Page;
