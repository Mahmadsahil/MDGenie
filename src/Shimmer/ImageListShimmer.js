import React from 'react'

const ImageListShimmer = () => {
    return (
        <div className='w-11/12 h-14 md:w-2/12 md:h-96 flex md:flex-col gap-3 items-center justify-center'>
            <div className='h-12 w-12 bg-slate-300 rounded animate-pulse'></div>
            <div className='h-12 w-12 bg-slate-300 rounded animate-pulse'></div>
            <div className='h-12 w-12 bg-slate-300 rounded animate-pulse'></div>
            <div className='h-12 w-12 bg-slate-300 rounded animate-pulse'></div>
            <div className='h-12 w-12 bg-slate-300 rounded animate-pulse'></div>
            <div className='h-12 w-12 bg-slate-300 rounded animate-pulse'></div>
        </div>
    )
}

export default ImageListShimmer