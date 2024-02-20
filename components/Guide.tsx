import React from 'react'
import Image from 'next/image'

const Guide = () => {
  return (
  <section className='bg_Guide_color flexcenter flex-col' >
    <div className=' padding-container max-container w-full pb-24'> 
      <Image src="/iconFarmer.png" alt="" width={50} height={50} />
      <p className='uppercase regular-18 mt-1 mb-3 text-green-50'>
          We are here for You!!

      </p>
      <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='bold-40 lg:bold-64 '> We guide both Farmers and consumers for an easy way to follow</h2>
          <p className='regular-18 text-gray-30 xl:max-w-[520px]'>
            In our site you can collaborate with trustworthy individuals. Additionally you can buy the products directly 
            from farmers which is beneficial to farmers who will get their fair compensation for their efforts.
          </p>
      </div>
    </div>

      <div className='flexCenter max-container relative w-full '>
        {/* <Image
        src="/boat.png"
        alt='boat'
        width={1440}
        height={580}
        className="w-full object-cover object-center 2xl:rounded-5xl"
        />
         <Image
        src="/boat.png"
        alt='boat'
        width={1440}
        height={580}
        className="w-full object-cover object-center 2xl:rounded-5xl"
        /> */}

<div style={{ display: 'flex', gap: '16px' }}>
      <Image
        src="/farmerWomen.png"
        alt="farmerWomen"
        width={420}
        height={380}
      />
      <Image
        src="/farmerHarvest.png"
        alt="farmerHarvest"
        width={420}
        height={380}
      />
    </div>


      {/* <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left[5%]
      lg:top-20">
        <div className="flexBetween flex-col">
          <div className='flex w-full flex-col'>
            <div className='flexBetween w-full'>
              <p className='regular-16 text-gray-20'> Destination </p>
              <p className='bold-16 text-green-50'> 48 min </p>
            </div>
            <p className="bold-20 mt-2"> farmer</p>
          </div>

        </div>

      </div> */}

      </div>
  </section>
  )
}

export default Guide