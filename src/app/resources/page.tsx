/**
 * v0 by Vercel.
 * @see https://v0.dev/t/k8HqcWgcMy6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter
} from '@/components/ui/card';

export default function Component() {
	return (
		<div className="container mx-auto py-12 px-4 md:px-6">
			<div className="grid gap-12">
				<section>
					<div className="flex items-center justify-between mb-6">
						<h2 className="text-2xl font-bold">Resume Bank</h2>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						<Card>
							<CardHeader>
								<CardTitle>Software Engineer Resume</CardTitle>
								<CardDescription>
									Experienced software engineer with expertise in full-stack development.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex items-center gap-2">
									<FileIcon className="w-4 h-4" />
									<span>resume-software-engineer.pdf</span>
								</div>
							</CardContent>
							<CardFooter>
								<Button variant="outline">Preview</Button>
								<Button>Download</Button>
							</CardFooter>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Marketing Manager Resume</CardTitle>
								<CardDescription>
									Proven track record in digital marketing and campaign management.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex items-center gap-2">
									<FileIcon className="w-4 h-4" />
									<span>resume-marketing-manager.pdf</span>
								</div>
							</CardContent>
							<CardFooter>
								<Button variant="outline">Preview</Button>
								<Button>Download</Button>
							</CardFooter>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Graphic Designer Resume</CardTitle>
								<CardDescription>
									Creative and versatile graphic designer with a strong portfolio.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex items-center gap-2">
									<FileIcon className="w-4 h-4" />
									<span>resume-graphic-designer.pdf</span>
								</div>
							</CardContent>
							<CardFooter>
								<Button variant="outline">Preview</Button>
								<Button>Download</Button>
							</CardFooter>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Project Manager Resume</CardTitle>
								<CardDescription>
									Experienced project manager with a proven track record of successful deliveries.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex items-center gap-2">
									<FileIcon className="w-4 h-4" />
									<span>resume-project-manager.pdf</span>
								</div>
							</CardContent>
							<CardFooter>
								<Button variant="outline">Preview</Button>
								<Button>Download</Button>
							</CardFooter>
						</Card>
					</div>
				</section>
				<section>
					<div className="flex items-center justify-between mb-6">
						<h2 className="text-2xl font-bold">Job Application Tracker Resources</h2>
						<div className="flex items-center gap-4">
							<Button>Explore Tools</Button>
						</div>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						<Card>
							<CardHeader>
								<CardTitle>Trello</CardTitle>
								<CardDescription>
									Organize and track your job applications with Trello&apos;s kanban-style boards.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex items-center gap-2">
									<TrelloIcon className="w-4 h-4" />
									<span>www.trello.com</span>
								</div>
							</CardContent>
							<CardFooter>
								<Button variant="outline">Learn More</Button>
								<Button>Try It</Button>
							</CardFooter>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Notion</CardTitle>
								<CardDescription>
									Use Notion&apos;s flexible workspace to manage your job search and application
									process.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex items-center gap-2">
									<NotebookIcon className="w-4 h-4" />
									<span>www.notion.so</span>
								</div>
							</CardContent>
							<CardFooter>
								<Button variant="outline">Learn More</Button>
								<Button>Try It</Button>
							</CardFooter>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Airtable</CardTitle>
								<CardDescription>
									Customize your job application tracking with Airtable&apos;s database-spreadsheet
									hybrid.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex items-center gap-2">
									<TableIcon className="w-4 h-4" />
									<span>www.airtable.com</span>
								</div>
							</CardContent>
							<CardFooter>
								<Button variant="outline">Learn More</Button>
								<Button>Try It</Button>
							</CardFooter>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Jobscan</CardTitle>
								<CardDescription>
									Optimize your resume and track your job applications with Jobscan&apos;s tools.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex items-center gap-2">
									<ScanIcon className="w-4 h-4" />
									<span>www.jobscan.co</span>
								</div>
							</CardContent>
							<CardFooter>
								<Button variant="outline">Learn More</Button>
								<Button>Try It</Button>
							</CardFooter>
						</Card>
					</div>
				</section>
				<section>
					<div className="flex items-center justify-between mb-6">
						<h2 className="text-2xl font-bold">Interview Prep</h2>
						<div className="flex items-center gap-4">
							<Button>Download All</Button>
						</div>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						<Card>
							<CardHeader>
								<CardTitle>Common Interview Questions</CardTitle>
								<CardDescription>
									Prepare for the most frequently asked interview questions.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex items-center gap-2">
									<FileIcon className="w-4 h-4" />
									<span>common-interview-questions.pdf</span>
								</div>
							</CardContent>
							<CardFooter>
								<Button>Download</Button>
							</CardFooter>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Salary Negotiation Guide</CardTitle>
								<CardDescription>Tips and strategies for negotiating your salary.</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex items-center gap-2">
									<FileIcon className="w-4 h-4" />
									<span>salary-negotiation-guide.pdf</span>
								</div>
							</CardContent>
							<CardFooter>
								<Button>Download</Button>
							</CardFooter>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Post-Interview Follow-ups</CardTitle>
								<CardDescription>
									Learn how to effectively follow up after an interview.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex items-center gap-2">
									<FileIcon className="w-4 h-4" />
									<span>post-interview-follow-ups.pdf</span>
								</div>
							</CardContent>
							<CardFooter>
								<Button>Download</Button>
							</CardFooter>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Behavioral Interview Tips</CardTitle>
								<CardDescription>Prepare for behavioral-based interview questions.</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex items-center gap-2">
									<FileIcon className="w-4 h-4" />
									<span>behavioral-interview-tips.pdf</span>
								</div>
							</CardContent>
							<CardFooter>
								<Button>Download</Button>
							</CardFooter>
						</Card>
					</div>
				</section>
			</div>
		</div>
	);
}

function FileIcon(props: React.SVGProps<SVGSVGElement>) {
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
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
		</svg>
	);
}

function FilterIcon(props: React.SVGProps<SVGSVGElement>) {
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
			<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
		</svg>
	);
}

function NotebookIcon(props: React.SVGProps<SVGSVGElement>) {
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
			<path d="M2 6h4" />
			<path d="M2 10h4" />
			<path d="M2 14h4" />
			<path d="M2 18h4" />
			<rect width="16" height="20" x="4" y="2" rx="2" />
			<path d="M16 2v20" />
		</svg>
	);
}

function ScanIcon(props: React.SVGProps<SVGSVGElement>) {
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
			<path d="M3 7V5a2 2 0 0 1 2-2h2" />
			<path d="M17 3h2a2 2 0 0 1 2 2v2" />
			<path d="M21 17v2a2 2 0 0 1-2 2h-2" />
			<path d="M7 21H5a2 2 0 0 1-2-2v-2" />
		</svg>
	);
}

function TableIcon(props: React.SVGProps<SVGSVGElement>) {
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
			<path d="M12 3v18" />
			<rect width="18" height="18" x="3" y="3" rx="2" />
			<path d="M3 9h18" />
			<path d="M3 15h18" />
		</svg>
	);
}

function TrelloIcon(props: React.SVGProps<SVGSVGElement>) {
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
			<rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
			<rect width="3" height="9" x="7" y="7" />
			<rect width="3" height="5" x="14" y="7" />
		</svg>
	);
}
