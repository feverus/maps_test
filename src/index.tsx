import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import App from './components/app';
import storeAdressAndMap from './store/storeAdressAndMap'

import  './index.module.scss'

const stores = {
  storeAdressAndMap,
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App page='/' />,
  },
  {
    path: "adress-and-map",
    element: <App page='add_offer' />
  },
  {
    path: "show-objects-on-map",
    element: <App page='offers' />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider {...stores}>
    <RouterProvider router={router} />
  </Provider>
)