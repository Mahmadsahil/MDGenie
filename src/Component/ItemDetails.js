import React, { useState } from 'react'
import useGetImages from '../Hooks/useGetImages';
import { useSelector } from 'react-redux';
import ImageListShimmer from '../Shimmer/ImageListShimmer';
import ItemTxtDetailsShimmer from '../Shimmer/ItemTxtDetailsShimmer';
import ReactImageMagnify from 'react-image-magnify';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const ItemDetails = () => {
  const ProductData = useSelector(state => state.item.itemData);
    const { brand, full_name, key_features, model, price, rating, colors, description, about_company } = ProductData;
    useGetImages(full_name);
    const ProductImage = useSelector(state => state.item.itemImage);
  const [MainImage, setMainImage] = useState([])

    return (
        <>
            <div className='w-12/12 h-screen flex-col items-center flex md:flex-row md:justify-center overflow-hidden py-4'>

                {/* Product images */}
                <div className='w-11/12 md:w-6/12 flex flex-col-reverse md:flex-row items-center gap-3 md:gap-6 md:pr-4'>

                    <div className='w-12/12 h-14 md:w-2/12 md:h-96 flex md:flex-col py-2 items-center  gap-4 overflow-x-auto md:overflow-y-scroll'>
                        {ProductImage.length === 0 || (ProductImage.length !== 0 && ProductImage.searchParameters.q !== full_name) ?
                            <ImageListShimmer />
                            :
                            <div className='w-12/12 md:w-10/12 flex md:flex-col gap-3 '>
                                {ProductImage?.images.map(image => image && (
                                    <LazyLoadImage src={image.imageUrl} loading="lazy" effect="blur" className='h-14 w-16 md:w-14 md:h-14 cursor-pointer ' alt='img' onClick={() => setMainImage(image.imageUrl)} />
                                ))}


                            </div>
                        }
                    </div>


                    <div className='w-full h-60 md:h-96  md:w-9/12  flex justify-center items-center mt-2 md:mt-0 md:p-0 overflow-hidden md:overflow-visible'>
                        {
                            ProductImage.length === 0 || (ProductImage.length !== 0 && ProductImage.searchParameters.q !== full_name) ?
                                <div className='w-full h-full md:w-96 md:h-80 rounded bg-slate-300 animate-pulse'></div>
                                :
                                // <img src={MainImage.length === 0 ? ProductImage?.images[0]?.imageUrl : MainImage} className='h-52 md:h-96' alt='img' />
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'Product magnify',
                                        isFluidWidth: true,
                                        src: MainImage.length === 0 ? ProductImage?.images[0]?.imageUrl : MainImage,
                                    },
                                    largeImage: {
                                        src: MainImage.length === 0 ? ProductImage?.images[0]?.imageUrl : MainImage,
                                        width: 1400,
                                        height: 1400
                                    }
                                }} />

                        }

                    </div>
                </div>

                {/* Product Informations */}
                {ProductData.length === 0 ?
                    <ItemTxtDetailsShimmer />
                    :
                    <div className='w-11/12 md:w-6/12 md:h-[100vh] flex flex-col gap-5 px-2 py-8 overflow-y-scroll'>
                        <header className='text-slate-800 font-medium text-center'>{brand}</header>
                        <div className='flex flex-col gap-2'>
                            <p className='text-xl md:text-3xl text-slate-800'>{full_name}</p>
                            <div className='text-slate-600 flex gap-2'>Model :<p>{model}</p></div>
                        </div>
                        <p className='text-2xl font-semibold'>₹ {price}</p>

                        <div className='w-11 text-sm'><p className='flex justify-center text-sm p-1 bg-green-700 text-center text-white rounded'>{rating} ★</p></div>

                        <div className='flex gap-1 text-sm text-slate-700'>
                            <p className='text-slate-800 font-semibold'>Colors:</p>{colors}</div>

                        <div className='flex flex-col'>
                            <p className='font-semibold mb-1'>Features :</p>
                            {key_features.map(features => <li key={features} className=' text-sm text-slate-800'>{features}</li>)}
                        </div>


                        <div className='flex flex-col gap-1  text-sm text-slate-700'>
                            <p className='text-slate-800 font-semibold'>Description :</p>{description}</div>

                        <div className='flex flex-col gap-1  text-sm text-slate-700'>
                            <p className='text-slate-800 font-semibold'>Company :</p>{about_company}</div>
                    </div>}
            </div>


        </>)
}

export default ItemDetails;



