import Image from 'next/image';
import React from 'react';
import bg_image from "@/assets/bg-heading.jpg"
const ProductsPage = async() => {
    const res = await fetch("https://jm-mart-next.vercel.app/api/products");
    const products = await res.json();
    return (
        <div className=''>
            <div className=" relative w-full h-[150px]">
                <Image src={bg_image} alt='' className='h-[150px]'/>
                <div className="absolute top-0 left-0 flex items-center justify-center bg-gray-800 w-full h-full bg-opacity-40">
                    <p className='text-white font-semibold text-xl'>{"Collection"}</p>
                </div>
            </div>
            <div className="my-14 grid grid-cols-4 jm_container gap-6">
                {
                products?.map((product) => (
                    <div key={product?._id} className='cursor-pointer group'>
                        <div className="overflow-hidden relative w-full h-[380px]">
                            <Image src={product?.productImage} alt='Products image'width={300} height={500} className='h-[380px] object-cover group-hover:scale-125 duration-500'/>
                            <div className="absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-20 group-hover:opacity-100 opacity-0 duration-500 flex items-center  justify-center">
                                <div className="flex flex-col gap-3">
                                    <button className='px-5 py-2 font-medium bg-white rounded-full hover:bg-[#333] hover:text-white duration-500'>Quick View</button>
                                    <button className='px-5 py-2 font-medium bg-white rounded-full hover:bg-[#333] hover:text-white duration-500'>Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <h3 className='font-medium mt-2 text-gray-600'>{product?.productName}</h3>
                        <p className='text-gray-500'>${product?.price}.00</p>
                    </div>
                ))
                }
            </div>
        </div>
    );
};

export default ProductsPage;