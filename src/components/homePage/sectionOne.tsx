import Link from 'next/link'
import React from 'react'

export function Collectible() {
    return (
        <div className=" w-full p-4 bg-[url('/icons/rectangle.svg')] bg-cover bg-center  lg:flex-row lg:justify-between">
            <div className='flex flex-col w-full lg:flex-row lg:items-start items-center'>
                <div className='flex flex-col flex-1 justify-center lg:items-start items-center text-center lg:text-left mb-8 lg:mb-0'>
                    <span className='text-4xl lg:text-6xl xl:text-7xl font-bold mb-4'>
                        Collectible Sneakers
                    </span>
                    <span className='text-base lg:text-lg xl:text-xl mb-6'>
                        Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
                    </span>
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <Link
                            href="/signup"
                            className="px-4 py-2 rounded-lg border border-[#78350F] text-[#78350F] text-base lg:text-lg"
                        >
                            Sign up now
                        </Link>
                        <Link
                            href="/signup"
                            className="px-4 py-2 rounded-lg border border-[#78350F] text-[#78350F] text-base lg:text-lg flex items-center gap-x-2"
                        >
                            <img src='icons/watchdemo.svg' alt="Watch Demo" className="w-6 h-6" />
                            Watch Demo
                        </Link>
                    </div>
                </div>
                <div className='flex-1 flex justify-center items-center mt-4 lg:mt-0'>
                    <img src='media/col.png' alt="Collectible Sneakers" className="max-w-full h-auto" />
                </div>
            </div>
            <div className='flex flex-col items-center lg:flex-row gap-4 mx-12 mt-12'>
                <div className='flex flex-col  flex-1 justify-center items-center lg:items-start text-center lg:text-left'>
                    <img src='icons/cup.svg' className="mx-auto lg:mx-0" />
                    <span className='text-[20px] font-bold mb-4'>
                        Collectible Sneakers
                    </span>
                    <span className='text-lg mb-6'>
                        Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
                    </span>
                </div>
                <div className='flex flex-col flex-1 justify-center items-center lg:items-start text-center lg:text-left'>
                    <img src='icons/cake.svg' className="mx-auto lg:mx-0" />
                    <span className='text-[20px] font-bold mb-4'>
                        Cursus amet
                    </span>
                    <span className='text-lg mb-6'>
                        Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
                    </span>
                </div>
                <div className='flex flex-col flex-1 justify-center items-center lg:items-start text-center lg:text-left'>
                    <img src='icons/tv.svg' className="mx-auto lg:mx-0" />
                    <span className='text-[20px] font-bold mb-4'>
                        Ipsum fermentum
                    </span>
                    <span className='text-lg mb-6'>
                        Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
                    </span>
                </div>
            </div>
        </div>
    )
}

