import {useEffect, useRef} from 'react';

import HorizontalLayout from './HorizontalLayout';
import {type LayoutProps} from './types';
import VerticalLayout from './VerticalLayout';

const Layout = (props: LayoutProps) => {
	const {children, hidden, settings, saveSettings} = props;

	const isDrawerCollapsed = useRef(settings.navCollapsed);

	useEffect(() => {
		if (hidden) {
			if (settings.navCollapsed) {
				saveSettings({...settings, navCollapsed: false, layout: 'vertical'});
				isDrawerCollapsed.current = true;
			}
		} else if (isDrawerCollapsed.current) {
			saveSettings({...settings, navCollapsed: true, layout: settings.lastLayout});
			isDrawerCollapsed.current = false;
		} else if (settings.lastLayout !== settings.layout) {
			saveSettings({...settings, layout: settings.lastLayout});
		}
	}, [hidden] );

	if (settings.layout === 'horizontal') {
		return <HorizontalLayout {...props}>{children}</HorizontalLayout>;
	}

	return <VerticalLayout {...props}>{children}</VerticalLayout>; 
};

export default Layout;