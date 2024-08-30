import Link from 'next/link';
import React from 'react';

export function WhyJoin() {
    return (
        <div className="w-full p-4 lg:flex lg:justify-around">
            <div className="bg-[url('/media/DecoImage.png')] bg-contain bg-no-repeat bg-right p-16">
                <div className="flex flex-col lg:flex-row items-center relative">
                    <div className="absolute inset-0 bg-white opacity-10 shadow-md"></div>
                    <div className="flex flex-col flex-1 justify-center items-center lg:items-start lg:text-left">
                        <h2 className="text-2xl lg:text-4xl xl:text-[56px] font-bold mb-4 text-center lg:text-left">
                            Why join us
                        </h2>
                        <ul className="space-y-6 text-center lg:text-left">
                            <li className="flex items-center text-base lg:text-lg xl:text-xl">
                                <span className="text-[#15803D] mr-2">✓</span>
                                Est et in pharetra magna adipiscing ornare aliquam.
                            </li>
                            <li className="flex items-center text-base lg:text-lg xl:text-xl">
                                <span className="text-[#15803D] mr-2">✓</span>
                                Tellus arcu sed consequat ac velit ut eu blandit.
                            </li>
                            <li className="flex items-center text-base lg:text-lg xl:text-xl">
                                <span className="text-[#15803D] mr-2">✓</span>
                                Ullamcorper ornare in et egestas dolor orci.
                            </li>
                        </ul>
                        <Link
                            href="/signup"
                            className="mt-6 px-4 py-2 rounded-lg border border-[#78350F] text-[#78350F] text-base lg:text-lg z-10 cursor-pointer"
                        >
                            Sign up now
                        </Link>
                    </div>
                    <div className="flex justify-end items-center mt-4 lg:mt-0 relative">
                        <img src="/media/Desktop.png" alt="Collectible Sneakers" className="max-w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
}
