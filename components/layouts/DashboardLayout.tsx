import HeaderLayout from './HeaderLayout';
import {type DashboardLayoutProps} from './types';

export default function DashboardLayout({children}: DashboardLayoutProps) {
	return (
		<HeaderLayout>
			{children}
		</HeaderLayout>
	);
}
