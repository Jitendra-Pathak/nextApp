import Image from 'next/image';
import style from './index.module.scss';

export default function Stats() {
    return (
        <div className={`${style.stats} bg-white absolute bottom-[-75px] max-[640px]:relative max-[640px]:bottom-0`}>
            <div className={`layoutWidth m-auto flex ${style.wrapper} p-12 rounded-xl justify-evenly max-[640px]:flex-wrap max-[640px]:text-center`}>

                <div>
                    <h1 className='pb-2 text-white text-4xl font-bold'>302+</h1>
                    <p className='text-white text-xl'>Happy customer</p>
                </div>
                <div>
                    <h1 className='pb-2 text-white text-4xl font-bold'>500+</h1>
                    <p className='text-white text-xl'>Digital servers sold</p>
                </div>
                <div>
                    <h1 className='pb-2 text-white text-4xl font-bold'>15+</h1>
                    <p className='text-white text-xl'>Locations</p>
                </div>
                <div>
                    <h1 className='pb-2 text-white text-4xl font-bold'>302+</h1>
                    <p className='text-white text-xl'>Team members</p>
                </div>
              
            </div>
        </div>
    )
}
