'use client';
import React, { useEffect } from 'react';
import { toast } from 'sonner';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function URLToast() {
	const alredyMember = useSearchParams().has('already_member', 'true');
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		console.log(alredyMember);
		if (alredyMember) {
			console.log('HMMM');
			toast('You are already a member of HerScript');
			router.replace(pathname, {});
		}
	}, [alredyMember, router]);
	return <></>;
}
