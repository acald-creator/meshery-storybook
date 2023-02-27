import NoSsr from '@mui/material/NoSsr';
import React, {type ReactNode} from 'react';

type ProviderLayoutProps = {
	children: ReactNode;
};

export default function ProviderLayout({children}: ProviderLayoutProps) {
	return (
		<>
			<NoSsr>
				<div data-cy='root' style={{padding: '170px 0px', textAlign: 'center'}}>
					{children}
				</div>
			</NoSsr>
		</>
	);
}
