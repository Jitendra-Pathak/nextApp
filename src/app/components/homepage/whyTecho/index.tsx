import style from './index.module.scss';

export default function WhyTecho() {
    return (
        <div className={`${style.whyTecho} bg-white pt-36 pb-8 max-[640px]:text-center max-[640px]:pt-12`}>
            <div className={`layoutWidth m-auto`}>
                <h1 className='text-3xl uppercase'>Why <span className='font-bold'>Techo Ninja?</span></h1>
                <p className='text-md secondaryColor'>we provide complete testing solutions to our clients in attractive pricing.</p>
                <img src="/images/proccess.png" alt="process" />

            </div>
        </div>
    )
}
