// pages/_app.js
import { Provider } from 'react-redux';
import store from '../store'; // Adjust the path to your store file
import '../styles/globals.css'; // Import global styles if any

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
