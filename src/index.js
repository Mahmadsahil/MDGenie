import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import GetRequirement from './Component/GetReqiurment';
import { Provider } from 'react-redux';
import Store from './ReduxStore/Store';
import HeaderShimmer from './Shimmer/HeaderShimmer';
import ProductCardListShimmer from './Shimmer/ProductCardListShimmer';
import GetRequirmentShimmer from './Shimmer/GetRequirmentShimmer';
import ItemsAllDetailShimmer from './Shimmer/ItemsAllDetailShimmer';
const ItemDetails = lazy(() => import('../src/Component/ItemDetails'))
const App = lazy(() => import('./App'))
const Header = lazy(() => import('./Component/Header'))

const AppLayout = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <Provider store={Store}>
        <Suspense fallback={<HeaderShimmer />}>
          <Header />
        </Suspense>
        <Outlet />
      </Provider>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <>
          <Suspense fallback={<ProductCardListShimmer />}>
            <App />
          </Suspense>
        </>
      },
      {
        path: `/searchRequirment/:Productname`,
        element: <>
          <Suspense fallback={<GetRequirmentShimmer />}>
            <GetRequirement />
          </Suspense>
        </>
      },
      {
        path: `//productDetails/:brand`,
        element: <>
          <Suspense fallback={<ItemsAllDetailShimmer />}>
            <ItemDetails />
          </Suspense>
        </>
      },

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
