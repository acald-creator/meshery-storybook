import { wrapper } from '@/store/store';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  console.log("rest: ", pageProps);
  const { store } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}