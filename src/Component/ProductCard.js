import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeProductImage, ResmoveProductData } from '../ReduxStore/itemSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProductCard = ({ data }) => {
    const dispatch = useDispatch();
    if (!data || !data.Productname || !data.ProductImagePath) {
        return null;
    }
    const { Productname, ProductImagePath } = data;

    const handleClick = () => {
        dispatch(ResmoveProductData(),removeProductImage())
    }

    return (
        <Link data-testid="ProductCard" to={`/searchRequirment/${Productname}`}>
            <div  className='transition w-32 md:w-48 flex flex-col text-center gap-3 md:gap-1 items-center border-2 border-gray-100 md:px-4 rounded shadow-md cursor-pointer hover:scale-105'
                onClick={handleClick}>
                <LazyLoadImage className='h-16 md:h-20 p-2 object-cover' src={ProductImagePath} effect="blur" loading="lazy" alt='product' />
                <span className='text-sm md:text-base'>{Productname}</span>
            </div>
        </Link>
    );
};

export default ProductCard;



