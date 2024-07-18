import React from 'react'

const GetRequirmentFormShimmer = () => {
    return (
        <div className='w-full md:h-24 bg-slate-100 flex flex-col md:flex-row gap-3 py-4 md:gap-12 justify-center items-center'>
            <div className='h-6 w-48 md:h-10  md:w-28 rounded animate-pulse bg-slate-300'></div>
            <div className='h-6 w-48 md:h-10  md:w-28 rounded animate-pulse bg-slate-300'></div>
            <div className='h-6 w-48 md:h-10  md:w-28 rounded animate-pulse bg-slate-300'></div>
            <div className='h-6 w-36 md:h-10  md:w-28 rounded animate-pulse bg-slate-300'></div>
        </div>
    )
}

export default GetRequirmentFormShimmer;