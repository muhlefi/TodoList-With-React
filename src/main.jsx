import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './dataservices/store.js';
import '@radix-ui/themes/styles.css'; // Pastikan Anda mengimpor CSS untuk Radix UI
import { Theme } from '@radix-ui/themes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Theme>
      <App />
    </Theme>
  </Provider>
);
