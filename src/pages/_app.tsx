import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../utils/createEmotionCache';
import lightTheme from '@/theme/lightTheme';
import darkTheme from '@/theme/darkTheme';
import { ContextProvider } from '@/context/ContextProvider';
import { useColorMode } from '@/context/ColorModeContext';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ContextProvider>
        <App pageProps={pageProps} Component={Component} />
        </ContextProvider>
    </CacheProvider>
  );
}

export const App = ({pageProps, Component}:any) => {
  const {mode} = useColorMode();

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
  )
}
