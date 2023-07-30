
import style from './footer.module.scss';

export default function Footer() {
  return (
    <div className={style.footerContainer}>
     <div className={`py-10 ${style.content} layoutWidth`}>
        <div className={`${style.sec1} w-4/12 text-white`}>
            <p className='mt-0 font-bold pb-2'>
            Techo Ninja has decades of experience in delivering high-quality 
            customer centric testing solutions to clients across the globe.
            </p>
            <p>Email: info@techoninja.com</p>
            <p>Phone: +91 9582151365</p>
        </div>
        <div className='w-4/12 px-16'>
            <span className='font-bold pb-3 block'>Quick Links</span>
            <ul>
                <li className='pb-2'>Home</li>
                <li className='pb-2'>About us</li>
                <li className='pb-2'>Our services</li>
                <li className='pb-2'>Our Team</li>
                <li className='pb-2'>Contact us</li>
            </ul>
        </div>
        <div className={`${style.sec2} w-4/12 text-white`}>
            <p className='mt-0 font-bold pb-2'>Newsletter</p>
            <p>Subscribe to our newsletter and get the latest testing tips directly in your inbox.</p>
            <div className='pt-2'>
                <input type="text" placeholder='Email' className='px-4' />
                <input type="button" value='Subscribe' className='mt-2 w-auto bg-white text-black font-bold px-4' />
            </div>
        </div>
     </div>
    </div>
  )
}
