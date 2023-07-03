
import React from 'react'
import '../app/styles/main.css'
import {BsSearch} from 'react-icons/bs'

const Main = ( {isSmallScreen} ) => {


  return (

    <div id='home' className='h-screen'>

        <div className={` relative ${isSmallScreen ? 'top-14 mainSmall' : 'left-56 mainBig'} bg-gray-800 h-full mx-auto p-4 flex flex-col justify-start items-center`}>
          
          <form className='bg-gray-900 relative rounded-3xl w-full h-24 flex items-start justify-center mx-2 flex-col'>
            <div className='w-full h-1/2 rounded-t-3xl outline-none bg-black text-white p-2 px-4 flex items-center'>
              <BsSearch className='mr-2 text-gray-400' />
              <input className='w-full bg-transparent outline-none text-white placeholder-gray-400' type="search" placeholder="Search" />
            </div>
            <div className='h-1/2 p-4 text-white flex justify-apart items-center w-full'>
              
              <p className='flex justify-start items-center w-1/2 mx-3 text-sm'>
              Powered by <img src="/assets/defillama.webp" className='h-9 mx-2' />
              </p>
                          

            </div>
          </form>


          <div className='w-full h-4/5 sm:h-1/2 lg:h-3/5 bg-gray-900 rounded-3xl mt-6 p-6 text-gray-400 sm:grid grid-cols-4 grid-rows-4 grid-flow-col gap-2'>
              <div className='font-bold flex sm:flex-col row-span-4'>
                <div className='m-2'>
                <p className='md:text-xl m-1'>Total Value Locked </p>
                <p className='md:text-2xl text-lg sm:mb-2 text-white m-1'>$2.17b</p>
                </div>
                <div className='m-2'>
                <p className='md:text-lg m-1 mb-2'>24hr Fees</p>
                <p className='text-lg text-white sm:mb-2 ml-1'>$205,417</p>
                </div>
                <div className='m-2'>
                <p className='md:text-lg m-1'>$ARB Price</p>
                <p className='text-lg text-white sm:mb-2 ml-1'>$1.17</p>
                </div>
              </div>
              
              
              <div className='w-full h-auto m-auto flex items-start justify-start sm:pl-6 sm:p-2 font-normal col-span-3 mb-2'>
                <button className='bg-[#3267D6] lg:text-lg hover:scale-105 ease-in duration-300 rounded-2xl py-2 px-3 m-2 text-gray-200'>TVL</button>
                <button className='bg-[#3267D6] lg:text-lg hover:scale-105 ease-in duration-300 rounded-2xl py-2 px-3 m-2 text-gray-200'>Fees</button>
                <button className='bg-[#3267D6] lg:text-lg hover:scale-105 ease-in duration-300 rounded-2xl py-2 px-3 m-2 text-gray-200'>$ARB Price</button>
              </div>
              <div className='border-2 w-full h-3/5 sm:h-auto row-span-3 col-span-3'>
                  Chart goes here
              </div>
              
              

          </div>            


        </div>

    </div>
  )
}

export default Main