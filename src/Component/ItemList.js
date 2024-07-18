import React, { lazy, Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItemData } from '../ReduxStore/itemSlice';
import ItemCardShimmer from '../Shimmer/ItemCardShimmer';
import SearchProductImage from '../Shimmer/SearchProductImage';
const ItemCard = lazy(() => import('./ItemCard'))

const ItemList = ({ data, loadingData }) => {
    const ProductsData = useSelector(state => state.item.ProductsData);
    const dispatch = useDispatch();

    if ((typeof loadingData === 'undefined') && (ProductsData.length === 0)) {
        return <SearchProductImage />
    }

    const handleClick = (item) => {
        dispatch(addItemData(item));
    };

    if (loadingData) {
        return <div  className='flex flex-col gap-4 items-center my-8'>
            <span className='text-slate-600'>Generating best products for you...</span>
            <div className='h-8 w-8 border-2 border-slate-200 border-t-blue-400 rounded-full animate-spin'></div>
        </div>
    }

    return (
        <div className='w-10/12 flex flex-wrap justify-center gap-4 mx-4 my-10'>
            {ProductsData.length !== 0 &&
                (
                    ProductsData && ProductsData[0] && ProductsData[0].map(item => (
                        <Suspense key={item.full_name} fallback={<ItemCardShimmer />}>
                            <ItemCard data={item} onClick={() => handleClick(item)} />
                        </Suspense>
                    ))
                )
            }
            <div>
            </div>
        </div >
    )
}

export default ItemList


