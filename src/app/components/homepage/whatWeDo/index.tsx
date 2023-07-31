import Link from 'next/link';
import style from './index.module.scss';

export default function WhatWeDO() {
    return (
        <div className={`${style.services} bg-[#11a3de]`}>
            <div className={`layoutWidth m-auto pt-16 pb-28 text-white max-[640px]:text-center`}>
                <h2 className='text-lg font-bold pb-2 text-white'>What We Do</h2>
                <h1 className='text-2xl pb-8 text-white'>
                    <span className=''>Highlights that help you </span>
                    <span className='font-bold'>construct better</span>
                </h1>

                <div className='max-[640px]:p-4'>
                    <div className='inline-block w-[28%] max-[640px]:w-full p-6 rounded-2xl border border-white border-solid '>
                        <img src="/images/testing.png" alt="" className='max-[640px]:m-auto' />
                        <div className='pt-6'>
                            <h4 className='pb-2 text-lg text-white font-bold'>Mobile Apps Testing</h4>
                            <p className="text-white text-sm pb-6">
                                Quick, secure and dependable mobile app testing specializing in 
                                custom and cross-plat- form mobile app development for local, 
                                native and hybrid platforms.
                                <br />
                                <br />
                                <br />
                            </p>
                            <button className='bg-white rounded px-4 py-2 font-bold link zoomBtn blueLinkBtn'>
                                <Link href='/mobileTesting'>Read more</Link>
                            </button>
                        </div>

                    </div>
                    <div className='inline-block text-black max-[640px]:w-full bg-white mx-6 w-[39%] p-12 rounded-2xl border border-[#11a3de] border-solid relative bottom-[-30px] max-[640px]:bottom-0 max-[640px]:m-0 max-[640px]:my-8'>
                        <img src="/images/output.png" alt="" className='max-[640px]:m-auto' />
                        <div className='pt-12'>
                            <h4 className='pb-12 text-lg font-bold'>Website Testing</h4>
                            <p className="light text-sm pb-12">Testing your websites on all supported browsers and devices to ensure 
                                seamless browsing experience, our testing team gives equal importance to 
                                functionality and user experience to guarantee a successful product for 
                                you in all terms.
                            </p>
                            <button className={`rounded px-4 py-2 font-bold text-white themeBtn ${style.shadebtn}`}>
                                <Link href='/webAppTesting' className='text-white'>Read more</Link>
                            </button>
                        </div>

                    </div>
                    <div className='inline-block w-[28%] max-[640px]:w-full p-6 rounded-2xl border border-white border-solid '>
                        <img src="/images/testing.png" alt="" className='max-[640px]:m-auto' />
                        <div className='pt-6'>
                            <h4 className='pb-2 text-lg text-white font-bold'>Ecommerce Testing</h4>
                            <p className="text-white text-sm pb-6">Leveraging our testing skills and expertise of testing e-commerce sites built using a wide range of platforms Magento,Shopify, we test your e-commerce apps extensively covering all use cases and scenarios.</p>
                            <button className='bg-white rounded px-4 py-2 font-bold link zoomBtn blueLinkBtn'>
                                <Link href='/ecommerceTesting'>Read more</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
