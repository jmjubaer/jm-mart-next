import { libre_Baskerville } from '@/utils/Fonts';
import React from 'react';

const SectionTitle = ({title}) => {
    return (
        <div className="">
        <h2 className='relative mx-auto w-fit uppercase font-semibold text-2xl after:-right-28 after:w-20 after:h-0.5 after:absolute after:top-1/2 after:-translate-y-1/2 after:bg-black before:w-20 before:h-0.5 before:absolute before:top-1/2 before:-translate-y-1/2 before:bg-black before:-left-28'>{title}</h2>
        <p className={`${libre_Baskerville.className} italic text-gray-600 text-center mt-1 text-sm`}>Top view in this week</p>
    </div>
    );
};

export default SectionTitle;