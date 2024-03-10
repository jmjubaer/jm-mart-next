import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import React from 'react';

const BestSeller = async() => {
    const res = await fetch("http://localhost:3000/api/products");
    const products = await res.json();
    const bestSeller = products.filter(product => product?.bestSeller)
    return (
        <section className='my-20 jm_container'>
            <SectionTitle title={"BEST SELLER"}></SectionTitle>
            <div className="mt-10 grid grid-cols-4 gap-6">
                {
                bestSeller?.map((product) => (
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
        </section>
    );
};

export default BestSeller;