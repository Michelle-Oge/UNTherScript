'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';

const Navbar = () => {
	const pathname = usePathname();

	const components: { title: string; href: string; description: string }[] = [
		{
			title: 'Become a Member',
			href: `https://dev.jonze.co/user/signup/${process.env.NEXT_PUBLIC_JONZE_ORG}?callbackUrl=${process.env.NEXT_PUBLIC_URL}${pathname}`,
			description: 'Join the org and be a part of the community'
		},
		{
			title: 'Become a Sponsor',
			href: 'mailto:herscript@example.com',
			description: 'Support our mission to empower young women in tech.'
		}
	];

	useEffect(() => {
		console.log(pathname);
	}, [pathname]);

	return (
		<header
			className={cn(
				'px-4 lg:px-6 h-14 flex items-center justify-start  gap-4',
				pathname === '/' ? ' bg-primary text-primary-foreground' : ''
			)}
		>
			<Link href="/" className="flex items-center justify-center" prefetch={false}>
				<img src="/logo.jpg" className="h-8 w-8 md:h-12 md:w-12 rounded-full object-cover" alt="" />
				<span className="sr-only">HerScript</span>
			</Link>
			<nav className=" flex gap-4 sm:gap-6">
				<NavigationMenu className="">
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger
								className={cn(pathname === '/' && 'bg-primary text-primary-foreground')}
							>
								About
							</NavigationMenuTrigger>
							<NavigationMenuContent className="z-99">
								<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
									<li className="row-span-3">
										<NavigationMenuLink asChild>
											<a
												className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
												href="/"
											>
												<img className="h-6 w-6 rounded-full" src="/logo.jpg" />
												<div className="mb-2 mt-4 text-lg font-medium">HerScript</div>
												<p className="text-sm leading-tight text-muted-foreground">
													Supporting and inspiring young women to pursue careers in technology.
												</p>
											</a>
										</NavigationMenuLink>
									</li>
									<ListItem href="/docs" title="Our Story">
										Find out why HerScript exists
									</ListItem>
									<ListItem href="/officers" title="Officers">
										Meet the Officers that make HerScript what it is
									</ListItem>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>

						<NavigationMenuItem>
							<Link href="/events" legacyBehavior passHref>
								<NavigationMenuLink
									className={cn(
										navigationMenuTriggerStyle(),
										pathname === '/' && 'bg-primary text-primary-foreground'
									)}
								>
									Events
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/resources" legacyBehavior passHref>
								<NavigationMenuLink
									className={cn(
										navigationMenuTriggerStyle(),
										pathname === '/' && 'bg-primary text-primary-foreground'
									)}
								>
									Resources
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger
								className={cn(pathname === '/' && 'bg-primary text-primary-foreground')}
							>
								Get Involved
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid w-[300px] gap-3 p-4  ">
									{components.map((component) => (
										<ListItem key={component.title} title={component.title} href={component.href}>
											{component.description}
										</ListItem>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</nav>
		</header>
	);
};

export default Navbar;

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
	({ className, title, children, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<a
						ref={ref}
						className={cn(
							'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
							className
						)}
						{...props}
					>
						<div className="text-sm font-medium leading-none">{title}</div>
						<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
					</a>
				</NavigationMenuLink>
			</li>
		);
	}
);
ListItem.displayName = 'ListItem';
