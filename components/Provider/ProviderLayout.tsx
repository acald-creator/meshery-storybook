import React, {type ReactNode} from 'react';

type ProviderLayoutProps = {
	children: ReactNode;
};

export default function ProviderLayout({children}: ProviderLayoutProps) {
	return (
		<>
			{children}
		</>
	);
}
