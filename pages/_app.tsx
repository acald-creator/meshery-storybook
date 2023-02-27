import '@/styles/globals.css';
import {CacheProvider, type EmotionCache} from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {Provider} from 'react-redux';

import {wrapper} from '@/features/store/store';
import createEmotionCache from '@/styles/createEmotionCache';
import lightTheme from '@/styles/themes/lightTheme';

import {AuthProvider} from './auth/AuthContext';

const clientSideEmotionCache = createEmotionCache();

type PageProps = {
	emotionCache?: EmotionCache;
} & AppProps;

export default function App({Component, emotionCache = clientSideEmotionCache, ...rest}: Omit<AppProps, 'pageProps'> & PageProps) {
	console.log('rest: ', rest);
	const {store, props} = wrapper.useWrappedStore(rest);

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
			</Head>
			<ThemeProvider theme={lightTheme}>
				<CssBaseline />
				<Provider store={store}>
					<AuthProvider>
						<Component {...props.pageProps} />
					</AuthProvider>
				</Provider>
			</ThemeProvider>
		</CacheProvider>
	);
}
