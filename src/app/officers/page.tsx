/* eslint-disable @next/next/no-img-element */
'use client';
import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
export default function Component() {
	const officers = [
		{
			name: 'Chiedza Dinga',
			class: 'Class of 2025',
			role: 'Co-President',
			major: 'Computer Science',
			imgSrc: '/officers/co-pres-chi.jpg'
		},
		{
			name: 'Celine Ajayi',
			class: 'Class of 2025',
			role: 'Co-President',
			major: 'Business Computer Information Systems',
			imgSrc: '/officers/co-pres-celine.jpg'
		},
		{
			name: 'Michelle Iyiegbu',
			class: 'Class of 2026',
			role: 'Vice President',
			major: 'Computer Science',
			imgSrc: '/officers/vice-pres.jpg'
		},
		{
			name: 'Victoria Oladimeji',
			class: 'Class of 2025',
			role: 'Treasurer',
			major: 'Business Computer InformationSystems',
			imgSrc: '/officers/treasurer.jpg'
		},
		{
			name: 'Marymagdilane Cudjoe',
			class: 'Class of 2027',
			role: 'Secretary',
			major: 'Information Technology | Cybersecurity/Data Science',
			imgSrc: '/officers/secretary.jpg'
		},
		{
			name: 'Paula Abyeman',
			class: 'Class of 2025',
			role: 'Co-Programming & Events Chair',
			major: 'Information Systems | Marketing Track',
			imgSrc: '/officers/event-chair.jpg'
		},
		{
			name: 'Favour Asogwa',
			class: 'Class of 2026',
			role: 'Professional Developments Chair',
			major: 'Business Copmuter Information Systems',
			imgSrc: '/officers/prof-chair.jpg'
		},
		{
			name: 'Oluwaseun Seriki',
			class: 'Class of 2027',
			role: 'Public Relatiosn Chair',
			major: 'International Business | Advertising',
			imgSrc: '/officers/pr-chair.jpg'
		},
		{
			name: 'Samerawet Gorfe',
			class: 'Class of 2026',
			role: 'Corporate Liaison',
			major: 'Computer Science',
			imgSrc: '/officers/corp-chair.jpg'
		}
	];
	return (
		<section className="flex flex-col lg:flex-row">
			<aside className="mt-10 lg:sticky top-0 h-auto lg:h-screen">
				<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center my-3">
					Meet the Officers
				</h1>
				<Carousel
					className="max-w-[15rem] sm:max-w-md lg:max-w-full  p-0 lg:mx-40 mx-auto "
					opts={{
						loop: true
					}}
					plugins={[
						Autoplay({
							delay: 2000
						})
					]}
				>
					<CarouselContent>
						{Array.from({ length: 2 }).map((_, index) => (
							<CarouselItem key={index}>
								<div className="p-1">
									<img
										src={`/officers/group-pictures/${index + 1}.jpg`}
										alt=""
										className="rounded-lg"
									/>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</aside>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 ">
				{officers.map((officer, idx) => (
					<div key={idx} className="bg-card p-6 rounded-lg shadow-sm h-full">
						<div className="flex flex-col items-center gap-4">
							<img
								src={officer.imgSrc}
								alt={officer.name}
								width={600}
								height={600}
								className="rounded-md aspect-square object-cover"
							/>
							<div>
								<h3 className="text-lg font-medium">{officer.name}</h3>
								<p className="text-muted-foreground text-sm">{officer.role}</p>
							</div>
						</div>
						<div className="mt-4 space-y-1 text-sm text-muted-foreground">
							<p>{officer.class}</p>
							<p>{officer.major}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
