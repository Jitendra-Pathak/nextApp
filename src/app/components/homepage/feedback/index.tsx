import Image from 'next/image';
import Stats from '../stats';
import style from './index.module.scss';
import CarouselComponent from '../carousal';

const imgSize = 60;

export default function Feedback() {
    return (
        <div className={`${style.feedback} bg-white`}>
            <div className={`layoutWidth m-auto relative`}>
                <div className='flex max-[640px]:flex-col'>
                    <div className='w-1/2  pt-12 pb-32 max-[640px]:w-full max-[640px]:text-center max-[640px]:pb-12'>
                        <h2 className='text-md font-bold link1 max-[640px]:text-lg'>Customer's Feedback</h2>
                        <h1 className='text-3xl pt-6 pb-10'>
                            <b className='font-bold'>The Trust </b>
                            <span>From Clients</span>
                        </h1>
                        <p className={`pr-36 text-md ${style.text} max-[640px]:p-4`}>
                            Techo Ninja has been providing the best solutions to its customer.
                            Here's what our customer says about us.
                        </p>

                    </div>
                    <div className={`w-1/2  pt-12 pb-32 pl-12 ${style.dark} max-[640px]:w-full max-[640px]:text-center max-[640px]:p-4 max-[640px]:pb-12 max-[640px]:pt-0`}>
                    <CarouselComponent />
                        {/* <div className='py-12'>
                            <p className='text-md'>Whenever I need a Manual testing or Automatio Testing solution for my </p>
                            <p className='text-md'>business. Techo Ninja comes first in my mind.</p>
                        </div>
                        
                        <div className='flex justify-evenly'>
                            <Image
                                src="/images/client11.jpg"
                                alt="Twitter"
                                className="dark:invert cursor-pointer"
                                width={imgSize}
                                height={imgSize}
                                priority
                            />
                            <Image
                                src="/images/client2.jpg"
                                alt="Twitter"
                                className="dark:invert cursor-pointer"
                                width={imgSize}
                                height={imgSize}
                                priority
                            />
                            <Image
                                src="/images/client3.jpg"
                                alt="Twitter"
                                className="dark:invert cursor-pointer"
                                width={imgSize}
                                height={imgSize}
                                priority
                            />
                        </div>
                        <div className='flex justify-evenly'>
                        <h1 className='font-bold text-2xl text-center py-10'>Anil Mehta</h1>
                        <h1 className='font-bold text-2xl text-center py-10'>Vinod Ahuja</h1>
                        <h1 className='font-bold text-2xl text-center py-10'>Maria Deo</h1>
                        </div> */}
                    </div>
                </div>
                <Stats />
            </div>
        </div>
    )
}
