import style from './index.module.scss';

export default function Banner() {
    return (
       <div className={style.container}>
         <div className={`${style.banner}`}>
            <div className='layoutWidth m-auto px-12 py-24 max-[640]:p-4'>
                <h2 className='link1 text-2xl pb-4'>Cost Affordable</h2>
                <h4 className='text-3xl pb-8'>FLEXIBLE ENGAGAMENT MODEL</h4>
                <p className='secondaryColor text-1xl pb-20'>What makes us unique and better than others</p>

               <div className='flex'>
               <button className='bg-black text-white rounded-lg px-3 py-2 font-bold mr-12'>Read More</button>
               </div>
            </div>
        </div>
       </div>
    )
}
