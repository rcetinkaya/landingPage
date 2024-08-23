import Link from 'next/link'
import React from 'react'

export function Collection() {
    return (
        <div className=" w-full p-4 bg-[url('/media/collection.svg')] bg-cover bg-center  lg:flex-row lg:justify-between">

            <div className='flex flex-col mx-12'>
                <span className='text-4xl lg:text-6xl xl:text-7xl font-bold mb-4'>
                    Grow your collection
                </span>
                <span className='text-base lg:text-lg xl:text-xl mb-6'>
                    Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
                    Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
                </span>

            </div>

            <div className='flex flex-col w-full lg:flex-row lg:items-start items-center'>
                <div className='flex flex-col flex-grow-0 flex-shrink-1 mx-12'>
                    <span className='text-lg'>
                        Grow your collection
                    </span>
                </div>
                <div className='flex-grow flex justify-center items-center mt-4 lg:mt-0'>
                    <img src='media/col.png' alt="Collectible Sneakers" className="max-w-full h-auto" />
                </div>
            </div>

        </div>
    )
}

