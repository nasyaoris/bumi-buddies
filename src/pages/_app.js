import React from 'react';
import { CacheProvider } from '@emotion/react';
import PropTypes from 'prop-types';
import Head from "next/head";
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../utils/createEmotionCache';
import theme from './../app/styles/theme/theme';
import '../app/styles/globals.css';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import SiteLayout from "../app/components/SiteLayout"
import "animate.css/animate.min.css";
import 'react-animation/dist/keyframes.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <>
    <Head>
        <title>Bumi Buddies</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SiteLayout>
          <Component {...pageProps} />
        </SiteLayout>
      </ThemeProvider>
    </CacheProvider>
    </>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};