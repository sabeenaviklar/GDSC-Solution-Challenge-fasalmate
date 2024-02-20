import React from 'react'

interface FarmProps {
  backgroundImage: string;
  title: string;
  subtitle: string;

}

const FarmSite =({ backgroundImage, title, subtitle }: FarmProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 
    2xl:rounded-5xl`}> 
    
    <div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 border-blue-500'>

    </div>
    </div>
  )
}

const Farm = () => {
  return (
    <section className='border-2 border-green-500 2xl:max-container relative flex fles-col py-10 lg:py-20 xl:mb-20'>
        <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow x-auto lg:h-[400px] xl:h-[640px]'>
          <FarmSite
          backgroundImage="bg-bg-img-1"
          title="Crops"
          subtitle="crop is good"
          />
        </div>
    </section>
  )
}

export default Farm;