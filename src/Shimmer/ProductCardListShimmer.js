import React from 'react'
import ItemCardShimmer from './ItemCardShimmer'

const ProductCardListShimmer = () => {
    const nums = [0, 1, 2, 3, 4, 5, 6]
    return (
        <div className="w-10/12 h-full flex flex-wrap gap-5 md:gap-6 justify-center items-center p-4 my-8 ">
            {
                nums.map(item => <ItemCardShimmer key={item}/>)
            }
        </div>
    )
}

export default ProductCardListShimmer