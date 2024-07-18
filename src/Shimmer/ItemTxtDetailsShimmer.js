import React from 'react'

const ItemTxtDetailsShimmer = () => {
    return (
        <div className='w-11/12 md:w-full md:h-[100vh] flex flex-col gap-12 px-2 py-8 animate-pulse'>
            <div className='h-2 md:h-3 w-10 rounded bg-slate-300 mx-auto'></div>
            <div className='h-4 w-40 rounded bg-slate-300 '></div>
            <div className='h-2 md:h-3 w-32 rounded bg-slate-300 '></div>
            <div className='h-4 w-28 rounded bg-slate-300 '></div>
            <div className='h-2 w-10 bg-slate-300 rounded'></div>
            <div className='h-2 md:h-3 w-8/12 bg-slate-300 my-1 rounded'></div>
            <div className='h-2 md:h-3 w-9/12 bg-slate-300 my-1 rounded'></div>
            <div className='h-2 md:h-3 w-8/12 bg-slate-300 my-1 rounded'></div>
            <div className='h-2 md:h-3 w-9/12 hidden md:block bg-slate-300 my-1 rounded'></div>
            <div className='h-2 md:h-3 w-9/12 hidden md:block bg-slate-300 my-1 rounded'></div>
        </div>
    )
}

export default ItemTxtDetailsShimmer