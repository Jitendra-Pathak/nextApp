import style from './index.module.scss';

export default function Services() {
    return (
        <div className={`${style.services} bg-white`}>
            <div className={`m-auto flex p-12 pl-0 max-[640px]:flex-col max-[640px]:text-center max-[640px]:px-4`}>
                <div className='w-1/2 max-[640px]:w-full'>
                    <img src="/images/circles.png" alt="" />
                </div>
                <div className='w-1/2 max-[640px]:w-full py-12 px-4'>
                    <h4 className='font-bold text-xl pb-2 link'>Our services</h4>
                    <p className='uppercase text-4xl pb-8'>
                        <span className={style.light}>Features that </span>
                        <span className='font-bold '>differentiate us from others!</span>
                    </p>
                    <div className='flex flex-wrap max-[640px]:flex-col'>
                        <div className='w-1/2 pr-8 pb-12 max-[640px]:w-full max-[640px]:text-center max-[640px]:py-4'>
                            <h1 className='pb-2 font-bold text-lg pb-1'>24*7 Support</h1>
                            <p className={`text-sm ${style.light}`}>
                                Dedicated team of 24x7 excellent customer support to help you whenever you need
                            </p>
                        </div>
                        <div className='w-1/2 pr-8 pb-12 max-[640px]:w-full max-[640px]:text-center max-[640px]:py-4'>
                            <h1 className='pb-2 font-bold text-lg pb-1'>Experienced Team</h1>
                            <p className={`text-sm ${style.light}`}>We have an expert team of testing professionals with decades of experience.</p>
                        </div>
                        <div className='w-1/2 pr-8 pb-12 max-[640px]:w-full max-[640px]:text-center max-[640px]:py-4'>
                            <h1 className='pb-2 font-bold text-lg pb-1'>Cost Affordable</h1>
                            <p className={`text-sm ${style.light}`}>
                                Outsourcing QA benefits you in getting attractive rates for high-quality
                                testing services with flexible settlement options. You can choose from:
                                fixed rate model, time and materials model, or pay-as-you-go model.
                            </p>
                        </div>
                        <div className='w-1/2 pr-8 pb-12 max-[640px]:w-full max-[640px]:text-center max-[640px]:py-4'>
                            <h1 className='pb-2 font-bold text-lg pb-1'>Proficient QA Services</h1>
                            <p className={`text-sm ${style.light}`}>
                                We leverage our deep technology and industry-specific understanding to
                                facilitate cutting-edge testing services which ensure end-to-end validation
                                of the data, services, applications or software being tested in align with
                                our client's business context.
                            </p>
                        </div>
                        <div className='w-1/2 pr-8 max-[640px]:w-full max-[640px]:text-center max-[640px]:py-4'>
                            <h1 className='pb-2 font-bold text-lg pb-1'>Working on Your Schedule</h1>
                            <p className={`text-sm ${style.light}`}>
                                We are twice as productive as a seaward option,
                                committed to giving astounding programming testing administration to our
                                esteemend clients within the specified time frame.
                            </p>
                        </div>
                        <div className='w-1/2 pr-8 max-[640px]:w-full max-[640px]:text-center max-[640px]:py-4'>
                            <h1 className='pb-2 font-bold text-lg pb-1'>Flexible Engagement Model</h1>
                            <p className={`text-sm ${style.light}`}>
                                Advantage from our capacity of work consistently
                                with your inner groups and coordinate with your nimble
                                advancement process - we adjust to you, going the extra mile to convey what you anticipate.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
