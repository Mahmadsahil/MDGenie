import React from 'react'
import linkIcon from '../Utils/images/link.png'
import { Link } from 'react-router-dom';

const ItemCard = ({ data, onClick }) => {

  const { full_name, price, brand } = data;

  return data && (
    <Link to={`/productDetails/${brand}`}>
      <div data-testid="ItemCard" className='relative w-72 md:w-56 flex flex-col  rounded shadow-md p-2 m-2 hover:scale-105 cursor-pointer
      transition ease ' onClick={onClick} >
        <p className='text-gray-800 mt-3'>{full_name}</p>
        <p className='text-sm font-semibold text-gray-800'>₹{price}</p>
        <p className='text-xs text-gray-700'>{brand}</p>
        <img className='absolute top-0 right-0 h-3 my-2 mx-1 hover:scale-105' src={linkIcon} alt='link icon' />
      </div>
    </Link>
  )
}

export default ItemCard;