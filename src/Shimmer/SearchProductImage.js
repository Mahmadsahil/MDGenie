import React from 'react'
import search from '../Utils/images/search.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const SearchProductImage = () => {
    return (
        <div data-testid="ItemList" className='w-full h-full flex flex-col justify-center items-center'>
            <LazyLoadImage className=' h-52 md:h-72' src={search} effect="blur" alt='search' loading="lazy"  />
        </div>
    )
}

export default SearchProductImage