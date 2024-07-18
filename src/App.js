import React, { lazy, Suspense } from 'react';
import './index.css'; import './App.css';
import { Products } from './Utils/Constents';
import ItemCardShimmer from './Shimmer/ItemCardShimmer';
const ProductCard = lazy(() => import('./Component/ProductCard'));

const App = () => {

  return (
    <>
     <p className='text-center md:text-xl text-slate-700 font-semibold mt-8 py-6 px-8 '>
     "Unlock Your Perfect Pick: Dive into a world of possibilities. Find products that fit your style, budget, and dreams."
     </p>
    <div data-testid="appTest" className="w-10/12 h-full flex flex-wrap gap-5 md:gap-6 justify-center items-center p-4 my-8 ">
      {
        Products.map((product,idx) => (
          <Suspense key={product.Productname} fallback={<ItemCardShimmer />}>
            <ProductCard  data={product} />
          </Suspense>
        ))
      }
    </div>
      </>
  );
};

export default App;
