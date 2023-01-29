import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react'
import App from './components/app';
import storeAdressAndMap from './store/storeAdressAndMap'

import  './index.module.scss'

const stores = {
  storeAdressAndMap,
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider {...stores}>
    <App />
  </Provider>
)