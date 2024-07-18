import React, { useState, useRef, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import ProductItems from '../Utils/ProductItems.json';
import useGeneretedData from '../Hooks/useGeneretedData';
import ItemListShimmer from '../Shimmer/ItemListShimmer';
const ItemList = lazy(() => import('./ItemList'))

const GetRequirement = () => {
  const { Productname } = useParams();

  const { Type, Brand, Reason } = ProductItems.Products[Productname];


  const [formValues, setFormValues] = useState({
    device: '',
    company: '',
    reason: '',
    price: '',
  });

  const submitFormValuesRef = useRef(null);
  const [submittedData, setSubmittedData] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const { Products, loading } = useGeneretedData(submittedData);


  const handleSubmit = (e) => {
    e.preventDefault();
    submitFormValuesRef.current = formValues;
    setSubmittedData(formValues);
  };


  return (
    <div className='relative w-full flex flex-col items-center'>
      <div className='w-11/12 flex flex-col items-center mt-6 gap-4 '>
        <header className='text-2xl md:text-4xl text-center text-gray-600 font-900 m-2'>Find Perfect {Productname} For You</header>
        <form
          className='w-full flex flex-col md:flex-row justify-center items-center gap-3 px-4 py-6 bg-white border-2 border-gray-100 shadow-lg '
          onSubmit={handleSubmit}
        >
          <select
            name="device"
            required
            className='w-8/12 md:w-32 p-1 md:p-2 text-sm md:text-base text-gray-800 border rounded border-slate-300'
            value={formValues.device}
            onChange={handleChange}
          >
            {Type.map(device => <option className='text-sm md:text-base' key={device}>{device}</option>)}
          </select>

          <select
            name="company"
            required
            className='w-8/12 md:w-32 p-1 md:p-2 text-sm md:text-base text-gray-800 border rounded border-slate-300'
            value={formValues.company}
            onChange={handleChange}
          >
            {Brand.map(brand => <option className='text-sm md:text-base' key={brand}>{brand}</option>)}
          </select>

          <select
            name="reason"
            required
            className='w-8/12 md:w-32 p-1 md:p-2 text-sm md:text-base text-gray-800 border rounded border-slate-300'
            value={formValues.reason}
            onChange={handleChange}
          >
            {Reason.map(reason => <option className='text-sm md:text-base' key={reason}>{reason}</option>)}
          </select>

          <input
            name="price"
            required
            className='w-8/12 md:w-32 px-2 py-1 md:px-4 md:py-2 text-sm md:text-base border border-slate-300 rounded text-gray-800'
            type='number'
            placeholder='Price'
            value={formValues.price}
            onChange={handleChange}
          />

          <button className='w-32 px-2 py-1 md:px-4 cursor-pointer md:py-2 text-sm md:text-base text-white bg-blue-600 hover:bg-blue-500 rounded' type='submit'>
            Search
          </button>
        </form>
      </div>
      <Suspense fallback={<ItemListShimmer />}>
        <ItemList data={Products} loadingData={loading} />
      </Suspense>
    </div>
  );
};

export default GetRequirement;
