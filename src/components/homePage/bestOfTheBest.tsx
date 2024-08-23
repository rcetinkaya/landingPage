import Link from 'next/link';
import React from 'react';

export function BestOfTheBest() {
    return (
        <div className="p-4 bg-[#0F172A]">
            <div className="w-full">
                <div className='flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-8'>
                    <span className='text-[32px] md:text-[40px] lg:text-[56px] text-white text-center md:text-left mb-4 md:mb-0'>
                        The best of the best
                    </span>
                    <div>
                        <Link
                            href="/signup"
                            className="px-4 rounded-lg py-2 border border-white text-white text-center"
                        >
                            Sign up now
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-[url('/icons/background.svg')] bg-cover bg-center bg-no-repeat my-8 w-full p-2">
                <div className='flex flex-col md:flex-row justify-around items-center gap-4 p-2'>
                    {Array(3).fill(0).map((_, index) => (
                        <div key={index} className="bg-[#0F172A] rounded-lg overflow-hidden shadow-md shadow-white max-w-full md:max-w-xs w-full">
                            <img
                                src={`/media/Picture${index > 0 ? index : ""}.png`}
                                alt="Shoes"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Title</h3>
                                <p className="text-white text-base md:text-lg mb-4">
                                    Egestas elit dui scelerisque et eu purus aliquam vitae habitasse.
                                </p>
                                <button className="flex w-full items-center gap-x-2 justify-center px-4 rounded-lg py-2 border border-white text-white">
                                    <img src="icons/basket.svg" />
                                    <span>Buy Now</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
