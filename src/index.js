import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import reduxStore from './redux/store';
import { SkeletonTheme } from 'react-loading-skeleton'
import 'antd/dist/antd';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const { store, persistor } = reduxStore()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >
      <BrowserRouter>
        <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
          <ToastContainer
            theme="dark"
            position="top-center"
            autoClose={3000}
            closeOnClick
            pauseOnHover={false}
          />
          <App />
        </SkeletonTheme>
      </BrowserRouter>
    </PersistGate>
  </Provider>

);

