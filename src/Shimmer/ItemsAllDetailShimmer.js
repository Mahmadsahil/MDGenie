import React from 'react'
import ItemTxtDetailsShimmer from './ItemTxtDetailsShimmer'
import ImageListShimmer from './ImageListShimmer'

const ItemsAllDetailShimmer = () => {
    return (
        <div className='w-full flex flex-col md:flex-row'>
            <div className='w-full flex flex-col-reverse md:flex-row items-center'>
                <ImageListShimmer />
                <div className='w-10/12 h-52 m-3 md:w-96 md:h-80 rounded bg-slate-300 animate-pulse'></div>
            </div>
            <ItemTxtDetailsShimmer />
        </div>
    )
}

export default ItemsAllDetailShimmer