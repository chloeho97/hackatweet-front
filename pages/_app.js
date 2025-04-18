import '../styles/globals.css';
import Head from 'next/head';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import tweets from '../reducers/tweets';
import users from '../reducers/users';
import likedTweet from '../reducers/likedTweet';


const store = configureStore({
  reducer: { tweets, users, likedTweet},
});


function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
