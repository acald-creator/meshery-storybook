import {type ReactNode} from 'react';

import {type Settings} from '../context/settingsContext';

export type BlankLayoutProps = {
	children: ReactNode;
};

export type LayoutProps = {
	children: ReactNode;
	hidden: boolean;
	settings: Settings;
	contentHeightFixed?: boolean;
	saveSettings: (values: Settings) => void;
};