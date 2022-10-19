import React from 'react'
import yogaTechHead from '../../assets/images/yoga-techniques.svg'
import yogaTechImg1 from '../../assets/images/yoga-tech-img1.png'
import yogaTechImg2 from '../../assets/images/yoga-tech-img2.png'
import yogaTechImg3 from '../../assets/images/yoga-tech-img3.png'

export default function YogaTechniques() {
    const [arr, funcFlip] = React.useState(
        [{
            id : 1,
            imageText : 'Self Yoga',
            imageLoc : yogaTechImg1
        },
        {
            id : 2,
            imageText : 'Couple Yoga',
            imageLoc : yogaTechImg2
        },
        {
            id : 3,
            imageText : 'Family & Friends',
            imageLoc : yogaTechImg3
        }])
  return (
    <div>
        <section className="2xl:h-96 sm:mt-14 bg-slate-800 bg-opacity-25 lg:mt-1 pb-8">
            <img src={yogaTechHead} alt="" className='block mx-auto pt-5'/>
            <div className='flex mt-8 mx-5 justify-center 2xl:gap-5 sm:flex-col sm:items-center sm:gap-5 lg:flex-row'>
                {
                    arr.map((img,i) =>{
                        return(
                            <>
                                <div  key={i} className='yoga-img 2xl:w-96 2xl:relative sm:relative'>
                                <img src={img.imageLoc} alt="" className='2xl:w-full 2xl:h-48 2xl:object-cover'/>
                                <h5 className='absolute m-0 bottom-0 w-full text-center py-3 text-[24px] text-pink-50 font-light tracking-widest bg-slate-700 bg-opacity-25'>{img.imageText}</h5>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </section>
    </div>
  )
}
