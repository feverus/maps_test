import ReactDOM from 'react-dom/client'
import { Provider } from 'mobx-react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { CustomProvider as RsuiteProvider } from 'rsuite'
import ruRu from 'rsuite/cjs/locales/ru_RU.js'

import App from './components/app';
import storeAdressAndMap from './store/storeAdressAndMap'
import storeShowObjectsContent from './store/storeShowObjectsContent'

import  './index.module.scss'

const stores = {
  storeAdressAndMap,
  storeShowObjectsContent
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App page='/' />,
  },
  {
    path: "maps/",
    element: <App page='/' />,
  },
  {
    path: "maps/adress-and-map",
    element: <App page='add_offer' />
  },
  {
    path: "maps/show-objects-on-map",
    element: <App page='offers' />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider {...stores}>
    <RsuiteProvider locale={ruRu}>
      <RouterProvider router={router} />
    </RsuiteProvider>    
  </Provider>
)