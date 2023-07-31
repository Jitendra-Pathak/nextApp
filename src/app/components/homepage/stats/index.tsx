import Image from 'next/image';
import style from './index.module.scss';

export default function Stats() {
    return (
        <div className={`${style.stats} bg-white rounded-xl absolute bottom-[-75px] max-[640px]:relative max-[640px]:bottom-0`}>
            <div className={`layoutWidth m-auto flex ${style.wrapper} p-6 rounded-xl justify-evenly max-[64px]:flex-wrap max-[640px]:text-center`}>

                <div>
                    <h1 className='pb-2 text-white text-4xl font-bold'>6K+</h1>
                    <p className='text-white text-xl'>Test Case Executed</p>
                </div>
                <div>
                    <h1 className='pb-2 text-white text-4xl font-bold'>1K+</h1>
                    <p className='text-white text-xl'>Test Case Automated</p>
                </div>
                <div>
                    <h1 className='pb-2 text-white text-4xl font-bold'>15+</h1>
                    <p className='text-white text-xl'>Project Delivered</p>
                </div>
                <div>
                    <h1 className='pb-2 text-white text-4xl font-bold'>90%+</h1>
                    <p className='text-white text-xl'>Client Retention</p>
                </div>
              
            </div>
        </div>
    )
}
