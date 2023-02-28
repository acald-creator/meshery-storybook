import Head from 'next/head';

import CustomErrorMessage from '@/components/ErrorPage/CustomErrorMessage';

export default function Error() {
	return (
		<>
			<Head>
				<title>404 - Page Not Found</title>
			</Head>
			<CustomErrorMessage />
		</>
	);
}
