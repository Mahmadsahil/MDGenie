import React from 'react'
import ItemCardShimmer from './ItemCardShimmer'

const nums = [0, 1, 2, 3, 4, 5, 6, 7];

const ItemListShimmer = () => {
    return (
        <div className='w-10/12 flex flex-wrap justify-center gap-4 mx-4 my-10'>
            {
                nums.map(item => <ItemCardShimmer key={item} />)
            }

        </div>
    )
}

export default ItemListShimmer