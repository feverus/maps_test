import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react'
import Main from './components/main';
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
    <Main />
  </Provider>
)