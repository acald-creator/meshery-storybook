import type {Preview} from '@storybook/react';
import withMuiTheme from './with-mui-theme.decorator';

export const globalTypes = {
	theme: {
		name: 'Theme',
		title: 'Theme',
		description: 'Theme for your components',
		defaultValue: 'light',
		toolbar: {
			icon: 'paintbrush',
			dynamicTitle: true,
			items: [
				{value: 'light', left: '☀️', title: 'Light mode'},
				{value: 'dark', left: '🌙', title: 'Dark mode'},
			],
		},
	},
};

export const decorators = [withMuiTheme];

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: 'light',
		},
		actions: {argTypesRegex: '^on[A-Z].*'},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
