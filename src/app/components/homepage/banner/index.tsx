import style from './index.module.scss';

export default function Banner() {
    return (
       <div className={style.container}>
         <div className={`${style.banner}`}>
            <div className='layoutWidth m-auto px-12 py-24 max-[640]:p-4'>
                <h2 className='link text-3xl pb-4'>Cost Affordable</h2>
                <h1 className='text-5xl pb-8'>FLEXIBLE ENGAGAMENT MODEL</h1>
                <p className='secondaryColor text-2xl pb-20'>What makes us unique and better than others</p>

               <div className='flex'>
               <button className='bg-black text-white rounded-lg px-5 py-3 font-bold mr-12'>Read More</button>
                <button className='flex items-center font-bold link'>
                    <img src="/images/planicon.png" className='pr-2' alt="" />
                    Our plans
                </button>
               </div>
            </div>
        </div>
       </div>
    )
}
